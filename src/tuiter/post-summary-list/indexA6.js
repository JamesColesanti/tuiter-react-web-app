import React from "react";
import postsArray from './posts.json';
import PostSummaryItem from "./post-summary-item";

const PostSummaryListA6 = () => {
    return(
        <ul className="list-group">
        {
            postsArray.map(post =>
            <PostSummaryItem
            key={post._id} post={post}/> )
        }
        </ul>
    );
};
export default PostSummaryListA6;
