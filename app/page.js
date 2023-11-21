import React from "react";
import TicketCard from "./(components)/ticketCard";

const Dashboard = () => {
  return (
    <div className="p-5">
      <div className="lg:grid grid-cols-2 xl:grid grid-cols-4">
        <TicketCard />

        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </div>
  );
};

export default Dashboard;
