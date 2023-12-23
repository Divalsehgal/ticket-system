import React from 'react'

function StatusDisplay({status}) {
  return (
    <span className="text-light-primary px-1 py-2 rounded-full bg-lime-500 dark:bg-lime-800">
      {status}
    </span>
  );
}

export default StatusDisplay;
