import "./Upload.scss";
import React from "react";
import Header from "../../components/Header/Header";
import UploadContent from "../../components/Upload-Content/Upload-Content";
import requests from "../../requests";

function Upload(props) {

    return (
        <>
            <Header />
            <UploadContent getURL={requests.getVideosSidebar}/>
        </>
    );
}
export default Upload;