import React from "react";
import "../components/freefire.css";
import freefire from "../Images/freefire.jpg";
import { Link } from "react-router-dom";

const cardData = [
  {
    id: 1,
    className: "freefire-card-1",
    image: freefire,
    details: "test",
    path: "/pubgdetails",
  },
  {
    id: 2,
    className: "freefire-card-2",
    image: freefire,
    details: "test",
    path: "/pubgdetails",
  },
  {
    id: 3,
    className: "freefire-card-3",
    image: freefire,
    details: "aaaa",
    path: "/pubgdetails",
  },
  {
    id: 4,
    className: "freefire-card-4",
    image: freefire,
    details: "test",
    path: "/pubgdetails",
  },
];

export function Freefire() {
  return (
    <>
      <div className="card-container">
        {cardData.map((card) => (
          <div key={card.id} className={card.className}>
            <img src={card.image} alt="Card" />
            <p>{card.details}</p>
            <Link to={card.path} className="card">
              <button>View Product</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
