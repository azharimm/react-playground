import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Lazyloading from './pages/LazyLoading'
import UseStatePage from './pages/useStatePage'
import UseEffectPage from './pages/useEffectPage'

import "./App.css";

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/lazy-load-images">
                        <Lazyloading />
                    </Route>
                    <Route path="/use-state">
                        <UseStatePage />
                    </Route>
                    <Route path="/use-effect">
                        <UseEffectPage />
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
