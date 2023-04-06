import netflix from "../Images/netflix.jpg";
import prime from "../Images/primevideo.jpg";
import "./subscription.css";
import "../components/giftcard.css";
const Sub = [
  { id: 1, className: "sub-card-1", image: netflix },
  { id: 2, className: "sub-card-2", image: netflix },
  { id: 3, className: "sub-card-3", image: prime },
  { id: 4, className: "sub-card-4", image: prime },
];
export function Subscription() {
  return (
    <>
      <div className="card-container">
        {Sub.map((hero) => (
          <div key={hero.id} className={hero.className}>
            <img src={hero.image} alt="appy" />
          </div>
        ))}
      </div>
      <div className="card-container">
        {Sub.map((hero) => (
          <div key={hero.id} className={hero.className}>
            <img src={hero.image} alt="appy" />
          </div>
        ))}
      </div>
    </>
  );
}
