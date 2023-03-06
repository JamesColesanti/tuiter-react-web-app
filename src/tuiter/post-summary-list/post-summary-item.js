/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const PostSummaryItem = (
    {
        post = {
        "topic": "Space",
        "userName": "SpaceX",
        "time": "2h",
        "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
        "image": "tesla.png"
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
            <div class="position-relative top-0 start-0">
                <div className="wd-font-size-16"> {post.userName} . {post.time}</div>
                <div className="fw-bolder wd-font-size-16">
                    {post.topic}
                    <span className="ps-1">
                        <i class="bi bi-patch-check-fill"></i>
                    </span>
                </div>
                <div className="pe-5 me-5 wd-font-size-16">{post.title}</div>
            </div>
            <div class="position-absolute top-50 end-0 translate-middle-y pe-3">
                <img width={70} className="float-end rounded-3" src={`/images/${post.image}`}/>
            </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;
