import "../details.component/pubg.details.css";
import uc from "../../Images/pubgcard.jpg";
import { FaShoppingCart } from "react-icons/fa";
export function Pubgdetails() {
  return (
    <>
      <div className="container-details">
        <div className="head-rec">
          <p>PUBG 325 UC PINS (Global)</p>
        </div>
        <div className="pubgcard">
          <img src={uc} alt="uc" />
          <div className="cont">
            <p>Delivery mode: DDN Account Delivery</p>
            <p>Time: Instant Platform: Android,IOS </p>
            <p>Region: Global </p>
            <p>Publisher: Tencent Games</p>
            <p>Developer: Tencent Games</p>
            <p>Genre: Gift Card</p>
            <p className="price">Rs. 670.00</p>
            <button>
              <FaShoppingCart/> Buy
            </button>
          </div>
          <div className="ava">
            <p>Product Available</p>
          </div>
        </div>
      </div>
    </>
  );
}
