import "../details.component/pubg.details.css";
import {PUBG } from "../pubg"
import { useParams } from "react-router-dom";
export function Pubgdetails() {
 const {productId} = useParams();
 const singleProduct = PUBG.find(product=>product.id === Number(productId));
  return (
    <>
      <div className="container-details">
        <div className="head-rec">
          <p>{singleProduct.title}</p>
        </div>
        <div className="pubgcard">
          <img src={singleProduct.image} alt="uc" />
          <div className="cont">
            <p>Delivery mode: DDN Account Delivery</p>
            <p>Time: Instant Platform: Android,IOS </p>
            <p>Region: Global </p>
            <p>Publisher: Tencent Games</p>
            <p>Developer: Tencent Games</p>
            <p>Genre: Gift Card</p>
            <p className="price">{singleProduct.price}</p>
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
              top up PUBG Mobile with Uplay Credit.
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
      </div>
    </>
  );
}
