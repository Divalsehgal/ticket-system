import React from 'react'

function ProgressDisplay() {
  return (
    <div className="w-full bg-light-background dark:bg-light-primary rounded-full h-2.5 ">
      <div
        className="rounded-full bg-light-primary h-2.5  dark:bg-light-accent"
        style={{ width: "75%" }}
      ></div>
    </div>
  );
}

export default ProgressDisplay 
