import React from "react";

function StatusDisplay({ status }) {
  return (
    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-lime-100 text-lime-700 dark:bg-lime-800 dark:text-lime-100 border border-lime-300 dark:border-lime-700">
      {status}
    </span>
  );
}

export default StatusDisplay;
