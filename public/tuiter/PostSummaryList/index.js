import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
    return(`
    <ul class="list-group position-relative pt-2">
        ${
            posts.map(p => {
                return(PostSummaryItem(p));
            }).join('')
        }
    </ul>
`);
}
export default PostSummaryList;