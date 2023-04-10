import "../components/tiktok.css";
import Tikuwa from "../Images/tiktok.jpg";
import { Link } from "react-router-dom";

const Tik = [
  { id: 1, className: "tiktok-card-1", image: Tikuwa, details: "test" },
  { id: 2, className: "tiktok-card-2", image: Tikuwa, details: "test" },
  { id: 3, className: "tiktok-card-3", image: Tikuwa, details: "test" },
  { id: 4, className: "tiktok-card-4", image: Tikuwa, details: "test" },
];

export function Tiktok() {
  return (
    <>
      <div className="card-container">
        {Tik.map((TIKI) => (
          <div key={TIKI.id} className={TIKI.className}>
            <img src={TIKI.image} alt="TIKU" />
            <p>{TIKI.details}</p>
            <Link to="/pubg" className="view">
              <button>View Product</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
