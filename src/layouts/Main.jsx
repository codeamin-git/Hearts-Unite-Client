import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
    return (
        <div>
            

            {/* outlet of Main */}
            <Outlet></Outlet>

            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default Main;