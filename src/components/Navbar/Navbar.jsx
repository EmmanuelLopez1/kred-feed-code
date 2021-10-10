import React from 'react'
import './Navbar.css'
import logoKredFeed from '../../images/logo-kred-feed.png'


export const Navbar = () => {
    console.log(logoKredFeed);
    return (
        <nav className="navbar navbar-expand-lg navbar-light border-bottom border-primary border-1 p-3">
            <div className="container-fluid">
                <img src={logoKredFeed} alt="" className="navbar-logo"/>
                <button className="navbar-toggler navbar-menu" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <img src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png" alt="menu-icon"/>
                </button>
                <div className="collapse navbar-collapse my-2" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item my-2 px-2">
                            <a className="nav-link active " aria-current="page">Home</a>
                        </li>
                        <li className="nav-item my-2 px-2 ">
                            <a className="nav-link">Features</a>
                        </li>
                        <li className="nav-item my-2 px-2 ">
                            <a className="nav-link">Pricing</a>
                        </li>
                        <li className="nav-item my-2 px-2 ">
                            <a className="nav-link disabled" tabIndex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}