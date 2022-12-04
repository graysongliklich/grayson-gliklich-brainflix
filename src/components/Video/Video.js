import "./Video.scss";
import React, { useState, useEffect } from "react";
import Likes from "../../assets/Icons/likes.svg";
import Views from "../../assets/Icons/views.svg";

function Video({ title, channel, timestamp, views, likes, description }) {
    const [video, setVideo] = useState([]);

    return (
        <>
            <section className="video">
                <h1 className="video__title">{title}</h1>
                <div className="video__metadata-container">
                    <div className="video__metadata--left">
                        <h3 className="video__publisher">{channel}</h3>
                        {/* Return here to correct timedate conversion */}
                        <h3 className="video__date, video__metadata-item">
                            {timestamp}
                        </h3>
                    </div>
                    <div className="video__metadata--right">
                        <div className="video__views-container">
                            <img src={Views} alt="eyeIcon" />
                            <h3 className="video__viewcount, video__metadata-item">
                                {views}
                            </h3>
                        </div>
                        <div className="video__likes-container">
                            <img src={Likes} alt="heartIcon" />
                            <h3 className="video__likecount, video__metadata-item">
                                {likes}
                            </h3>
                        </div>
                    </div>
                </div>
                <p className="video__description">{description}</p>
            </section>
        </>
    );
}
export default Video;
