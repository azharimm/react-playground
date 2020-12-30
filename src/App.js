import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Lazyloading from './pages/LazyLoading'
import UseStatePage from './pages/useStatePage'
import UseEffectPage from './pages/useEffectPage'
import UseMemoPage from './pages/useMemoPage'
import UseRefPage from './pages/useRefPage'
import UseContextPage from './pages/useContextPage'
import UseReducerPage from './pages/useReducerPage'
import UseCallbackPage from './pages/useCallbackPage'
import CustomHooksPage from './pages/CustomHooksPage'

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
                    <Route path="/use-memo">
                        <UseMemoPage />
                    </Route>
                    <Route path="/use-ref">
                        <UseRefPage />
                    </Route>
                    <Route path="/use-context">
                        <UseContextPage />
                    </Route>
                    <Route path="/use-reducer">
                        <UseReducerPage />
                    </Route>
                    <Route path="/use-callback">
                        <UseCallbackPage />
                    </Route>
                    <Route path="/custom-hooks">
                        <CustomHooksPage />
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
