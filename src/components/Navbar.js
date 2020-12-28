import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <nav>
            <ul className="Nav">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/lazy-load-images">Lazy Load Images</Link>
                </li>
                <li>
                    <Link to="/use-state">Use State</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
