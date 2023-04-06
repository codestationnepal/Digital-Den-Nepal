import React from "react";
import "../components/freefire.css";
import freefire from "../Images/freefire.jpg";

const cardData = [
  { id: 1, className: "freefire-card-1", image: freefire },
  { id: 2, className: "freefire-card-2", image: freefire },
  { id: 3, className: "freefire-card-3", image: freefire },
  { id: 4, className: "freefire-card-4", image: freefire },
];

export function Freefire() {
  return (
    <>
      <div className="card-container">
        {cardData.map((card) => (
          <div key={card.id} className={card.className}>
            <img src={card.image} alt="Card" />
          </div>
        ))}
      </div>
      <div className="card-container">
        {cardData.map((card) => (
          <div key={card.id} className={card.className}>
            <img src={card.image} alt="Card" />
          </div>
        ))}
      </div>
    </>
  );
}
