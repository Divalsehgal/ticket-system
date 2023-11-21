import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function PriorityDisplay() { 
  return (
    <div className="flex justify-center align-baseline">
      <FontAwesomeIcon className="text-light-delete" icon={faFire} />
      <FontAwesomeIcon className="text-light-delete" icon={faFire} />
      <FontAwesomeIcon className="text-light-delete" icon={faFire} />
      <FontAwesomeIcon className="text-light-delete" icon={faFire} />
      <FontAwesomeIcon className="text-light-delete" icon={faFire} />
    </div>
  );
}

export default PriorityDisplay;
