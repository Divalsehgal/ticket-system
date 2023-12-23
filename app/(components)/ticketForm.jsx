"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

function TicketForm() {
  const router = useRouter();
  const initialTicketData = {
    title: "",
    description: "",
    category: "System failure",
    priority: 1,
    progress: 0,
    status: "not started",
    active: false,
  };

  const [formData, setFormData] = useState(initialTicketData);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


     const res = await fetch("/api/tickets", {
        method: "POST",
        body: JSON.stringify({ formData }),
     });

    if (!res.ok) {
      throw new Error("Failed to create ticket ");
    }
    
    router.refresh();
    router.push("/");
    console.log("submitted ");
  };
  return (
    <div className="flex flex-center justify-center w-full">
      <form
        action=""
        className="flex flex-col gap-2 w-2/4 p-4 border-cyan-500 border-2 rounded "
        onSubmit={handleSubmit}
      >
        <h3>Create your Ticket</h3>
        <label htmlFor="">Title</label>
        <input
          id="title"
          value={formData.title}
          name="title"
          type="text"
          required={true}
          onChange={handleChange}
        />
        <label htmlFor="">Description</label>
        <input
          id="description"
          value={formData.description}
          name="description"
          onChange={handleChange}
          required={true}
          rows="5"
        />
        <label htmlFor="">Category</label>
        {/* <input
          id="title"
          value={formData.title}
          name="title"
          type="text"
          required={true}
          onChange={handleChange}
        /> */}
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="1">1</option>
          <option value="1">2</option>
          <option value="1">3</option>
          <option value="1">4</option>
        </select>
        <label>Priority</label>
        <div>
          <input
            type="radio"
            id="priority-1"
            name="priority"
            value={1}
            onChange={handleChange}
            checked={formData.priority == 1}
          />
          <label>1</label>
          <input
            type="radio"
            id="priority-2"
            name="priority"
            value={2}
            onChange={handleChange}
            checked={formData.priority == 2}
          />
          <label>2</label>
          <input
            type="radio"
            id="priority-3"
            name="priority"
            value={3}
            onChange={handleChange}
            checked={formData.priority == 3}
          />
          <label>3</label>
          <input
            type="radio"
            id="priority-4"
            name="priority"
            value={4}
            onChange={handleChange}
            checked={formData.priority == 4}
          />
          <label>4</label>
          <input
            type="radio"
            id="priority-5"
            name="priority"
            value={5}
            onChange={handleChange}
            checked={formData.priority == 5}
          />
          <label>5</label>
        </div>
        <label>Progress</label>
        <input
          type="range"
          min={1}
          max={200}
          value={formData.progress}
          onChange={handleChange}
          id="progress"
          name="progress"
        />
        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="not started">Not Started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>
        <input className="btn" type="submit" value="create ticket" />
      </form>
    </div>
  );
}

export default TicketForm;
