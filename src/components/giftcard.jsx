import apple from "../Images/apple-card.jpg";
import "../components/giftcard.css";
import { Link } from "react-router-dom";

const Apple = [
  { id: 1, className: "apple-card-1", image: apple, details: "test" },
  { id: 2, className: "apple-card-2", image: apple, details: "test" },
  { id: 3, className: "apple-card-3", image: apple, details: "test" },
  { id: 4, className: "apple-card-4", image: apple, details: "test" },
];
export function Giftcard() {
  return (
    <>
      <div className="card-container">
        {Apple.map((appy) => (
          <div key={appy.id} className={appy.className}>
            <img src={appy.image} alt="appy" />
            <p>{appy.details}</p>
            <Link to="/pubg" className="view">
              <button>View Product</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
