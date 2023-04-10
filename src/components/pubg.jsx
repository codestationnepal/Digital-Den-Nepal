import "./pubg.css";
import pubg from "../Images/pubgi.jpg";
import { Link } from "react-router-dom";

export const PUBG = [
  {
    id: 1,
    title:"PUBG 60 UC PINS (Global)",
    genre:"",
    className: "pubg-card-1",
    image: pubg,
    amount: "60 UC",
    price: "Rs 125"
  },
  {
    id: 2,
    title:"PUBG 180 UC PINS (Global)",
    genre:"",
    className: "pubg-card-2",
    image: pubg,
    amount: "180 UC",
    price: "Rs 370"
  },
  {
    id: 3,
    title:"PUBG 325 UC PINS (Global)",
    genre:"",
    className: "pubg-card-3",
    image: pubg,
    amount: "325 UC",
    price: "Rs 630"
  },
  {
    id: 4,
    title:"PUBG 385 UC PINS (Global)",
    genre:"",
    className: "pubg-card-4",
    image: pubg,
    amount: "385 UC",
    price: "Rs 750"
  },
];
export function Pubg() {
  return (
    <>
      <div className="card-container">
        {PUBG.map((pubg) => (
          <div key={pubg.id} className={pubg.className}>
            <img src={pubg.image} alt="Card" />
            <p>{pubg.amount}</p>
            <Link to={`/pubg/${pubg.id}`} className="view">
              <button>View Product</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
