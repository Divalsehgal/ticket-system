import React from "react";
import TicketCard from "../(components)/Card";

const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/tickets", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

const Dashboard = async () => {
  const data = await getTickets();

  if (data?.tickets.length === 0) {
    return <p className="text-center">No tickets.</p>;
  }

  const tickets = data?.tickets;

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div className="p-5 flex flex-wrap gap-5">
      {tickets &&
        uniqueCategories?.map((uniqueCategory, categoryIndex) => (
          <div key={`category-${uniqueCategory}-${categoryIndex}`} className="bg-[var(--surface)] mb-4 border rounded p-3 gap-2 w-full md:w-[48%] flex flex-col">
            <h2>{uniqueCategory}</h2>
            {tickets
              .filter((ticket) => ticket.category === uniqueCategory)
              .map((filteredTicket, _index) => (
                <TicketCard
                  id={_index}
                  key={`ticket-${categoryIndex}-${_index}`}
                  ticket={filteredTicket}
                />
              ))}
          </div>
        ))}

    </div>
  );
};

export default Dashboard;
