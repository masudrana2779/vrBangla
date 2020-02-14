import React, {Component} from 'react'
import FooterLogo from "../../../assets/img/logo.jpeg";
import MostViewFooter from "../mostView/mostViewFooter";

export class Footer extends Component {
    render() {
        return (
            <footer id="footer" className="vlog-site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div id="text-2" className="widget widget_text">
                                <div className="textwidget">
                                    <p
                                    ><img src={FooterLogo} className="f_logo" alt="Vlog WordPress Theme"/>
                                    </p>
                                    <p>Vlog is a carefully crafted WordPress theme with a focus on your video content.
                                        It will suit
                                        the needs of any personal video blog, all the way to complex magazine websites.
                                        Whether you
                                        need a website for video blogging, video tutorials and lessons or any sort of
                                        viral video
                                        sharing, Vlog is the perfect choice. YouTube, Vimeo, Dailymotion and other
                                        common video
                                        content never looked better!</p>

                                    <a href="#" className="vlog-button">Find out more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div id="vlog_posts_widget-8" className="widget vlog_posts_widget">
                                <h4 className="widget-title h5"><span>Most Viewed</span>
                                </h4>
                                <div className="row ">
                                    <MostViewFooter />
                                    <MostViewFooter />
                                    <MostViewFooter />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div id="vlog_posts_widget-9" className="widget vlog_posts_widget">
                                <h4 className="widget-title h5"><span>Most Discussed</span></h4>
                                <div className="row ">
                                    <MostViewFooter />
                                    <MostViewFooter />
                                    <MostViewFooter />
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
                <div className="vlog-copyright">
                    <div className="container">
                        <p className="text-center">Copyright © 2020. Created by <a href="#"
                                                                                      target="_blank">GO Bangla</a>.</p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
