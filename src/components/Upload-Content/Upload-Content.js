import React from "react";
import "./Upload-Content.scss";

import PublishIcon from "../../assets/Icons/publish.svg";
import ContentThumbnail from "../../assets/Images/Upload-video-preview.jpg"; //return to remove this in place of api

function UploadContent() {
    return (
        <>
            <section className="upload-content">
                <h1 className="upload-content__page-title">Upload Video</h1>
                <form className="upload-content__form">
                    <div className="upload-content__thumbnail-container">
                        <label className="upload-content__thumbnail-label">
                            VIDEO THUMBNAIL
                        </label>
                        <img
                            className="upload-content__thumbnail"
                            src={ContentThumbnail}
                        ></img>{" "}
                        {/*return to remove this in place of api*/}
                    </div>
                    <aside className="upload-content__inputs-container">
                        <div className="upload-content__video-title-container">
                            <label
                                className="upload-content__title-label"
                                for="title"
                            >
                                TITLE YOUR VIDEO
                            </label>
                            <input
                                className="upload-content__title-input"
                                type="text"
                                id="title"
                                value=""
                                name="title"
                                placeholder="Add a title to your video"
                            ></input>
                        </div>
                        <div className="upload-content__description-container">
                            <label
                                className="upload-content__description-label"
                                for="description"
                            >
                                ADD A VIDEO DESCRIPTION
                            </label>
                            <input
                                className="upload-content__description-input"
                                type="text"
                                id="description"
                                value=""
                                name="description"
                                placeholder="Add a description to your video"
                            ></input>
                        </div>
                    </aside>
                </form>
                <div className="upload-content__buttons-container">
                    <button
                        className="upload-content__publish-button"
                        type="text"
                    >
                        <img
                            className="upload-content__publish-icon"
                            src={PublishIcon}
                        ></img>
                        <p className="upload-content__publish-text">PUBLISH</p>
                    </button>
                    <button
                        className="upload-content__cancel-button"
                        type="text"
                    >
                        <p className="upload-content__cancel-text">CANCEL</p>
                    </button>
                </div>
            </section>
        </>
    );
}
export default UploadContent;
