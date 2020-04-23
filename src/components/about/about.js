import React, {Component} from 'react';
import Featured from "../common/featured/featured";
import {YouWillLoveVRBangla} from "../common/YouWillLoveVRBangla";

class About extends Component {
    render() {
        return (
            <div>
                <div className="about_banner_area titlebar">
                    <div className="container">
                        <div className="banner-content">
                            <h1 className="page-cover-tittle"> About </h1>
                            <p></p>
                            <p>Receive updates, news and deals</p>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className="video_area" id="video">
                    <div className="video-left">
                        <div className="video-inner">
                            <div className="title-four">
                                <h2>Unframed. Unlimited.</h2>
                                <div className="br"></div>
                            </div>
                            <p>It’s time to break all the frames and go unlimited. VR 360 video gives you the freedom of looking around
                                and experience 360 degree. VR Bangla is the gateway to your freedom of viewing experience.</p>
                            <button className="play-btn">Play the video</button>
                        </div>
                    </div>
                    <div className="video-right">
                        <div className="videoWrapper videoWrapper169 js-videoWrapper">
                            <iframe className="videoIframe js-videoIframe"
                                    data-src="https://www.youtube.com/embed/hgzzLIa-93c?autoplay=1&amp; modestbranding=1&amp;rel=0&amp;hl=sv"></iframe>
                            <button className="videoPoster js-videoPoster"></button>
                        </div>
                    </div>
                </div>

                <YouWillLoveVRBangla/>

                <div className="vlog-section vlog-no-sid  ">
                    <div className="container">
                        <div className="vlog-content">
                            <div className="row row-eq-height">
                                <div className="vlog-module module-series col-lg-12 col-md-12 col-sm-12 "
                                     id="vlog-module-0-0"
                                     data-col="12">
                                    <div className="row vlog-cats row-eq-height ">
                                        <Featured/>
                                        <Featured/>
                                        <Featured/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;