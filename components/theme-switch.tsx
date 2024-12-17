"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

/**
 * A component that renders a button to toggle between light and dark themes.
 *
 * @returns {JSX.Element} A button that toggles the current theme when clicked.
 */
export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed top-24 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 sm:top-5"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
