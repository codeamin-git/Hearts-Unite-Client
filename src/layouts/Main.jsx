import { Outlet } from "react-router-dom";
import Nav from '../components/Shared/Navbar/Nav'
import Footer from '../components/Shared/Footer/Footer'

const Main = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Nav></Nav>

            {/* outlet of Main */}
            <div className="min-h-[calc(100vh-68px)]">
            <Outlet></Outlet>
            </div>

            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default Main;