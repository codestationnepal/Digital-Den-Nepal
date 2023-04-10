import netflix from "../Images/netflix.jpg";
import prime from "../Images/primevideo.jpg";
import "./subscription.css";
import "../components/giftcard.css";
import { Link } from "react-router-dom";

const Sub = [
  { id: 1, className: "sub-card-1", image: netflix ,details:"test" },
  { id: 2, className: "sub-card-2", image: netflix ,details:"test" },
  { id: 3, className: "sub-card-3", image: prime ,details:"test" },
  { id: 4, className: "sub-card-4", image: prime ,details:"test" },
];
export function Subscription() {
  return (
    <>
      <div className="card-container">
        {Sub.map((hero) => (
          <div key={hero.id} className={hero.className}>
            <img src={hero.image} alt="appy" />
            <p>{hero.details}</p>
            <Link to="/pubg"className="view">
              <button>View Product</button>
            </Link>
          </div>
        ))}
      </div>
      
    </>
  );
}
