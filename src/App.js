import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from './pages/Home'
import Lazyloading from './pages/LazyLoading'
import Suspense from "./pages/Suspense";

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul className="Nav">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/lazy-load-images">Lazy Load Images</Link>
                        </li>
                        <li>
                            <Link to="/suspense">React Suspense</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/lazy-load-images">
                        <Lazyloading />
                    </Route>
                    <Route path="/suspense">
                        <Suspense />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
