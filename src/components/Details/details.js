import React, {Component} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Author from "../../assets/img/author.jpg";
import Blog_3 from "../../assets/img/blog/blog-3.jpg";
import Blog_4 from "../../assets/img/blog/blog-4.jpg";
import Slider from "react-slick";
import Slider_1 from "../../assets/img/slider/slider-1.jpg";
import Slider_2 from "../../assets/img/slider/slider-2.jpg";
import Slider_3 from "../../assets/img/slider/slider-3.jpg";

class Details extends Component {
    render() {


        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
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

            <div id="content" className="vlog-site-content">
                <article className="post-448 post type-post status-publish format-video has-post-thumbnail hentry category-travel tag-magazine tag-video tag-vlog post_format-post-format-video series-the-magical-world-of-animals">
                    <div className="vlog-featured vlog-featured-1 vlog-featured-slider owl-carousel owl-theme owl-loaded owl-text-select-on">
                        <div className="vrFeaturedSlider_wrap">
                            <div className="vrSlider_content">
                                <div className="vlog-cover-bg">
                                    <Slider className="vrSlider" {...settings}>
                                        <div className="vrSlider_item">
                                            <div className="vlog_featured_item video_item">
                                                <div className="vlog_cover_bg">
                                                    <a className="vlog_cover" href="#" data-action="video">
                                                        <img src={Slider_3} className="attachment_vlog_cover_full"
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

                    <div className="vlog-section ">
                        <div className="container">
                            <div className="vlog-content vlog-single-content">
                                <div className="entry-content-single">
                                    <div className="vlog-share-single">
                                        <div className="meks_ess rectangle solid">
                                            <a href="#" className="meks_ess-item socicon-facebook"><span>Facebook</span></a>
                                            <a href="#"
                                               className="meks_ess-item socicon-twitter"><span>Twitter</span></a>
                                            <a href="#" className="meks_ess-item socicon-reddit"><span>Reddit</span></a>
                                            <a href="#"
                                               className="meks_ess-item socicon-pinterest"><span>Pinterest</span></a>
                                            <a href="#" className="socicon-mail prevent-share-popup "><span>Email</span></a>
                                        </div>
                                    </div>

                                    <div className="entry-headline h4">Distinctively redefine reliable human capital via
                                        prospective
                                        metrics. Assertively synergize real-time partnerships for tactical partnerships.
                                        Distinctively foster user-centric web services and an expanded array.
                                    </div>

                                    <p>Assertively re-engineer goal-oriented technology for interdependent platforms.
                                        Collaboratively strategize team building core competencies whereas 24/7 schemas.
                                        Conveniently seize B2B niches with collaborative customer service. Holisticly
                                        enhance
                                        plug-and-play processes whereas flexible action items. Dynamically productize
                                        team building
                                        synergy with viral products.</p>

                                    <p>Phosfluorescently grow distinctive human capital without end-to-end action items.
                                        Compellingly repurpose competitive technologies and backward-compatible
                                        catalysts for
                                        change. Uniquely formulate impactful technology whereas granular opportunities.
                                        Continually
                                        promote exceptional models without top-line networks. Seamlessly disseminate
                                        24/7 resources
                                        via enterprise applications.</p>

                                    <blockquote className="wp-block-quote">
                                        <p>Efficiently benchmark goal-oriented functionalities and
                                            future-proof markets. Phosfluorescently optimize next-generation
                                            deliverables through
                                            extensible sources. Monotonectally predominate sticky deliverables before
                                            front-end
                                            benefits. Professionally monetize world-class catalysts for change rather
                                            than 24/7
                                            imperatives. Competently predominate business action items vis-a-vis
                                            cross-unit web
                                            services.</p>
                                    </blockquote>

                                    <p>Professionally reintermediate high-payoff technology vis-a-vis prospective
                                        internal or
                                        “organic” sources. Assertively generate front-end channels vis-a-vis worldwide
                                        resources.
                                        Distinctively procrastinate integrated mindshare without ubiquitous
                                        methodologies.
                                        Monotonectally pursue high-quality quality vectors for premier potentialities.
                                        Continually
                                        fabricate 24/365 markets and economically sound schemas.</p>

                                    <p>Dramatically synergize adaptive outsourcing without functionalized users.
                                        Professionally
                                        engage future-proof innovation through multifunctional technology. Rapidiously
                                        simplify
                                        resource sucking value rather than empowered relationships. Objectively
                                        productivate
                                        leveraged strategic theme areas after multifunctional solutions. Assertively
                                        evisculate
                                        enterprise-wide information after resource-leveling e-commerce.</p>

                                    <p>Progressively enable client-centered e-commerce.</p>


                                    <div className="meta-tags">
                                        <a href="#" rel="tag">magazine</a>
                                        <a href="#" rel="tag">video</a>
                                        <a href="#" rel="tag">vlog</a>
                                    </div>


                                </div>

                                <div id="vlog-author" className="vlog-author-box vlog-bg-box">

                                    <div className="vlog-author row">
                                        <div className="col-lg-2 col-md-3 col-sm-2 col-xs-12">
                                            <img alt="img" src={Author}
                                                 className="avatar avatar-140 photo vlog-rounded-photo"/>
                                        </div>

                                        <div className="col-lg-10 col-md-9 col-sm-10 col-xs-12">
                                            <div className="vlog-mod-head">
                                                <div className="vlog-mod-title">
                                                    <h4 className="h5 author-title">Camila Hoffman</h4>
                                                </div>
                                            </div>
                                            <p>Competently coordinate out-of-the-box infrastructures rather than
                                                reliable
                                                initiatives. Progressively integrate interdependent users whereas viral
                                                niche
                                                markets. Dramatically actualize global best practices for virtual
                                                paradigms.</p>
                                            <a href="#" className="vlog-button vlog-button-small">View all posts</a>
                                        </div>
                                    </div>
                                </div>

                                <div id="vlog-related" className="vlog-related-wrapper">
                                    <div className="row">
                                        <div className="vlog-module module-posts col-lg-12">
                                            <div className="vlog-mod-head">
                                                <div className="vlog-mod-title">
                                                    <h4>You may also like</h4>
                                                </div>
                                            </div>
                                            <div className="row vlog-posts row-eq-height">
                                                <article
                                                    className="vlog-lay-e vlog-post col-lg-4 col-sm-4 col-md-4 col-xs-12 post-168 post type-post status-publish format-video has-post-thumbnail hentry category-technology tag-magazine tag-video tag-vlog post_format-post-format-video series-the-magical-world-of-animals">

                                                    <div className="entry-image">
                                                        <a href="#"
                                                           title="The 7 biggest lizards mistakes you can easily avoid"
                                                           className="">
                                                            <img src={Blog_3}
                                                                 className="attachment-vlog-lay-e size-vlog-lay-e wp-post-image"
                                                                 alt="img"/>
                                                            <div className="vlog-labels small"><span
                                                                className="vlog-format-label">Video</span></div>
                                                        </a>
                                                    </div>
                                                    <div className="entry-header">
                                            <span className="entry-category"><a href="#"
                                                                                className="vlog-cat-8">Technology</a></span>

                                                        <h2 className="entry-title h5"><a href="#">The
                                                            7 biggest lizards mistakes you can easily avoid</a></h2>
                                                    </div>
                                                    <div className="entry-meta">
                                                        <div className="meta-item meta-views">3,578 views</div>
                                                        <div className="meta-item meta-rtime">2 min read</div>
                                                    </div>
                                                </article>
                                                <article
                                                    className="vlog-lay-e vlog-post col-lg-4 col-sm-4 col-md-4 col-xs-12 post-168 post type-post status-publish format-video has-post-thumbnail hentry category-technology tag-magazine tag-video tag-vlog post_format-post-format-video series-the-magical-world-of-animals">

                                                    <div className="entry-image">
                                                        <a href="#"
                                                           title="The 7 biggest lizards mistakes you can easily avoid"
                                                           className="">
                                                            <img src={Blog_3}
                                                                 className="attachment-vlog-lay-e size-vlog-lay-e wp-post-image"
                                                                 alt="img"/>
                                                            <div className="vlog-labels small"><span
                                                                className="vlog-format-label">Video</span></div>
                                                        </a>
                                                    </div>
                                                    <div className="entry-header">
                                            <span className="entry-category"><a href="#"
                                                                                className="vlog-cat-8">Technology</a></span>

                                                        <h2 className="entry-title h5"><a href="#">The
                                                            7 biggest lizards mistakes you can easily avoid</a></h2>
                                                    </div>
                                                    <div className="entry-meta">
                                                        <div className="meta-item meta-views">3,578 views</div>
                                                        <div className="meta-item meta-rtime">2 min read</div>
                                                    </div>
                                                </article>
                                                <article
                                                    className="vlog-lay-e vlog-post col-lg-4 col-sm-4 col-md-4 col-xs-12 post-168 post type-post status-publish format-video has-post-thumbnail hentry category-technology tag-magazine tag-video tag-vlog post_format-post-format-video series-the-magical-world-of-animals">

                                                    <div className="entry-image">
                                                        <a href="#"
                                                           title="The 7 biggest lizards mistakes you can easily avoid"
                                                           className="">
                                                            <img src={Blog_3}
                                                                 className="attachment-vlog-lay-e size-vlog-lay-e wp-post-image"
                                                                 alt="imf"/>
                                                            <div className="vlog-labels small"><span
                                                                className="vlog-format-label">Video</span></div>
                                                        </a>
                                                    </div>
                                                    <div className="entry-header">
                                            <span className="entry-category"><a href="#"
                                                                                className="vlog-cat-8">Technology</a></span>

                                                        <h2 className="entry-title h5"><a href="#">The
                                                            7 biggest lizards mistakes you can easily avoid</a></h2>
                                                    </div>
                                                    <div className="entry-meta">
                                                        <div className="meta-item meta-views">3,578 views</div>
                                                        <div className="meta-item meta-rtime">2 min read</div>
                                                    </div>
                                                </article>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="vlog-sidebar vlog-sidebar-right">

                                <div id="mks_author_widget-2" className="widget mks_author_widget">
                                    <img alt="img" src={Author} className="avatar avatar-80 photo"/>
                                    <h3>Camila Hoffman</h3>
                                    <p>Competently coordinate out-of-the-box infrastructures rather than reliable
                                        initiatives.
                                        Progressively integrate interdependent users whereas viral niche markets.
                                        Dramatically
                                        actualize global best practices for virtual paradigms.</p>

                                    <div className="mks_autor_link_wrap">
                                        <a href="#" className="mks_author_link">View all posts</a>
                                    </div>

                                </div>
                                <div id="vlog_posts_widget-4" className="widget vlog_posts_widget">
                                    <h4 className="widget-title h5"><span>Latest videos</span></h4>

                                    <div className="row ">

                                        <article
                                            className="vlog-lay-g vlog-post col-lg-12 col-md-12 col-sm-12 col-xs-12 post-444 post type-post status-publish format-video has-post-thumbnail hentry category-travel tag-hd tag-magazine tag-video tag-vlog post_format-post-format-video series-the-magical-world-of-animals">
                                            <div className="entry-image">
                                                <a href="#"
                                                   title="Scientists have discovered the cutest puppy on Earth">
                                                    <img src={Blog_4}
                                                         className="attachment-vlog-lay-d-full size-vlog-lay-d-full wp-post-image"
                                                         alt="img"/>
                                                </a>
                                            </div>

                                            <div className="entry-header">
                                                <h2 className="entry-title h6">
                                                    <a href="#">Scientists have discovered the cutest puppy on Earth</a>
                                                </h2>
                                            </div>
                                            <div className="entry-meta">
                                                <div className="meta-item meta-date">
                                                    <span className="updated meta-icon">2 days ago</span>
                                                </div>
                                            </div>
                                        </article>
                                        <article
                                            className="vlog-lay-g vlog-post col-lg-12 col-md-12 col-sm-12 col-xs-12 post-444 post type-post status-publish format-video has-post-thumbnail hentry category-travel tag-hd tag-magazine tag-video tag-vlog post_format-post-format-video series-the-magical-world-of-animals">
                                            <div className="entry-image">
                                                <a href="#"
                                                   title="Scientists have discovered the cutest puppy on Earth">
                                                    <img src={Blog_4}
                                                         className="attachment-vlog-lay-d-full size-vlog-lay-d-full wp-post-image"
                                                         alt="img"/>
                                                </a>
                                            </div>

                                            <div className="entry-header">
                                                <h2 className="entry-title h6">
                                                    <a href="#">Scientists have discovered the cutest puppy on Earth</a>
                                                </h2>
                                            </div>
                                            <div className="entry-meta">
                                                <div className="meta-item meta-date">
                                                    <span className="updated meta-icon">2 days ago</span>
                                                </div>
                                            </div>
                                        </article>
                                        <article
                                            className="vlog-lay-g vlog-post col-lg-12 col-md-12 col-sm-12 col-xs-12 post-444 post type-post status-publish format-video has-post-thumbnail hentry category-travel tag-hd tag-magazine tag-video tag-vlog post_format-post-format-video series-the-magical-world-of-animals">
                                            <div className="entry-image">
                                                <a href="#"
                                                   title="Scientists have discovered the cutest puppy on Earth">
                                                    <img src={Blog_4}
                                                         className="attachment-vlog-lay-d-full size-vlog-lay-d-full wp-post-image"
                                                         alt="img"/>
                                                </a>
                                            </div>

                                            <div className="entry-header">
                                                <h2 className="entry-title h6">
                                                    <a href="#">Scientists have discovered the cutest puppy on Earth</a>
                                                </h2>
                                            </div>
                                            <div className="entry-meta">
                                                <div className="meta-item meta-date">
                                                    <span className="updated meta-icon">2 days ago</span>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        );
    }
}

export default Details;