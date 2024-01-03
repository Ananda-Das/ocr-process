import { Outlet } from "react-router-dom";
import Navbar from "../../pages/Shared/Navbar";


const Layouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layouts;