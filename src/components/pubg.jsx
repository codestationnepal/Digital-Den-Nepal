import React from "react";
import "./pubg.css";
import pubg from "../Images/pubgi.jpg";
import { Link } from "react-router-dom";

const PUBG = [
  {
    id: 1,
    className: "pubg-card-1",
    image: pubg,
    details: "60 UC",
    path: "/pubgdetails",
  },
  {
    id: 2,
    className: "pubg-card-2",
    image: pubg,
    details: "180 UC",
    path: "/pubgdetails",
  },
  {
    id: 3,
    className: "pubg-card-3",
    image: pubg,
    details: "325 UC",
    path: "/pubgdetails",
  },
  {
    id: 4,
    className: "pubg-card-4",
    image: pubg,
    details: "385 UC",
    path: "/pubgdetails",
  },
];

export function Pubg() {
  return (
    <>
      <div className="card-container">
        {PUBG.map((pubgg) => (
          <div key={pubgg.id} className={pubgg.className}>
            <img src={pubgg.image} alt="Card" />
            <p>{pubgg.details}</p>
            <Link to={pubgg.path} className="view">
              <button>View Product</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
