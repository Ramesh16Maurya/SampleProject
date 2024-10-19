import "./Dashboard.css"
import Sidebar from "../Sidebar/Sidebar.jsx";
import Header from "../Header/Header.jsx";

function Dashboard() {
    return (
        <div className="dashboard-inner-div">
            <div className="border-bottom">
                <ul className="d-flex gap-3 list-unstyled pt-4">
                    <li className=" ">Home</li>&#47;
                    <li>Dashboard</li>
                </ul>
            </div>
            <div className="row p-0 m-0 w-100 my-5">
                <div className="col-lg-4 col-md-6 col-sm-12 pt-4  px-2">
                    <div className="d-flex justify-content-between  py-3 px-2 Dashboard-card1">
                        <div> <p>26K (-12.4% )</p></div>
                        <div>
                            <i class="bi bi-three-dots-vertical"></i>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 pt-4  px-2">
                    <div className="d-flex justify-content-between py-3 px-2 Dashboard-card2">
                        <div> <p>26K (-12.4% )</p></div>
                        <div>
                            <i class="bi bi-three-dots-vertical"></i>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 pt-4  px-2">
                    <div className="d-flex justify-content-between py-3 px-2 Dashboard-card3">
                        <div> <p>26K (-12.4% )</p></div>
                        <div>
                            <i class="bi bi-three-dots-vertical"></i>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row p-0 m-0 w-100 my-5">
                <div className="col-lg-4 col-md-6 col-sm-12 pt-4  px-2">
                    <div className="d-flex justify-content-between  py-3 px-2 Dashboard-card1">
                        <div> <p>26K (-12.4% )</p></div>
                        <div>
                            <i class="bi bi-three-dots-vertical"></i>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 pt-4  px-2">
                    <div className="d-flex justify-content-between py-3 px-2 Dashboard-card2">
                        <div> <p>26K (-12.4% )</p></div>
                        <div>
                            <i class="bi bi-three-dots-vertical"></i>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 pt-4  px-2">
                    <div className="d-flex justify-content-between py-3 px-2 Dashboard-card3">
                        <div> <p>26K (-12.4% )</p></div>
                        <div>
                            <i class="bi bi-three-dots-vertical"></i>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Dashboard;