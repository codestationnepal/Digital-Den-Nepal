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
  }
];
export function Pubg() {
  return (
    <>
      <div className="card-container">
        {PUBG.map((pubg) => (
          <div key={pubg.id} className={pubg.className}>
            <img src={pubg.image} alt="Card" />
            <p>{pubg.details}</p>
            <Link to={pubg.path} className="view">
              <button>View Product</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
