import config from "../Config/Config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client.setEndpoint(config.appwriteUrl).setProject(config.projectId);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredimage, status, userid }) {
    try {
      return await this.databases.createDocument(
        config.databaseId,
        config.collectionId,
        slug,
        { title, content, featuredimage, status, userid }
      );
    } catch (error) {
      console.log("Appwrite  service:: createPost :: error ", error);
      throw error;
    }
  }

  async updatePost(slug, { title, content, featuredimage, status }) {
    try {
      return await this.databases.updateDocument(
        config.databaseId,
        config.collectionId,
        slug,
        {
          title,
          content,
          featuredimage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite  service:: updatePost :: error ", error);
      throw error;
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        config.databaseId,
        config.collectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite  service:: deletePost :: error ", error);
      throw error;
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        config.databaseId,
        config.collectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite  service:: getPost :: error ", error);
      throw error;
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        config.databaseId,
        config.collectionId,
        queries
      );
    } catch (error) {
      console.log("Appwrite  service:: getPosts :: error ", error);
      throw error;
      return false;
    }
  }

  // file upload method

  async uploadFile(file) {
    try {
      return await this.storage.createFile(config.bucketId, ID.unique(), file);
    } catch (error) {
      console.log("Appwrite  service:: uploadFile :: error ", error);
      throw error;
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(config.bucketId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite  service:: deleteFile :: error ", error);
      throw error;
      return false;
    }
  }

  getFilePreview(fileId) {
    return this.storage.getFilePreview(config.bucketId, fileId);
  }
}

const service = new Service();
export default service;
