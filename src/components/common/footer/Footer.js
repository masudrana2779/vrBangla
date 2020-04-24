import React, {Component} from 'react'
import FooterLogo from "../../../assets/img/logo.jpeg";
import MostViewFooter from "../mostView/mostViewFooter";

import Blog_1 from "../../../assets/img/featured/blog_1.jpg";
import nabaratnaMondir from "../../../assets/img/featured/nabaratna mondir_01437.jpg";
import Cover from "../../../assets/img/featured/Cover.jpg";
import VR_BANGLA_LOGO from "../../../assets/img/featured/VR_BANGLA_LOGO.jpg";
import DJI_0689_01972 from "../../../assets/img/featured/DJI_0689_01972.jpg";

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
                                    <p>VR Bangla is the first VR 360 content channel from Bangladesh with a vision to
                                        take Bangladeshi culture
                                        to the world with the latest technology of communications and infotainment.
                                        Initially the channel is
                                        starting with few categories of infotainment VR content that represents
                                        Bangladesh. So it will definitely
                                        offer you the opportunity to enjoy the real experience of culture and heritage
                                        of Bangladesh.
                                        Gradually more content categories are coming to expand the horizon of VR
                                        Bangla.</p>

                                    <a href="#" className="vlog-button">Find out more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div id="vlog_posts_widget-8" className="widget vlog_posts_widget">
                                <h4 className="widget-title h5"><span>Most Viewed</span>
                                </h4>
                                <div className="row ">
                                    <MostViewFooter image={DJI_0689_01972}
                                                    title={'নবরত্ন মন্দির : Navaratna Temple VR Tour'}/>
                                    <MostViewFooter image={DJI_0689_01972}
                                                    title={'নবরত্ন মন্দির : Navaratna Temple VR Tour'}/>
                                    <MostViewFooter image={DJI_0689_01972}
                                                    title={'নবরত্ন মন্দির : Navaratna Temple VR Tour'}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div id="vlog_posts_widget-9" className="widget vlog_posts_widget">
                                <h4 className="widget-title h5"><span>Most Discussed</span></h4>
                                <div className="row ">
                                    <ul>
                                        <li><a href="https://web.facebook.com/vrbangla360/" target="_blank"><i className="fa fa-facebook"></i> Facebook</a></li>
                                        <li><a href="https://www.youtube.com/channel/UCmk62XX9WHvXEAwP64RqGdw" target="_blank"><i className="fa fa-youtube"></i> Youtube</a></li>
                                    </ul>
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
