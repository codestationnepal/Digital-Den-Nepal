import "./header.css";
import logo from "../Images/logo.png";
import cart from "../Images/cart.png";
import wallet from "../Images/wallet.png";
import user from "../Images/user.png";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <>
      <div className="navbar-left">
        <img src={logo} alt="image" className="logo-section" />
        <h5>DIGITAL DEN NEPAL</h5>
        <form className="search-form" action="#" method="get">
          <input type="text" placeholder="Seach for the products" />
          <button type="submit">Go</button>
        </form>
        <a href="#">
          <img src={cart} alt="cart" className="cart-img" />
        </a>
        <a href="#">
          <img src={wallet} alt="wallet" className="wallet-img" />
        </a>
        <a href="#">
          <img src={user} alt="user" className="user-img" />
        </a>
        <a href="#" className="signin">
          Sign in
        </a>
      </div>
      <div className="nav-list-container">
        <ul>
        <li>
            <Link className="hov" to="/home">
              HOME
            </Link>
          </li>
          <li>
            <Link className="hov" to="/pubg">
              PUBG
            </Link>
          </li>
          <li>
            <Link className="hov" to="/freefire">
              FREEFIRE TOPUP
            </Link>
          </li>
          <li>
            <Link className="hov" to="/giftcard">
              GIFT CARD
            </Link>
          </li>
          <li>
            <Link className="hov" to="/subscription">
              SUBSCRIPTION
            </Link>
          </li>
          <li>
            <Link className="hov" to="/tiktok">TIKTOK COINS</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
