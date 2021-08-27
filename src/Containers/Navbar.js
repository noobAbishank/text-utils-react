import React from 'react'
import PropTypes from 'prop-types';
// import {
    
//     Link
//   } from "react-router-dom";


export const Navbar = (props) => {
    return (
        <div>
            <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} border border-${props.mode==='light'?'dark':'light'}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src="./android-chrome-512x512.png" alt="" />{props.navBrand}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">{props.home}</a>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.about}</Link>
                            </li> */}

                        </ul>
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                             <input className="form-check-input" type="checkbox" id="mode" onClick= {props.toggler} />
                             <label className="form-check-label" htmlFor="mode">Enable DarkMode</label>
                         </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}


Navbar.propTypes = {
    navBrand: PropTypes.string.isRequired,
    home: PropTypes.string,
    about: PropTypes.string,
}

Navbar.defaultProps = {
    navBrand: "Set Title",
    home: "Set Home",
    about: "Set About"
}
