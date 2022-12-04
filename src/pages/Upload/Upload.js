import React from 'react'

import "./Upload.scss";
import Header from "../../components/Header/Header";
import UploadContent from "../../components/Upload-Content/Upload-Content";
import {Link} from 'react-router-dom'

function Upload(props) {

    return (
        <>
            <Header />
            <UploadContent />
        </>
    );
}
export default Upload;