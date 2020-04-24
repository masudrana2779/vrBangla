import React, {Component, Fragment} from 'react';
import Slider from "react-slick";
import YouTube from 'react-youtube';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Blog_1 from "../../assets/img/featured/blog_1.jpg";
import nabaratnaMondir from "../../assets/img/featured/nabaratna mondir_01437.jpg";
import Cover from "../../assets/img/featured/Cover.jpg";
import VR_BANGLA_LOGO from "../../assets/img/featured/VR_BANGLA_LOGO.jpg";
import DJI_0689_01972 from "../../assets/img/featured/DJI_0689_01972.jpg";
import Featured from "../common/featured/featured";
import LatestVideo from "../common/latestVideo/latestVideo";
import {YouWillLoveVRBangla} from "../common/YouWillLoveVRBangla";
import SliderItem from "../common/slider/Slider";


export default class Home extends Component {
    constructor(props) {
        super(props);
    }

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
                                         <SliderItem />
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
                                            <Featured imgSrc={nabaratnaMondir}
                                                      title={'নবরত্ন মন্দির : Navaratna Temple VR Tour'}/>
                                            <Featured imgSrc={VR_BANGLA_LOGO}
                                                      title={'সুন্দরবন ১ ।। Sundarban VR Tour'}/>
                                            <Featured imgSrc={Blog_1}
                                                      title={'শুটিং ফ্লোর-১: ‘শিরোনামহীন’ - ’ক্যাফেটারিয়া পেরিয়ে’'}/>
                                            <Featured imgSrc={DJI_0689_01972}
                                                      title={'দুবলহাটি রাজবাড়ী ।। Dubolhati Rajbari VR Tour'}/>
                                            <Featured imgSrc={Cover} title={'সহজপাঠে বসন্তবরণ'}/>
                                            <Featured imgSrc={DJI_0689_01972}
                                                      title={'শুটিং ফ্লোর-১: ‘শিরোনামহীন’ - ’ক্যাফেটারিয়া পেরিয়ে’'}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <YouWillLoveVRBangla/>
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

                                            <LatestVideo imgSrc={nabaratnaMondir}
                                                         title={'নবরত্ন মন্দির : Navaratna Temple VR Tour'}
                                                         type={'GALLERY'}
                                                         description={'ভার্চুয়াল রিয়্যালিটি ৩৬০ ভিডিও আমাদের দেশে নতুন। আর এই নতুন মাধ্যম নিয়েই আমরা আরেকটি নতুন যাত্রা শুরু করলাম, যার নাম VR Bangla.'}/>
                                            <LatestVideo imgSrc={VR_BANGLA_LOGO}
                                                         title={'শুটিং ফ্লোর-১: ‘শিরোনামহীন’ - ’ক্যাফেটারিয়া পেরিয়ে’'}
                                                         type={'GALLERY'}
                                                         description={'ভার্চুয়াল রিয়্যালিটি ৩৬০ ভিডিও আমাদের দেশে নতুন। আর এই নতুন মাধ্যম নিয়েই আমরা আরেকটি নতুন যাত্রা শুরু করলাম, যার নাম VR Bangla.'}/>
                                            <LatestVideo imgSrc={Cover}
                                                         title={'সুন্দরবন ১ ।। Sundarban VR Tour'}
                                                         type={'GALLERY'}
                                                         description={'ভার্চুয়াল রিয়্যালিটি ৩৬০ ভিডিও আমাদের দেশে নতুন। আর এই নতুন মাধ্যম নিয়েই আমরা আরেকটি নতুন যাত্রা শুরু করলাম, যার নাম VR Bangla.'}/>
                                            <LatestVideo
                                                imgSrc={DJI_0689_01972}
                                                title={'নবরত্ন মন্দির : Navaratna Temple VR Tour'}
                                                type={'GALLERY'}
                                                description={'ভার্চুয়াল রিয়্যালিটি ৩৬০ ভিডিও আমাদের দেশে নতুন। আর এই নতুন মাধ্যম নিয়েই আমরা আরেকটি নতুন যাত্রা শুরু করলাম, যার নাম VR Bangla.'}/>


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
