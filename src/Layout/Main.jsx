import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import Updates from "../Pages/Updates/Updates";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Updates></Updates>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;