import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHand, faHome, faX } from "@fortawesome/free-solid-svg-icons";

import React from 'react'

function DeleteBlock() {
  return (
    <div>
      <FontAwesomeIcon
        icon={faX}
        className="text-light-delete hover:cursor-pointer hover:text-dark-primary dark:text-dark-delete"
      />
    </div>
  ); 
}

export default DeleteBlock
