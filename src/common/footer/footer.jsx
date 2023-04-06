import "../footer/footer.css";
import img from "../../Images/logo.png";
import esewa from "../../Images/esewa.png";
import khalti from "../../Images/khalti.png";
import ime from "../../Images/ime.png";
import facebook from "../../Images/facebook.png"
export function Footer() {
  return (
    <>
      <div className="container">
        <div className="left">
          <img className="logo" src={img} alt="logo" />
          <h5>DIGITAL DEN NEPAL</h5>
        </div>

        <div className="middle">
          <h5>Payment Method</h5>
          <img className="image" src={esewa} alt="esewa" />
          <img className="image" src={khalti} alt="khalti" />
          <img className="image" src={ime} alt="ime" />
        </div>

        <div className="right">
          <a href="#"><img className="fb-logo" src={facebook} alt="fb-logo" /></a>
          <p><a href="#">connect with us on Faceook</a></p>
        </div>
      </div>
      <div className="copyright-container">
        <h5>
          Copyright © 2023 Digital Den Nepal . All Right Reserved | Design by
          The Cipher Bit
        </h5>
      </div>
    </>
  );
}
