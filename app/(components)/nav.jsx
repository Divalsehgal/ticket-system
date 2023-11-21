"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faTicket,
  faToggleOff,
  faToggleOn,
} from "@fortawesome/free-solid-svg-icons";
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
    <div className="flex justify-between bg-light-bg dark:bg-dark-bg h-100 w-100  text-light-primary dark:bg-slate-950 bg-slate-300 dark:text-gray-200">
      <div className="p-4 space-x-2">
        <Link href="/">
          <FontAwesomeIcon className="icon" icon={faHome} />
        </Link>
        <Link href="/tickets-page/new">
          <FontAwesomeIcon className="icon" icon={faTicket} />
        </Link>
      </div>
      <div className="p-4 flex justify-between items-center space-x-2">
        <button  onClick={toggleTheme}>
          <FontAwesomeIcon
            className="icon"
            icon={darkMode ? faToggleOn : faToggleOff}
          />
        </button>
        <p className="pb-2">sehgaldival@gmail.com</p>
      </div>
    </div>
  );
}

export default Nav;
