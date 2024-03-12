import React from "react"

import './Navbar.css'

const Navbar = () => {
    return (
        <div className="nav-container">
        <div className="left-nav-section">
            <div className="nav-name">Bk</div>
        </div>
        <div className="right-nav-section">
            <div className="sub-right-nav-section">
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Features</li>
            </ul>
            </div>
            <button>Contact</button>
        </div>
        </div>
    )

    
}

export default Navbar