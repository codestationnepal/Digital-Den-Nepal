import React from "react";
import "../wallet-cart/cart.css";
export function Cart() {
  return (
    <div className="container-cart">
      <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      <lottie-player
        src="https://assets3.lottiefiles.com/private_files/lf30_y9czxcb9.json"
        background="transparent"
        speed="3"
        style={{width: "40vw", height: "30vh;"}}
        loop
        autoplay
      ></lottie-player>
    </div>
  );
}
