import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="modern-navbar">
            <NavLink to="/home" className="brand-logo">
                <img alt="Ration System Logo" className="logo" src="/ration-logo.png" />
                <span>AAHAR SETU</span>
            </NavLink>
            
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                <span className="material-icons-round">{menuOpen ? 'close' : 'menu'}</span>
            </button>

            <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <li>
                    <NavLink to="/home" className="nav-link" activeClassName="active" onClick={() => setMenuOpen(false)}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="nav-link" activeClassName="active" onClick={() => setMenuOpen(false)}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="nav-link" activeClassName="active" onClick={() => setMenuOpen(false)}>
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login" className="nav-link" activeClassName="active" onClick={() => setMenuOpen(false)}>
                        Login
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;