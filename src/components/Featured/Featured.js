import "./Featured.scss";
import React, { useState, useEffect } from "react";
import axios from "../../axios";

function Featured({getURL}) {
    const [featuredState, setFeaturedState] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(getURL);
            setFeaturedState(request.data);
            return request;
        }
        fetchData();
    }, [getURL]);

    return (
        <>
            {featuredState.map(feature => (
                <section className="featured">
                    <img
                        className="featured__thumbnail"
                        src={feature.image}
                        height="75"
                        width="125"
                        alt="featuredThumbnail"
                    />
                    <div className="featured__details-container">
                        <h3 className="featured__title">{feature.title}</h3>
                        <p className="featured__publisher">{feature.channel}</p>
                    </div>
                </section>
            ))}
        </>
    );
}
export default Featured;
