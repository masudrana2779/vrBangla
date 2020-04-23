import React, {Component} from 'react';
import MostView from "../../../assets/img/most-view/most-view.jpg";

const MostViewFooter = ({title, image}) => {
    return (

        <article
            className="vlog-lay-h lay-horizontal vlog-post col-lg-12 col-md-12 col-sm-12 col-xs-12 post-147 post type-post status-publish format-video has-post-thumbnail hentry category-travel tag-magazine tag-video tag-vlog post_format-post-format-video series-amazing-stories-from-around-the-globe">
            <div className="row">
                <div className="col-lg-5 col-xs-6">
                    <div className="entry-image">
                        <a href="#"
                           title="These 7 things will change the way you approach travel">
                            <img src={image} alt="img"/>
                        </a>
                    </div>
                </div>
                <div className="col-lg-7 col-xs-6 no-left-padding">
                    <div className="entry-header">
                        <h2 className="entry-title h7"><a href="#">{title}</a></h2>
                    </div>
                    <div className="entry-meta">
                        {/*<div className="meta-item meta-views">15,249 views</div>*/}
                    </div>
                </div>
            </div>
        </article>
    );
}

export default MostViewFooter;