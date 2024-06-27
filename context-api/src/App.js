import './App.css';
import Login from './Components/Login';
import Profile from './Components/Profile';
import ContextProvider from './Context/ContextProvider'

function App() {
  return (
    <ContextProvider>
      <Login />
      <Profile />
    </ContextProvider>
  );
}

export default App;
