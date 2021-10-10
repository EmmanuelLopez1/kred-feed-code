import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navbar.css'

import logoKredFeed from '../../images/logo-kred-feed.png'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'


export const Navbar = () => {
    console.log(logoKredFeed);
    return (
        <nav className="navbar navbar-expand-lg navbar-light border-bottom border-primary border-1 p-3">
            <div className="container-fluid">
                <img src={logoKredFeed} alt="" className="navbar-logo" />
                <button className="navbar-toggler navbar-menu" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <img src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png" alt="menu-icon" />
                </button>
                <div className="collapse navbar-collapse my-2" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item my-2 px-2">
                            <a className="nav-link d-flex align-items-center" id="dropdownMenuLink" data-bs-toggle="dropdown">
                                <FontAwesomeIcon icon={faUser} className="nav-icon me-3" />
                                <p className="nav-link-text text-dark">Perfil</p>
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item my-2 px-2">
                            <a className="nav-link d-flex align-items-center">
                                <FontAwesomeIcon icon={faHome} className="nav-icon me-3" />
                                <p className="nav-link-text text-dark">Home</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}