import React from "react";
import PropTypes from "prop-types";

const Navbar = (props) => {
  return <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navegador">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"> FILMIC ZONE</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="justify-content-end" id="navbarNavDropdown">
        <ul className="navbar-nav nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Releases</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Reviews</a>
          </li>
            <div class="btn-group dropstart">
              <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
               Filter
              </button>
              <ul class="dropdown-menu">
                <li><a className="dropdown-item" href="#">Films A-Z</a></li>
                <li><a className="dropdown-item" href="#">Country</a></li>
                <li><a className="dropdown-item" href="#">Year</a></li>
              </ul>
            </div>
        </ul>
      </div>
    </div>
  </nav>
};

// Navbar.PropTypes = {
//     title: PropTypes.string,
//     firstText: PropTypes.string,
//     secondText: PropTypes.string,
//     thirdText: PropTypes.string,
//     fourthText: PropTypes.string
// }


export default Navbar;

//LLamado de navbar
//<Navbar title = 'Start Bootstrap' firstText='Home' secondtText='About' thirdText='Services' fourthText='Conctat'/>;