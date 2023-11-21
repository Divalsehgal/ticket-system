import TicketForm from "@/app/(components)/ticketForm";
import React from "react";

function page({ params }) {
  return (
    <div>
      Individual ticket {params?.id}
      <TicketForm />
    </div>
  );
}

export default page;
