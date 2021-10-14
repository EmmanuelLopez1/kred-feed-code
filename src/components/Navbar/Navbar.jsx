import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navbar.css'

import logoKredFeed from '../../images/logo-kred-feed.png'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faUserCheck } from '@fortawesome/free-solid-svg-icons'


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light border-bottom border-primary border-1 p-3 bg-light">
            <div className="container-fluid">
                <img src={logoKredFeed} alt="" className="navbar-logo d-block" />

                <button className="navbar-toggler navbar-menu" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <img src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png" alt="menu-icon" />
                </button>

                <div className="collapse navbar-collapse my-2 w-25 justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item my-2 px-2">
                            <Link to="/kred-feed" className="nav-link d-flex align-items-center">
                                <FontAwesomeIcon icon={faHome} className="nav-icon me-3" />
                                <p className="nav-link-text text-dark">Home</p>
                            </Link>
                        </li>

                        <li className="nav-item my-2 px-2">
                            <div className="nav-link d-flex align-items-center" id="dropdownMenuLink" data-bs-toggle="dropdown">
                                <FontAwesomeIcon icon={faUser} className="nav-icon me-3" />
                                <p className="nav-link-text text-dark">Perfil</p>
                            </div>
                            
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li className="d-flex align-items-center">
                                    <div className="dropdown-item text-secondary">
                                        <FontAwesomeIcon icon={faUserCheck} className="nav-icon me-3 text-secondary" />
                                        <Link to="/kred-feed/perfil/representante-legal" className="dropdown-link my-2 text-secondary">Representante Legal</Link>
                                    </div>
                                </li>

                                <li className="d-flex align-items-center mt-3">
                                    <div className="dropdown-item text-secondary">
                                        <FontAwesomeIcon icon={faBuilding} className="nav-icon me-3 text-secondary" />
                                        <Link to="/kred-feed/perfil/informacion-fiscal" className="dropdown-link my-2 text-secondary">Informacion Fiscal</Link>
                                    </div>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}