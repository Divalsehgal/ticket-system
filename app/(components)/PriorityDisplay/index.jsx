import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function PriorityDisplay({ priority }) {
  return (
    <div className="flex gap-0.5 items-center">
      {[1, 2, 3, 4, 5].map((n) => (
        <FontAwesomeIcon
          key={n}
          className={
            n <= priority
              ? "text-orange-500 drop-shadow-sm icon"
              : "text-gray-300 icon"
          }
          icon={faFire}
        />
      ))}
    </div>
  );
}

export default PriorityDisplay;
