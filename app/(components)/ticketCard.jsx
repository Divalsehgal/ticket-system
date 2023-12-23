import React from "react";
import DeleteBlock from "./deleteBlock";
import PriorityDisplay from "./priorityDisplay";
import ProgressDisplay from "./progressDisplay";
import StatusDisplay from "./statusDisplay";
import TicketTitle from "./ticketTitle";

function TicketCard({ticket}) {
  return (
    <div className="flex flex-col bg-light-accent dark:bg-dark-secondary rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3 justify-between">
        <PriorityDisplay priority={ticket.priority} />
        <DeleteBlock />{" "}
      </div>
      <TicketTitle title={ticket.title} />
      <hr className="h-px border-0 bg-light-primary mb-2" />
      <p className="whitespace-pre-wrap break-words">{ticket.description}</p>
      <div className="flex-grow"></div>
      <div className="flex mt-2 ">
        <div className="flex flex-col">
          {" "}
          <div>
            {" "}
            <p className="text-xs my-1 ">{ticket.createdAt}</p>
          </div>
          <div className="">
            {" "}
            <ProgressDisplay progress={ticket.progress} />
          </div>
        </div>
        <div className="ml-auto flex flex-end">
          {" "}
          <StatusDisplay status={ticket.status}/>
        </div>
      </div>
    </div>
  );
}

export default TicketCard;
