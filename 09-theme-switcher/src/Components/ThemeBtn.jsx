import React from "react";
import useTheme from "../Context/Theme";

function ThemeBtn() {
  const { themeMode, darkTheme, lightTheme } = useTheme();

  const BtnChange = (e) => {
    const DarkStatus = e.currentTarget.checked;
    if (DarkStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    // <label className="relative inline-flex items-center cursor-pointer">
    //   <input
    //     type="checkbox"
    //     value=""
    //     className="sr-only peer"
    //     onChange={BtnChange}
    //     checked={themeMode === "dark"}
    //   />
    //   <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    //   <span className="ml-3 text-sm font-medium text-gray-900">
    //     Toggle Theme
    //   </span>
    // </label>

    <div class="mb-3">
      <div class="relative inline-block w-10 mr-2 align-middle select-none">
        <input type="checkbox" name="toggle" id="Blue" className="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
          onChange={BtnChange}
          checked={themeMode === "dark"}
        />
        <label for="Blue" class="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer">
        </label>
      </div>
      <span class="font-medium text-gray-400">
        Toggle Theme
      </span>
    </div>

  );
}

export default ThemeBtn;
