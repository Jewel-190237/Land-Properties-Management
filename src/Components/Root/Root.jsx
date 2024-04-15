import { Outlet } from "react-router-dom";
import Navbar from "../../Shared-Files/Header";
import Footer from "../../Shared-Files/Footer";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;