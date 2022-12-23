import "./CommentList.scss";
import React, { useState, useEffect } from "react";
import axios from "../../axios";
import User from "../../assets/Images/Mohan-muruge.jpg";

function CommentList({ getURL }) {
    const [commentState, setCommentState] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(getURL);
            setCommentState(request.data);
            return request;
        }
        fetchData();
    }, [getURL]);

    return (
        <>
            {commentState.map((comment) => (
                <section className="comment-list">
                    <img
                        className="comment-list__user-avatar"
                        src={User}
                        alt="UserAvatar"
                    />
                    <div className="comment-list__comment-content">
                        <div className="comment-list__comment-details">
                            <h3 className="comment-list__user-name">
                                {comment.name}
                            </h3>
                            <p className="comment-list__date-time">
                                {comment.timestamp}
                            </p>
                        </div>
                        <p className="comment-list__comment">
                            {comment.comment}
                        </p>
                    </div>
                </section>
            ))}
        </>
    );
}
export default CommentList;
