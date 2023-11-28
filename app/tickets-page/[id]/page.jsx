import TicketForm from "@/app/(components)/ticketForm";
import React from "react";

function page({ params }) {
  return (
    <div>
      {params?.id}
      <TicketForm />
    </div>
  );
}

export default page;
