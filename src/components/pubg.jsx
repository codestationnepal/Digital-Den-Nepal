import React from "react";
import "./pubg.css";
import pubg from "../Images/pubgi.jpg";
const PUBG = [
  { id: 1, className: "pubg-card-1", image: pubg },
  { id: 2, className: "pubg-card-2", image: pubg },
  { id: 3, className: "pubg-card-3", image: pubg },
  { id: 4, className: "pubg-card-4", image: pubg },
];

export function Pubg() {
  return (
    <>
      <div className="card-container">
        {PUBG.map((pubgg) => (
          <div key={pubgg.id} className={pubgg.className}>
            <img src={pubgg.image} alt="Card" />
          </div>
        ))}
      </div>
      <div className="card-container">
        {PUBG.map((pubgg) => (
          <div key={pubgg.id} className={pubgg.className}>
            <img src={pubgg.image} alt="Card" />
          </div>
        ))}
      </div>
    </>
  );
}
