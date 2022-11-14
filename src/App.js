import "./App.scss";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Video from "./components/Video/Video";
import CommentEntry from "./components/CommentEntry/CommentEntry";
import CommentList from "./components/CommentList/CommentList";
import Featured from "./components/Featured/Featured";
import VideosJSON from "./data/videos.json";
import VideoDetailsJSON from "./data/video-details.json";

function App() {
    return (
        <>
        {/* Hardcoded props */}
                <Header />
                <Content video='' image={VideoDetailsJSON[0].image} />
                    <div className="app__comments-component-container">
                        <aside>
                        <Video title={VideoDetailsJSON[0].title} channel={VideoDetailsJSON[0].channel} views={VideoDetailsJSON[0].views} likes={VideoDetailsJSON[0].likes} timestamp={VideoDetailsJSON[0].timestamp} description={VideoDetailsJSON[0].description}/>
                            <CommentEntry />
                            <CommentList name={VideoDetailsJSON[0].comments[0].name} timestamp={VideoDetailsJSON[0].comments[0].timestamp} comment={VideoDetailsJSON[0].comments[0].comment}/>
                            <CommentList name={VideoDetailsJSON[1].comments[1].name} timestamp={VideoDetailsJSON[1].comments[1].timestamp} comment={VideoDetailsJSON[1].comments[1].comment}/>
                            <CommentList name={VideoDetailsJSON[2].comments[2].name} timestamp={VideoDetailsJSON[2].comments[2].timestamp} comment={VideoDetailsJSON[2].comments[2].comment}/>
                        </aside>
                        <div className="app__featured-component-container">
                            <section className="app__featured-comonent-title-container">
                                <h3 className="app__featured-component-title">NEXT VIDEOS</h3>
                            </section>
                            <Featured image={VideosJSON[0].image} title={VideosJSON[0].title} channel={VideosJSON[0].channel}/>
                            <Featured image={VideosJSON[1].image} title={VideosJSON[1].title} channel={VideosJSON[1].channel}/>
                            <Featured image={VideosJSON[2].image} title={VideosJSON[2].title} channel={VideosJSON[2].channel}/>
                            <Featured image={VideosJSON[3].image} title={VideosJSON[3].title} channel={VideosJSON[3].channel}/>
                            <Featured image={VideosJSON[4].image} title={VideosJSON[4].title} channel={VideosJSON[4].channel}/>
                            <Featured image={VideosJSON[5].image} title={VideosJSON[5].title} channel={VideosJSON[5].channel}/>
                            <Featured image={VideosJSON[6].image} title={VideosJSON[6].title} channel={VideosJSON[6].channel}/>
                            <Featured image={VideosJSON[7].image} title={VideosJSON[7].title} channel={VideosJSON[7].channel}/>
                        </div>
                    </div>

            {/* dynamic component generation */}
                {/* VideoDetailsJSON.map((video) => <Video key={video.id} title={video.title} channel={video.channel} views={video.views} likes={video.likes} timestamp={video.timestamp} description={video.description} />) */}
        </>
    );
}

export default App;
