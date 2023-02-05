import React, { useEffect, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import STORE from "../store";
import { SiCodefactor } from "react-icons/si";

const Nav = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    let { pathname } = location
    let sp = pathname.split("/")


    const handleMenuOpen = () => {
        setIsOpen(!isOpen);
    }

    const clickHandler = (path) => {
        props.setError("")
        setIsOpen(false)
        navigate(path)
    }


    return (
        <>

            <nav className="menu menu-general navbar navbar-expand-md">
                <div className="container-fluid">

                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <img className="logo" src="https://github.com/tunnels-is/media/raw/master/logo.png"></img>
                    </button> */}

                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        {/* <img className="logo" src="https://github.com/tunnels-is/media/raw/master/logo.png"></img> */}
                        {/* <span className="navbar-toggler-icon"></span> */}
                    </button>


                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            {/* <img className="logo" src="https://github.com/tunnels-is/media/raw/master/logo-b.png"></img> */}

                            <li className="nav-item">
                                <div className={`nav-link ${sp[1] == "dashboard" ? "nav-active" : ""}`}
                                    onClick={() => clickHandler("/dashboard")} >
                                    Tunnels
                                </div>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>

            <nav className="offcanvas-menu menu-general navbar fixed-top">
                <div className="container-fluid">


                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Tunnels</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">




                            </ul>

                        </div>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Nav;