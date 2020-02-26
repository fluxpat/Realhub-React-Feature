import React, { useState } from "react";
import data from "./comment_data.json"
import "./Notifications.css"

function Notifications() {

    const [acknowledged, setAcknowledged] = useState(data)

    const clickHandler = (id) => {
        (data.find(comment => comment.id === id)).acknowledged = true;
        console.log(data.find(comment => comment.id === id))
    }

    return (
        <div className="comments-block">
            {/* {comments} */}
            {data.map((data) =>
                /* Could have instead separated 'map()' function from the 'comment' component for simplicity, but didn't here as the feature is not very complex/nested */
                <div className="comment" key={data.id}>
                    <img className="user-pic" src={data.user.image.original_url} alt="" />
                    <div className="comment-content">
                        <h3 className="comment-user">
                            {data.user.first_name} {data.user.last_name}
                        </h3>
                        <p className="comment-body">
                            {data.body}
                        </p>
                        <div className="comment-info">
                            <h4>
                                {data.dates.created.date_time}
                            </h4>
                            {(acknowledged.find(comment => comment.id === data.id)).acknowledged ? <a></a>
                             : <a href="#" className="comment-seen" onClick={() => setAcknowledged({...acknowledged, })}>Mark as Seen</a>}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Notifications