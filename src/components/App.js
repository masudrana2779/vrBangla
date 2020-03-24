import React, {Component, Fragment} from "react";
import {Route, Switch} from "react-router-dom";
// import "../assets/css/live.css";
// import "../assets/css/main.css";

import "../assets/sass/main.scss";

import {about, contact, details, home} from "../utils/routes";
import Home from "./home/Home";

import MainMenu from "./common/header/mainMenu";
import Footer from "./common/footer/Footer";
import Details from "./Details/details";
import Contact from "./contact/contact";
import About from "./about/about";

class App extends Component {
    render() {
        return (
            <Fragment>
                <MainMenu/>
                <Switch>
                    <Route path={home} component={Home} exact></Route>
                    <Route path={details} component={Details} exact></Route>
                    <Route path={contact} component={Contact} exact></Route>
                    <Route path={about} component={About} exact></Route>
                </Switch>
                <Footer/>
            </Fragment>
        );
    }
}

export default App;
