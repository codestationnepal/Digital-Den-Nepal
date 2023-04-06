import "../components/tiktok.css";
import Tikuwa from "../Images/tiktok.jpg";
const Tik = [
  { id: 1, className: "tiktok-card-1", image: Tikuwa },
  { id: 2, className: "tiktok-card-2", image: Tikuwa },
  { id: 3, className: "tiktok-card-3", image: Tikuwa },
  { id: 4, className: "tiktok-card-4", image: Tikuwa },
];

export function Tiktok() {
  return (
    <>
      <div className="card-container">
        {Tik.map((TIKI) => (
          <div key={TIKI.id} className={TIKI.className}>
            <img src={TIKI.image} alt="TIKU" />
          </div>
        ))}
      </div>
      <div className="card-container">
        {Tik.map((TIKI) => (
          <div key={TIKI.id} className={TIKI.className}>
            <img src={TIKI.image} alt="TIKU" />
          </div>
        ))}
      </div>
    </>
  );
}
