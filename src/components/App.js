import React, {Component, Fragment} from "react";
import {Route, Switch} from "react-router-dom";
import "../assets/css/live.css";
import "../assets/css/main.css";

import {details, home} from "../utils/routes";
import Home from "./home/Home";

import Navbar from "./common/header/Navbar";
import Footer from "./common/footer/Footer";
import Details from "./Details/details";

class App extends Component {
    render() {
        return (
            <Fragment>
                <Navbar/>
                <Switch>
                    <Route path={home} component={Home} exact></Route>
                    <Route path={details} component={Details} exact></Route>
                </Switch>
                <Footer/>
            </Fragment>
        );
    }
}

export default App;
