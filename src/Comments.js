import React, { useState } from "react";
import "./Comments.css"

function Comments(props) {

    // console.log("props that's sent down to comments: ", props)

    const [acknowledged, setAcknowledged] = useState(props.acknowledged)

    const clickHandler = () => {
        props.updateCommentData(props.id);
        setAcknowledged(true);
    }

    return (
        <div className="comment" key={props.id}>
            <img className="user-pic" src={props.user.image.original_url} alt="" />
            <div className="comment-content">
                <h3 className="comment-user">
                    {props.user.first_name} {props.user.last_name}
                </h3>
                <p className="comment-body">
                    {props.body}
                </p>
                <div className="comment-info">
                    <h4>
                        {props.dates.created.date_time}
                    </h4>
                    {acknowledged ? <a className="comment-seen"></a> : <a href="#" className="comment-unseen"
                        onClick={() => clickHandler()}>Mark as Seen</a>}
                </div>
            </div>
        </div>
    )
}

export default Comments