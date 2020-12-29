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
                    <Link to="/use-state">useState</Link>
                </li>
                <li>
                    <Link to="/use-effect">useEffect</Link>
                </li>
                <li>
                    <Link to="/use-memo">useMemo</Link>
                </li>
                <li>
                    <Link to="/use-ref">useRef</Link>
                </li>
                <li>
                    <Link to="/use-context">useContext</Link>
                </li>
                <li>
                    <Link to="/use-reducer">useReducer</Link>
                </li>
                <li>
                    <Link to="/use-callback">useCallback</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
