import * as LottiePlayer from "@lottiefiles/lottie-player";
import "./wallet.css"
export function Wallet() {
  return (
    <div className="animation-container">
      <lottie-player
        autoplay
        loop
        mode="normal"
        src="https://assets10.lottiefiles.com/packages/lf20_0qvqjlcc.json"
        style={{ width: "60%", backgroundColor : "white" }}
      ></lottie-player>
    </div>
  );
}
