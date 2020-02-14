import React, {Component, Fragment} from 'react';
import Slider from "react-slick";
import YouTube from 'react-youtube';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider_1 from "../../assets/img/slider/slider-1.jpg";
import Slider_2 from "../../assets/img/slider/slider-2.jpg";
import Blog_1 from "../../assets/img/featured/blog_1.jpg";
import Blog_2 from "../../assets/img/blog/blog-2.jpg";
import Featured from "../common/featured/featured";
import LatestVideo from "../common/latestVideo/latestVideo";


export default class Home extends Component {

    render() {

        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrows: true,
            fade: true,
            cssEase: 'linear',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                    }
                }
            ]
        };
        return (
            <Fragment>
                <div id="content" className="vlog-site-content">
                    <div
                        className="vlog-featured vlog-featured-1 vlog-featured-slider owl-carousel owl-theme owl-loaded owl-text-select-on">
                        <div className="vrFeaturedSlider_wrap">
                            <div className="vrSlider_content">
                                <div className="vlog-cover-bg">
                                    <Slider className="vrSlider" {...settings}>
                                        <div className="vrSlider_item">
                                            <div className="vlog_featured_item video_item">
                                                <div className="vlog_cover_bg">
                                                    <a className="vlog_cover" href="#" data-action="video">
                                                        <img src={Slider_1} className="attachment_vlog_cover_full"
                                                             alt="img"/>
                                                        <span className="vlog_format_action large">
                                                            <i className="fa fa-play"></i>  </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="vrSlider_item">
                                            <div className="vlog_featured_item video_item">
                                                <div className="vlog_cover_bg">
                                                    <a className="vlog_cover" href="#" data-action="video">
                                                        <img src={Slider_2} className="attachment_vlog_cover_full"
                                                             alt="img"/>
                                                        <span className="vlog_format_action large">
                                                            <i className="fa fa-play"></i>  </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
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
                                        <div className="vlog-mod-head">
                                            <div className="vlog-mod-title">
                                                <h4>Featured Playlists</h4>
                                            </div>
                                        </div>
                                        <div className="row vlog-cats row-eq-height ">
                                            <Featured/>
                                            <Featured/>
                                            <Featured/>
                                            <Featured/>
                                            <Featured/>
                                            <Featured/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="vlog-section vlog-no-sid vlog-bg ">
                        <div className="container">
                            <div className="vlog-content">
                                <div className="row row-eq-height">
                                    <div className="vlog-module module-text col-lg-12 col-md-12 col-sm-12 col-xs-12 "
                                         id="vlog-module-1-0">
                                        <div className="vlog-txt-module">
                                            <div className="text-center">
                                                <h2>You will love Vlog</h2>
                                                <p>Vlog is a carefully crafted WordPress theme with a focus on your
                                                    video content. It
                                                    will suit the needs of any personal video blog, all the way to
                                                    complex magazine
                                                    websites. Whether you need a website for video blogging, video
                                                    tutorials and lessons
                                                    or any sort of viral video sharing, Vlog is the perfect choice.
                                                    YouTube, Vimeo,
                                                    Dailymotion and other common video content never looked better!</p>
                                                <a className="vlog-button" href="#">Read More </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="vlog-section">
                        <div className="container">
                            <div className="vlog-content">
                                <div className="row row-eq-height">
                                    <div className="vlog-module module-posts col-lg-12 col-md-12 col-sm-12 "
                                         id="vlog-module-2-0"
                                         data-col="12">
                                        <div className="vlog-mod-head">
                                            <div className="vlog-mod-title">
                                                <h4>Latest videos</h4>
                                            </div>
                                        </div>

                                        <div className="row vlog-posts row-eq-height ">

                                            <LatestVideo/>
                                            <LatestVideo/>
                                            <LatestVideo/>
                                            <LatestVideo/>

                                        </div>

                                        <nav className="vlog-pagination">
                                            <span className="page-numbers current">1</span>
                                            <a className="page-numbers" href="#">2</a>
                                            <a className="page-numbers" href="#">3</a>
                                            <span className="page-numbers dots">…</span>
                                            <a className="page-numbers" href="#">8</a>
                                            <a className="next page-numbers" href="#">Next</a>
                                        </nav>

                                    </div>
                                </div>
                            </div>

                            <div className="vlog-sidebar vlog-sidebar-right">
                                <div id="categories-2" className="widget widget_categories">
                                    <h4 className="widget-title h5">
                                        <span>Categories</span></h4>
                                    <ul>
                                        <li className="cat-item cat-item-4"><a href="#"><span
                                            className="category-text">Entertainment</span><span
                                            className="vlog-count">7</span></a>
                                        </li>
                                        <li className="cat-item cat-item-5"><a href="#"><span
                                            className="category-text">Fashion</span><span
                                            className="vlog-count">7</span></a>
                                        </li>
                                        <li className="cat-item cat-item-6"><a href="#"><span
                                            className="category-text">Food &amp; Drinks</span><span
                                            className="vlog-count">6</span></a>
                                        </li>
                                        <li className="cat-item cat-item-7"><a href="#"><span
                                            className="category-text">Sports</span><span className="vlog-count">7</span></a>
                                        </li>
                                        <li className="cat-item cat-item-8"><a href="#"><span
                                            className="category-text">Technology</span><span
                                            className="vlog-count">9</span></a>
                                        </li>
                                        <li className="cat-item cat-item-9"><a href="#"><span
                                            className="category-text">Travel</span><span
                                            className="vlog-count">12</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
