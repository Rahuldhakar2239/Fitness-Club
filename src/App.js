import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import PageNotFound from "./Components/404page";
import Offers from "./Components/Offers/Offer";

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact={true} path="/"> <Navbar/> <Home/>  </Route>
                    <Route path="/about"> <Navbar/> <About/> </Route>
                    <Route path="/offers">  <Navbar/> <Offers/> </Route>
                    <Route path="/contact">  <Navbar/>  <Contact/> </Route>
                    <Route path="/*"> <PageNotFound/> </Route>
                </Switch>
            </Router>
        </>
    )
}

export default App;