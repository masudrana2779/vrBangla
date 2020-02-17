import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Logo from "../../../assets/img/logo.jpeg";

export class Navbar extends Component {


    render() {

        var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("header").style.top = "0";
            } else {
                document.getElementById("header").style.top = "-80px";
            }
            prevScrollpos = currentScrollPos;
        }
        return (
            <header id="header" className="vlog-site-header vlog-header-shadow hidden-xs hidden-sm"  id="header">
                <div className="vlog-header-wrapper">
                    <div className="container">
                        <div className="vlog-header-1 vlog-header-middle">
                            <div className="vlog-slot-l">
                                <div className="vlog-site-branding vlog-logo-only">
                                    <h1 className="site-title h1">
                                        <Link to={"/"}>
                                            <img className="vlog-logo" src={Logo} alt="Vlog"/>
                                        </Link>
                                    </h1>
                                </div>
                            </div>
                            <div className="vlog-slot-c">
                                <nav className="vlog-main-navigation">
                                    <ul id="menu-main" className="vlog-main-nav vlog-menu">
                                        <li className="menu-item current_page_item">
                                            <Link to={"/"}>Home</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link to={"/details"}>Details</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link to={"/about"}>About</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link to={"/contact"}>Contact</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="vlog-slot-r">
                                <div className="vlog-actions-menu">
                                    <ul className="vlog-menu">
                                        <li className="vlog-actions-button vlog-action-search">
                                            <span><i className="fv fv-search"></i></span>
                                        </li>
                                        <li className="vlog-actions-button vlog-watch-later">
                                <span>
                                    <i className="fv fv-watch-later"></i>
                                </span>
                                        </li>
                                        <li className="vlog-actions-button vlog-social-icons">
                                <span>
                                    <i className="fv fv-social"></i>
                                </span>
                                            <ul className="sub-menu">
                                                <li>
                                                    <ul id="menu-social" className="vlog-soc-menu vlog-in-popup">
                                                        <li className="menu-item">
                                                            <a href="https://patreon.com">
                                                                <span className="vlog-social-name">Patreon</span>
                                                            </a>
                                                        </li>
                                                        <li className="menu-item">
                                                            <a href="http://youtube.com">
                                                                <span className="vlog-social-name">YouTube</span>
                                                            </a>
                                                        </li>
                                                        <li className="menu-item">
                                                            <a href="http://twitch.tv">
                                                                <span className="vlog-social-name">Twitch</span>
                                                            </a>
                                                        </li>
                                                        <li className="menu-item">
                                                            <a href="http://vimeo.com">
                                                                <span className="vlog-social-name">Vimeo</span>
                                                            </a>
                                                        </li>
                                                        <li className="menu-item">
                                                            <a href="http://instagram.com/">
                                                                <span className="vlog-social-name">Instagram</span>
                                                            </a>
                                                        </li>
                                                        <li className="menu-item">
                                                            <a href="https://www.facebook.com/">
                                                                <span className="vlog-social-name">Facebook</span>
                                                            </a>
                                                        </li>
                                                        <li className="menu-item">
                                                            <a href="https://twitter.com/">
                                                                <span className="vlog-social-name">Twitter</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Navbar;
