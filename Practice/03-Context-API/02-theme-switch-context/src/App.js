import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "./Context/ThemeContext";
import Btn from "./Components/Btn";
import Card from "./Components/Card";
import { useEffect, useState } from "react";

function App() {
  const [ThemeMode, setThemeMode] = useState("light");

  const DarkMode = () => {
    setThemeMode("dark");
  };

  const LightMode = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    const Page = document.querySelector("html");
    Page.classList.remove("dark", "light");
    Page.classList.add(ThemeMode);
  }, [ThemeMode]);

  return (
    <ThemeProvider value={{ ThemeMode, DarkMode, LightMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Btn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
