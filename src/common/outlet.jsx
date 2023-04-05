import { Outlet } from "react-router";
import { Header } from "./header.jsx";
import { Footer } from "./footer/footer.jsx";
export function Template() {
    return (<>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </>);
}