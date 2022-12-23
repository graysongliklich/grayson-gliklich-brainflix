import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Video from "./components/Video/Video";
import CommentEntry from "./components/CommentEntry/CommentEntry";
import CommentList from "./components/CommentList/CommentList";
import Featured from "./components/Featured/Featured";
import requests from "./requests";



function App() {
    return (
        <>
            <Header />
            <Content getURL={requests.getVideosSidebar} />
            <Video getURL={requests.getVideosSidebar}/>
            <Featured getURL={requests.getVideosSidebar} />
            <CommentEntry />
            <CommentList getURL={requests.getVideosSidebar} />
        </>
    );
}

export default App;
