import "../components/home.css";
import Apple from "../Images/apple-card.jpg";
import Pubg from "../Images/pubgi.jpg";
import Tiktok from "../Images/tiktok.jpg";
import Freefire from "../Images/freefire.jpg";
import subs from "../Images/netflix.jpg";
import { Link } from "react-router-dom";
const Itunes = [
  {
    id: 1,
    className: "apple-card",
    image: Apple,
    details: "iTunes",
    path: "/giftcard",
  },
  {
    id: 2,
    className: "pubg-card",
    image: Pubg,
    details: "PUBG",
    path: "/pubg",
  },
  {
    id: 3,
    className: "tiktok-card",
    image: Tiktok,
    details: "Tiktok",
    path: "/tiktok",
  },
  {
    id: 4,
    className: "freefire-card",
    image: Freefire,
    details: "FreeFire",
    path: "/freefire",
  },
  {
    id: 4,
    className: "subscription-card",
    image: subs,
    details: "Subscription",
    path: "/subscription",
  },
];
export function Home() {
  return (
    <>
      <div className="banner"></div>
      <h4>Product Category</h4>
      <div className="card-container">
        {Itunes.map((appy) => (
          <div key={appy.id} className={appy.className}>
            <img src={appy.image} alt="appy" />
            <p>{appy.details}</p>
            <Link to={appy.path} className="view">
              <button>View Product</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
