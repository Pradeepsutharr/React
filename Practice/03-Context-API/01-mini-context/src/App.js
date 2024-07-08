import logo from "./logo.svg";
import "./App.css";
import ContextProvider from "./Context/UserContextProvider";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

function App() {
  return (
    <ContextProvider>
      <Login />
      <Profile />
    </ContextProvider>
  );
}

export default App;
