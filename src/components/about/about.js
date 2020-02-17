import React, {Component} from 'react';
import Featured from "../common/featured/featured";

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
                                <h2>Discover The New App</h2>
                                <div className="br"></div>
                            </div>
                            <p>Retarget past customers with second-chance offers and reach new audiences with
                                geo-targeted campaigns during peak dining times using Forks’ push notifications.</p>
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

                <div className="vlog-section vlog-no-sid vlog-bg" style={{marginBottom: "70px"}}>
                    <div className="container">
                        <div className="vlog-content">
                            <div className="row row-eq-height">
                                <div className="vlog-module module-text col-lg-12 col-md-12 col-sm-12 col-xs-12 "
                                     id="vlog-module-1-0">
                                    <div className="vlog-txt-module">
                                        <div className="text-center"><h2>You will love Vlog</h2><p>Vlog is a carefully
                                            crafted WordPress theme with a focus on your video content. It will suit the
                                            needs of any personal video blog, all the way to complex magazine websites.
                                            Whether you need a website for video blogging, video tutorials and lessons
                                            or any sort of viral video sharing, Vlog is the perfect choice. YouTube,
                                            Vimeo, Dailymotion and other common video content never looked better!</p><a
                                            className="vlog-button" href="#">Read More </a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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