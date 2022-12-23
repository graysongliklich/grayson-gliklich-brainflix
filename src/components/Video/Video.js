import "./Video.scss";
import React, { useState, useEffect } from "react";
import axios from "../../axios";
import Likes from "../../assets/Icons/likes.svg";
import Views from "../../assets/Icons/views.svg";

function Video({ getURL }) {
    const [videoState, setVideoState] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(getURL);
            setVideoState(request.data);
            return request;
        }
        fetchData();
    }, [getURL]);

    return (
        <>
            {videoState.map((video) => (
                <section className="video">
                    <h1 className="video__title">{video.title}</h1>
                    <div className="video__metadata-container">
                        <div className="video__metadata--left">
                            <h3 className="video__publisher">
                                {video.channel}
                            </h3>
                            <h3 className="video__date, video__metadata-item">
                                {video.timestamp}
                            </h3>
                        </div>
                        <div className="video__metadata--right">
                            <div className="video__views-container">
                                <img src={Views} alt="eyeIcon" />
                                <h3 className="video__viewcount, video__metadata-item">
                                    {video.views}
                                </h3>
                            </div>
                            <div className="video__likes-container">
                                <img src={Likes} alt="heartIcon" />
                                <h3 className="video__likecount, video__metadata-item">
                                    {video.likes}
                                </h3>
                            </div>
                        </div>
                    </div>
                    <p className="video__description">{video.description}</p>
                </section>
            ))}
        </>
    );
}
export default Video;
