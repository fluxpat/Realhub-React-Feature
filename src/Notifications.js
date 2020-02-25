import React from "react";
import data from "./comment_data.json"
import "./Notifications.css"

let comments = [];

for (let i = data.length - 1; i >= 0; i--) {
    comments.push(
        <div className="comment">
            <img className="user-pic" src={data[i].user.image.original_url} alt="" />
            <div className="comment-content">
                <h3 className="comment-user">
                    {data[i].user.first_name} {data[i].user.last_name}
                </h3>
                <p className="comment-body">
                    {data[i].body}
                </p>
            </div>
        </div>
    )
}

function Notifications() {
    return (
        <div className="comments-block">
            {comments}
        </div>
    )
}

export default Notifications