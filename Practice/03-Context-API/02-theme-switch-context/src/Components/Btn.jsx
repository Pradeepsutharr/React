import React from "react";
import useTheme from "../Context/ThemeContext";

function Btn() {
  const { ThemeMode, DarkMode, LightMode } = useTheme();

  const BtnChange = (e) => {
    const DarkModeStatus = e.target.checked;

    DarkModeStatus ? DarkMode() : LightMode();
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        checked={ThemeMode === "dark"}
        onChange={BtnChange}
      />

      {ThemeMode === "dark" ? (
        <i className="fa-solid fa-moon" />
      ) : (
        <i className="fa-solid fa-sun" />
      )}
    </label>
  );
}

export default Btn;
