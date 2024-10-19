

import "./Header.css";


function Header() {
    return (
        <>
            <div className="header-main-div">
                <div className="d-flex  justify-content-between  border-bottom sticky-top">
                    <div>
                        <ul className="list-unstyled d-flex  gap-lg-5 gap-md-5 gap-sm-4 gap-2 header-list">
                            <li>Dashboard</li>
                            <li>Users</li>
                            <li>Settings</li>
                        </ul>
                    </div>
                    <div className="d-flex gap-lg-5 gap-md-5 gap-sm-4 gap-3">
                        <div>
                            <i className="bi bi-bell"></i>
                        </div>
                        <div>
                            <i className="bi bi-envelope-open"></i>
                        </div>
                        <div>
                            <i className="bi bi-list-ul"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;