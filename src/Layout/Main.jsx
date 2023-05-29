import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import NavBer from "../pages/Shared/Navber";


const Main = () => {
    return (
        <div>
            <NavBer></NavBer>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;