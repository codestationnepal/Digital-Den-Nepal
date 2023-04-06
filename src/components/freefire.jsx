import React from 'react';
import "../components/freefire.css";
import freefire from "../Images/freefire.jpg";

const cardData = [
  { id: 1, className: 'freefire-card-1', imageUrl: freefire },
  { id: 2, className: 'freefire-card-2', imageUrl: freefire },
  { id: 3, className: 'freefire-card-3', imageUrl: freefire },
  { id: 4, className: 'freefire-card-4', imageUrl: freefire },
];

export function Freefire() {
  return (
    <>
      <div className="card-container">
        {cardData.map((card) => (
          <div key={card.id} className={card.className}>
            <img src={card.imageUrl} alt="Card" />
          </div>
        ))}
      </div>
    </>
  );
}

