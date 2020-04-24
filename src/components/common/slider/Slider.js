import React from 'react';
import slider1 from "../../../assets/img/slider/slider-1.jpg";
import slider2 from "../../../assets/img/slider/slider-2.jpg";
import slider3 from "../../../assets/img/slider/slider-3.jpg";

const SliderItem = () => {
    return (
        <>
            <div className="vrSlider_item">
                <div className="vlog_featured_item video_item">
                    <div className="vlog_cover_bg">
                        <a className="vlog_cover" href="#" data-action="video">
                            <img src={slider1} className="attachment_vlog_cover_full"
                                 alt="img"/>
                            {/*<span className="vlog_format_action large"><i className="fa fa-play"></i></span>*/}
                        </a>
                    </div>
                </div>
            </div>
            <div className="vrSlider_item">
                <div className="vlog_featured_item video_item">
                    <div className="vlog_cover_bg">
                        <a className="vlog_cover" href="#" data-action="video">
                            <img src={slider2} className="attachment_vlog_cover_full"
                                 alt="img"/>
                            {/*<span className="vlog_format_action large"><i className="fa fa-play"></i></span>*/}
                        </a>
                    </div>
                </div>
            </div>
            <div className="vrSlider_item">
                <div className="vlog_featured_item video_item">
                    <div className="vlog_cover_bg">
                        <a className="vlog_cover" href="#" data-action="video">
                            <img src={slider3} className="attachment_vlog_cover_full"
                                 alt="img"/>
                            {/*<span className="vlog_format_action large"><i className="fa fa-play"></i></span>*/}
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SliderItem;