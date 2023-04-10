import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../components/Errorpage.css";
import error from "../Images/wire.png";

const ErrorPage = () => {
  const [counter, setCounter] = useState(900);
  const navigate = useNavigate();

  useEffect(() => {
    const countInterval = setTimeout(() => {
      if (counter === 1) {
        navigate("/");
      } else {
        setCounter(counter - 1);
      }
      return clearTimeout(countInterval);
    }, 1000);
  }, [counter, navigate]);
  return (
    <div className="timer-container">
      <h1>404 Page Not Found</h1>
      <div className="stylish">
        <p>Redirecting To Home Page in </p>
        <h2>{counter}sec</h2>
      </div>
      <img src={error} alt="error" />
    </div>
  );
};

export default ErrorPage;
