import React from "react";
import PropTypes from "prop-types";

const Navbar = (props) => {

    return (<nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">{props.firstText}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">{props.secondText}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">{props.thirdText}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">{props.fourthText}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>)
};

Navbar.PropTypes = {
    title: PropTypes.string,
    firstText: PropTypes.string,
    secondText: PropTypes.string,
    thirdText: PropTypes.string,
    fourthText: PropTypes.string
}


export default Navbar;

//LLamado de navbar
//<Navbar title = 'Start Bootstrap' firstText='Home' secondtText='About' thirdText='Services' fourthText='Conctat'/>;