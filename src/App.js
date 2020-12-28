import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Lazyloading from './pages/LazyLoading'
import Suspense from "./pages/Suspense";

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
