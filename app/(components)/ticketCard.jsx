import React from "react";
import DeleteBlock from "./deleteBlock";
import PriorityDisplay from "./priorityDisplay";
import ProgressDisplay from "./progressDisplay";
import StatusDisplay from "./statusDisplay";
import TicketTitle from "./ticketTitle";

function TicketCard() {
  return (
    <div className="flex flex-col bg-light-accent dark:bg-dark-secondary rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3 justify-between">
        <PriorityDisplay />
        <DeleteBlock />{" "}
      </div>
      <TicketTitle />
      <hr className="h-px border-0 bg-light-primary mb-2" />
      <p className="whitespace-pre-wrap break-words">
        this is the best hgbhjknhgfdcfvgbhjn
        hgbhjknhgfdcfvgbhjnhgbhjknhgfdcfvgbhjnhgbhjknhgfdcfvgbhjnhgbhjknhgfdcfvgbhjn
        tgfrde
      </p>
      <div className="flex-grow"></div>
      <div className="flex mt-2 ">
        <div className="flex flex-col">
          {" "}
          <div>
            {" "}
            <p className="text-xs my-1 ">20-Nov-2023</p>
          </div>
          <div className="">
            {" "}
            <ProgressDisplay />
          </div>
        </div>
        <div className="ml-auto flex flex-end">
          {" "}
          <StatusDisplay />
        </div>
      </div>
    </div>
  );
}

export default TicketCard;
