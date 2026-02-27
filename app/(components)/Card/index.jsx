import React from "react";
import PriorityDisplay from "../PriorityDisplay";
import ProgressDisplay from "../progressDisplay";
import StatusDisplay from "../statusDisplay";
import Link from "next/link";
import DeleteButton from "../DeleteButton";

const formatTimestamp = (timestamp) => {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  const date = new Date(timestamp);
  const formattedDate = date.toLocaleString("en-US", options);

  return formattedDate;
};

const TicketCard = ({ ticket }) => {
  const createdDateTime = formatTimestamp(ticket.createdAt);

  return (
    <div className="card">
      <div className="flex items-center mb-2">
        <PriorityDisplay priority={ticket.priority} />
        <div className="ml-auto">
          <DeleteButton id={ticket._id} />
        </div>
      </div>
      <Link
        href={`/tickets/${ticket._id}`}
        style={{ display: "contents" }}
      >
        <h4 className="mb-1 text-lg font-semibold text-[var(--primary)]">
          {ticket.title}
        </h4>
        <hr className="h-px border-0 bg-[var(--border)] mb-2" />
        <p className="whitespace-pre-wrap text-sm mb-2">{ticket.description}</p>
        <div className="flex items-end justify-between mt-2">
          <div className="flex flex-col">
            <p className="text-xs text-gray-500 mb-1">{createdDateTime}</p>
            <ProgressDisplay progress={ticket.progress} />
          </div>
          <StatusDisplay status={ticket.status} />
        </div>
      </Link>
    </div>
  );
};

export default TicketCard;
