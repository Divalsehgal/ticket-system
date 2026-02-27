import React from "react";

const Home = async () => {
  return (
    <section className="max-w-2xl mx-auto p-6 bg-[var(--surface)] rounded-card shadow-card mt-10 text-[var(--text)]">
      <h1 className="text-2xl font-bold mb-2">Welcome to the Ticket System</h1>
      <p className="mb-1">Tickets are categorized by their category.</p>
      <p>Click on a ticket to view details and edit it.</p>
    </section>
  );
};

export default Home;
