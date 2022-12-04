import "./Featured.scss";
import {Link} from 'react-router-dom'

function Featured(props) {
    return (
        <>
            <section className="featured">
                <img className="featured__thumbnail" src={props.image} height='75' width='125' alt="featuredThumbnail"/>
                <div className='featured__details-container'>
                    <h3 className='featured__title'>{props.title}</h3>
                    <p className='featured__publisher'>{props.channel}</p>
                </div>
            </section>
        </>
    );
}
export default Featured;