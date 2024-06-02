import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>

            {/* outlet of Main */}
            <Outlet></Outlet>

            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default Main;