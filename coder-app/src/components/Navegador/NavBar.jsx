import React from "react";
import "../Navegador/NavBar.css"
import logo from "../../images/logo.png"
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
            <div className="container-fluid">
                    <Link className="navbar-brand" href="#">
                        <span className="logo"><img src={logo} className="nav-logo img-fluid" alt="logo"/>GEMINI</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto ">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/categoria/invierno">Invierno</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/categoria/verano">Verano</Link>
                        </li>
                    </ul>
                    <ul className="nav justify-content-center">
                        <Link to="/cart"><CartWidget /></Link>
                    </ul>
                </div>
            </div>
        </nav>

    )
};

export default NavBar;