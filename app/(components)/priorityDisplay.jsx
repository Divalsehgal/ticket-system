import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function PriorityDisplay({ priority}) { 
  return (
    <div className="flex justify-center align-baseline">
      <FontAwesomeIcon
        className={`${priority > 0 ? "text-red-400 " : "text-slate-400"}`}
        icon={faFire}
      />
      <FontAwesomeIcon
        className={`${priority > 0 ? "text-red-400 " : "text-slate-400"}`}
        icon={faFire}
      />
      <FontAwesomeIcon
        className={`${priority > 0 ? "text-red-400 " : "text-slate-400"}`}
        icon={faFire}
      />
      <FontAwesomeIcon
        className={`${priority > 0 ? "text-red-400 " : "text-slate-400"}`}
        icon={faFire}
      />
      <FontAwesomeIcon
        className={`${priority > 0 ? "text-red-400 " : "text-slate-400"}`}
        icon={faFire}
      />
    </div>
  );
}

export default PriorityDisplay;
