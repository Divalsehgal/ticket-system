"use client";
import React, { useState, useEffect } from "react";

function Nav() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  function toggleTheme() {
    const body = document.body;

    if (typeof window !== "undefined") {
      if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        localStorage.setItem("theme", "light"); 
      } else {
        body.classList.add("dark");
        localStorage.setItem("theme", "dark"); 
      }
      setDarkMode(!darkMode);
    }
  }


  return (
    <div className="h-100 w-100  text-black dark:bg-slate-950 bg-slate-300 dark:text-gray-200">
      <button className="" onClick={toggleTheme}>
        Toggle
      </button>
      <div className="bg-light-bg dark:bg-dark-bg">
    
      </div>
    </div>
  );
}

export default Nav;
