
import React from "react"
import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <nav>
            <h3 className="nav--logo_text"><NavLink to="/home">
                <i class="fa-solid fa-waveform-lines nav--icon"></i><span id="logo-text">SpotiFIND</span></NavLink></h3>
            <h5 className="nav--link"><NavLink to="/search">Search</NavLink></h5>
            <h5 className="nav--link"><NavLink to="/discover">Discover</NavLink></h5>
        </nav>
    )
}