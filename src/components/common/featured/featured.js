import React from 'react';

const Featured = ({imgSrc, title}) => {

    return (
        <article
            className="vlog-lay-e vlog-cat col-lg-4 col-sm-4 col-md-4 col-xs-12 post-4 page type-page status-publish hentry">
            <div className="entry-image">
                <a href="#" title="Amazing stories from around the globe">
                    <img width="344" height="193" src={imgSrc} alt="img"/> <span
                    className="vlog-format-action small"><i className="fa fa-play"></i></span>
                </a>
            </div>
            <div className="entry-header">
                <h2 className="entry-title h5"><a href="#">{title}</a></h2>
            </div>
            {/*<div className="entry-meta"><span className="meta-item"><span*/}
            {/*    className="vlog-count">6</span>videos</span>*/}
            {/*</div>*/}
        </article>
    );
}

export default Featured;