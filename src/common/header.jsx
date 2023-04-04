import "./header.css";
import login from "../Images/login.png";
export function Header() {
  return (
    <>
      <div className="head-container">
        <div className="image"></div>
        <h5>Digital Den Nepal</h5>
        <nav className="nav-links">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
        <div className="login-section">
        <img src={login} alt="logo" />
          <ul>
           <li> <a href="#">Login</a></li>
           <li> <a href="#">Register</a></li>
          </ul>
        </div>
      </div>
      <div className="nav-img"></div>
    </>
  );
}
