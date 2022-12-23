import "./Content.scss";
import React, { useState, useEffect } from "react";
import axios from "../../axios";

function Content({ getURL }) {
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
            <section className="content">
                <div className="content__videoplayer-container">
                    {videoState.map((video) => (
                        <video
                            // onClick={}
                            className="content__videoplayer"
                            controls
                            // poster={}
                            src={video.image}
                        ></video>
                    ))}
                </div>
            </section>
        </>
    );
}
export default Content;
