import "./Featured.scss";
import React, { useState, useEffect } from "react";
import axios from "../../axios";

function Featured({ title, channel, image, getURL }) {
    const [featuredState, setFeaturedState] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(getURL);
            setFeaturedState(request.data); //return here to correct array data
            console.log(request);
            return request;
        }
        fetchData();
    }, [getURL]);

    return (
        <>
            <section className="featured">
                <img
                    className="featured__thumbnail"
                    src={image}
                    height="75"
                    width="125"
                    alt="featuredThumbnail"
                />
                <div className="featured__details-container">
                    <h3 className="featured__title">{title}</h3>
                    <p className="featured__publisher">{channel}</p>
                </div>
            </section>
        </>
    );
}
export default Featured;
