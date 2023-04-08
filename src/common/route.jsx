import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Template } from "./outlet";
import { Home } from "../components/home";
import { Pubg } from "../components/pubg";
import { Freefire } from "../components/freefire";
import {Giftcard} from "../components/giftcard";
import {Subscription} from "../components/subscription";
import {Tiktok} from "../components/tiktok";
import { Login } from "../components/signin/login";
import {Signup} from "../components/signin/signup";
import { Cart } from "../components/wallet-cart/cart";
import { Wallet } from "../components/wallet-cart/wallet";

export function Rout() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Template></Template>}>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/pubg" element={<Pubg></Pubg>}></Route>
            <Route path="/freefire" element={<Freefire></Freefire>}></Route>
            <Route path="/giftcard" element={<Giftcard></Giftcard>}></Route>
            <Route path="/subscription" element={<Subscription></Subscription>}></Route>
            <Route path="/tiktok" element={<Tiktok></Tiktok>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/signup" element={<Signup></Signup>}></Route>
            <Route path="/wallet" element={<Wallet></Wallet>}></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
