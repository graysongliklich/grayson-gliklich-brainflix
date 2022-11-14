import User from '../../assets/Images/Mohan-muruge.jpg';
import SubmitIcon from '../../assets/Icons/add_comment.svg';
import "./CommentEntry.scss";


function commentEntry() {
    return (
        <>
            <section className="comment-entry">
                <h3 className="comment-entry__comment-count">Comment Count</h3>
                <div className="comment-entry__add-comment-container">
                    <img className="comment-entry__user-avatar" src={User} alt="userAvatar"/>
                    <div className='comment-entry__input-submit-container'>
                        <div class="comment-entry__input">
                            <label className='comment-entry__input-label' for="comment">JOIN THE CONVERSATION</label>
                            <input class="comment-entry__input-field" type="text" id="comment" value="" name="comment" placeholder="Add a new comment"></input>
                        </div>
                        <button className="comment-entry__sumbit-button" type="submit">
                            <img className="comment-entry__submit-icon" src={SubmitIcon}></img>
                            <p className="comment-entry__submit-text">COMMENT</p>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
export default commentEntry;
