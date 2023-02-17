import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowListItemTest = () => {
    return(`
        <div class="list-group">
            <a class="list-group-item wd-follow-section-label">
                <span>Who to follow</span>
            </a>
            ${
                who.map(w => {
                    return(WhoToFollowListItem(w));
                }).join('')
            }
        </div>
    `);
}
export default WhoToFollowListItemTest;