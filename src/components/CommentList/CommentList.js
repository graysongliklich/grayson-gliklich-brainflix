import User from '../../assets/Images/Mohan-muruge.jpg' 
import "./CommentList.scss";

function commentList({name, timestamp, comment}) {
    return (
        <>
            <section className="comment-list">
                <img className='comment-list__user-avatar' src={User} alt="UserAvatar"/>
                <div className="comment-list__comment-content">
                    <div className="comment-list__comment-details">
                        <h3 className="comment-list__user-name">{name}</h3>
                        {/* Return here to correct timedate conversion */}
                        <p className="comment-list__date-time">{Date.now(timestamp)}</p>
                    </div>
                    <p className="comment-list__comment">{comment}</p>
                </div>
            </section>
        </>
    );
}
export default commentList;