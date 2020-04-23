import React, {Component} from 'react';
import Blog_2 from "../../../assets/img/blog/blog-2.jpg";

const LatestVideo = ({imgSrc, type, title, description}) => {
    return (
        <article
            className="vlog-lay-b lay-horizontal vlog-post post-92 post type-post status-publish format-gallery has-post-thumbnail hentry category-technology tag-magazine tag-video post_format-post-format-gallery">
            <div className="row">
                <div className="col-lg-6 col-md-6  col-sm-6 col-xs-12">
                    <div className="entry-image">
                        <a href="#"
                           title="Take advantage of different weather forecasts">
                            <img src={imgSrc}
                                 className="attachment-vlog-lay-b size-vlog-lay-b wp-post-image"
                                 alt="img"/>
                            <div className="vlog-labels medium">
                                <span className="vlog-format-label">{type}</span>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="entry-header">
                        {/*<span className="entry-category">*/}
                        {/*    <a href="#" className="vlog-cat-8">Technology</a>*/}
                        {/*</span>*/}
                        <h2 className="entry-title h2">
                            <a href="#">{title}</a>
                        </h2>
                        <div className="entry-meta">
                            <div className="meta-item meta-date">
                                                                    <span
                                                                        className="updated meta-icon">2 days ago</span>
                            </div>
                            {/*<div className="meta-item meta-comments">*/}
                            {/*    <a href="#">2 comments</a>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <div className="entry-content">
                        <p>{description}...</p>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default LatestVideo;