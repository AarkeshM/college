import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Event.css";

const EventPage = () => {
  const navigate = useNavigate();

  const events = [
    { id: 1, name: "Hackathon", description: "Code and compete!", link: "/hackathon" },
    { id: 2, name: "AI Challenge", description: "Show your AI skills!", link: "/ai-challenge" },
    { id: 3, name: "Web Development", description: "Create stunning websites!", link: "/web-dev" },
  ];

  return (
    <div className="event-page-container">
      <h1 className="event-title">Upcoming Events</h1>

      <div className="event-box-container">
        {events.map((event) => (
          <div key={event.id} className="event-box animate-box">
            <h2>{event.name}</h2>
            <p>{event.description}</p>
            <button className="event-btn" onClick={() => navigate(event.link)}>Register</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPage;
