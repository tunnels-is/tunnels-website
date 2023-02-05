import React, { useEffect, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import STORE from "../store";
import { SiCodefactor } from "react-icons/si";

const Footer = (props) => {

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
            <div className="container footer">
                <footer className="py-5">
                    <div className="row">
                        <div className="col-2">
                            <h5>Section</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                            </ul>
                        </div>

                        <div className="col-2">

                        </div>

                        <div className="col-2">

                        </div>

                        <div className="col-4 offset-1">

                        </div>
                    </div>

                    <div className="d-flex justify-content-between py-4 my-4 border-top">
                        <p>© 2023 Tunnels EHF. All rights reserved.</p>
                        <ul className="list-unstyled d-flex">
                            <li className="ms-3"><a className="link" href="https://twitter.com/nicelandvpn">twitter</a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer;