"use client";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const EditTicketForm = ({ ticket }) => {
  const EDITMODE = ticket._id === "new" ? false : true;
  const router = useRouter();
  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware Problem",
  };

  if (EDITMODE) {
    startingTicketData["title"] = ticket.title;
    startingTicketData["description"] = ticket.description;
    startingTicketData["priority"] = ticket.priority;
    startingTicketData["progress"] = ticket.progress;
    startingTicketData["status"] = ticket.status;
    startingTicketData["category"] = ticket.category;
  }

  const [formData, setFormData] = useState(startingTicketData);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (EDITMODE) {
      const res = await fetch(`/api/tickets/${ticket._id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });
      if (!res.ok) {
        throw new Error("Failed to update ticket");
      }
    } else {
      const res = await fetch("/api/tickets", {
        method: "POST",
        body: JSON.stringify({ formData }),
        //@ts-ignore
        "Content-Type": "application/json",
      });
      if (!res.ok) {
        throw new Error("Failed to create ticket");
      }
    }

    router.refresh();
    router.push("/tickets");
  };

  const categories = [
    "Hardware Problem",
    "Software Problem",
    "Application Deveopment",
    "Project",
  ];

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col gap-4 w-full max-w-xl bg-[var(--surface)] p-8 rounded-card shadow-card border border-[var(--border)]"
      >
        <h3 className="text-xl font-semibold mb-2 text-[var(--primary)]">
          {EDITMODE ? "Update Your Ticket" : "Create New Ticket"}
        </h3>
        <label className="font-medium">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          className="input"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />
        <label className="font-medium">Description</label>
        <textarea
          id="description"
          name="description"
          className="input"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows="5"
        />
        <label className="font-medium">Category</label>
        <select
          name="category"
          className="input"
          value={formData.category}
          onChange={handleChange}
        >
          {categories?.map((category, _index) => (
            <option key={_index} value={category}>
              {category}
            </option>
          ))}
        </select>

        <label className="font-medium">Priority</label>
        <div className="flex gap-3 items-center mb-2">
          {[1, 2, 3, 4, 5].map((n) => (
            <label key={n} className="flex flex-col items-center text-xs">
              <input
                id={`priority-${n}`}
                name="priority"
                type="radio"
                className="accent-orange-500"
                onChange={handleChange}
                value={n}
                checked={formData.priority == n}
              />
              {n}
            </label>
          ))}
        </div>
        <label className="font-medium">Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          className="w-full accent-[var(--primary)]"
          value={formData.progress}
          min="0"
          max="100"
          onChange={handleChange}
        />
        <label className="font-medium">Status</label>
        <select
          name="status"
          className="input"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="not started">Not Started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>
        <button
          type="submit"
          className={clsx("btn  mt-4 font-semibold", "btn-primary")}
        >
          {EDITMODE ? "Update Ticket" : "Create Ticket"}
        </button>

        {/* Example of a text variant button for secondary actions */}

        <button
          type="button"
          className="btn-text text-[var(--primary)] hover:underline hover:text-[var(--accent)] focus:outline-none focus:underline px-2 py-1 font-medium transition-all duration-150"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditTicketForm;
