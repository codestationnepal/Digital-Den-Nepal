import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Template } from "./outlet";
import { Home } from "../components/home";
import { Pubg } from "../components/pubg";
import { Freefire } from "../components/freefire";
import {Giftcard} from "../components/giftcard";
import {Subscription} from "../components/subscription";
import {Tiktok} from "../components/tiktok";



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
          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}
