import "./header.css";
import logo from "../Images/logo.png";
import cart from "../Images/cart.png";
import wallet from "../Images/wallet.png";
import user from "../Images/user.png";

export function Header() {
  return (
    <>
      <div className="navbar-left">
        <img src={logo} alt="image" className="logo-section" />
        <a href="#" className="logo-text">DIGITAL DEN NEPAL</a>
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
        <a href="#">Sign in</a>
      </div>
      <div className="nav-list-container">
        <ul>
          <a href="#"><li>PUBG</li></a>
          <a href="#"><li>FREEFIRE TOPUP</li></a>
          <a href="#"><li>GIFT CARD</li></a>
          <a href="#"><li>SUBSCRIPTION</li></a>
          <a href="#"><li>TIKTOK COINS</li></a>

        </ul>
      </div>
    </>
  );
}
