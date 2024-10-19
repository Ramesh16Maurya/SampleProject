import "./Customers.css";

function Customers() {
    return (
        <>
            <div className="customers-main-div">
                <div className="customres-inner-div">
                    <div className="row p-0 m-0 w-100">
                        <div className="col-4">
                            <button>
                                <i class="bi bi-arrow-left"></i>
                            </button>
                        </div>
                        <div className=" col-8">
                            <div className="d-flex gap-3">
                                <div>
                                    <input type="text" placeholder="Search" />
                                </div>
                                <div>
                                    <div>
                                        <button>
                                            <i class="bi bi-arrow-clockwise"></i>
                                            <span>Refresh</span>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <button>
                                        ADD NEW CLIENT
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Customers;