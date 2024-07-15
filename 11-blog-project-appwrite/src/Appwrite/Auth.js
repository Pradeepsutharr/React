import config from "../Config/Config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(config.appwriteUrl).setProject(config.projectId);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const useAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (useAccount) {
        // call another method
        return this.login({ email, password });
      } else {
        return useAccount;
      }
    } catch (error) {
      console.error("Error creating account:", error);
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.error("Error getting current user:", error);
      throw error;
    }

    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service :: logout :: error", error);
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;
