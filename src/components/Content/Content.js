import "./Content.scss";

function Content({image}) {
    return (
        <>
            <section className="content">
                <div className="content__videoplayer-container">
                    <video 
                    className="content__videoplayer" 
                    controls
                    poster={image}
                    src=''>
                    </video>
                </div>
            </section>
        </>
    );
}
export default Content;