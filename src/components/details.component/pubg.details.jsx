import "../details.component/pubg.details.css";
import uc from "../../Images/pubgcard.jpg";
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
            <button>Buy</button>
          </div>
          <div className="ava">
            <p>Product Available</p>
          </div>
        </div>
        <h4>Details</h4>
        <div className="text-container">
          <p>HOW TO REDEEM PUBG MOBILE UC (GLOBAL)?</p>
          <ol>
            <li>Login to your account at Midasbuy. </li>
            <li>
              Please enter your player ID correctly to avoid any delays when you
              top up PUBG Mobile with Uplay Credit.{" "}
            </li>
            <li>Go to "Redeem Code" and enter the code provided.</li>
            <li>
              These codes can then be redeemed as PUBG Mobile Unknown Cash.
            </li>
          </ol>
        </div>
        <div className="text-2">
          <p>Notes:</p>
          <ol>
            <li>
              The product is not designed to run on Japanese, Korean, Taiwan, or
              Vietnam servers.
            </li>
            <li>
              PUBG Mobile UC has a shelf life of five months from the time it's
              purchased. A redemption made after its expiry date or after it has
              been redeemed will no longer be valid.
            </li>
            <li>
              Sale items cannot be returned, exchanged, or refunded in the cases
              listed above.
            </li>
          </ol>
        </div>
        <h4>Similar Product</h4>
      </div>
    </>
  );
}
