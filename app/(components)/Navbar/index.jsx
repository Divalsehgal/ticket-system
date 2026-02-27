"use client";
import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Link from "next/link";
// ...existing code...
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
    <nav className="flex justify-between items-center px-6 py-3 bg-[var(--surface)] border-b border-[var(--border)] shadow-sm">
      <div className="flex gap-3 items-center">
        <Link href="/">
          <button
            className={clsx("btn btn-primary font-semibold")}
            type="button"
          >
            Home
          </button>
        </Link>

        <Link href="/tickets">
          <button
            className={clsx("btn btn-primary font-semibold")}
            type="button"
          >
            Tickets
          </button>
        </Link>
        <Link href="/tickets/new">
          <button
            className={clsx("btn btn-primary font-semibold")}
            type="button"
          >
            New Ticket
          </button>
        </Link>
      </div>
      <button
        onClick={toggleTheme}
        className={clsx("btn btn-primary font-semibold")}
        type="button"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}

export default Nav;
