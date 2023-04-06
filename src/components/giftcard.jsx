import apple from "../Images/apple-card.jpg";
import "../components/giftcard.css";
const Apple = [
  { id: 1, className: "apple-card-1", image: apple },
  { id: 2, className: "apple-card-2", image: apple },
  { id: 3, className: "apple-card-3", image: apple },
  { id: 4, className: "apple-card-4", image: apple },
];
export function Giftcard() {
  return (
    <>
      <div className="card-container">
        {Apple.map((appy) => (
          <div key={appy.id} className={appy.className}>
            <img src={appy.image} alt="appy" />
          </div>
        ))}
      </div>
      <div className="card-container">
        {Apple.map((appy) => (
          <div key={appy.id} className={appy.className}>
            <img src={appy.image} alt="appy" />
          </div>
        ))}
      </div>
    </>
  );
}
