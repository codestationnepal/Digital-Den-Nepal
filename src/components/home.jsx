import "../components/home.css";
import Apple from "../Images/apple-card.jpg";
export function Home() {
  return (
    <>
      <div className="banner"></div>
      <h4>Product Category</h4>
      <div className="product">
        <div className="card-1">
          <img src={Apple} alt="giftcard" />
          <h5> 100$ Apple Gift Card</h5>
        </div>
        <div className="card-2">
          <img src={Apple} alt="giftcard" />
          <h5> 100$ Apple Gift Card</h5>

        </div>
        <div className="card-3">
          <img src={Apple} alt="giftcard" />
          <h5> 100$ Apple Gift Card</h5>

        </div>
        <div className="card-4">
          <img src={Apple} alt="giftcard" />
          <h5> 100$ Apple Gift Card</h5>

        </div>
      </div>
      
    </>
  );
}
