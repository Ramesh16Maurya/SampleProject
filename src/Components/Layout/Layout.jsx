import Sidebar from "../Sidebar/Sidebar.jsx";
import Header from "../Header/Header.jsx";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="dashboard-main-div">
            <div className="d-flex  ">
                <div className=" ">
                    <Sidebar />
                </div>
                <div className="w-100 p-xxl-4 p-xl-4 p-lg-4 p-md-4 p-sm-2 p-2">
                    <div>
                        <Header />
                    </div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Layout;