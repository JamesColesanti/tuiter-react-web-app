import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowListItemTest = () => {
    return(`
        <ul class="list-group">
            <li class="list-group-item">
                <span>Who to follow</span>
            </li>
            ${
                who.map(w => {
                    return(WhoToFollowListItem(w));
                }).join('')
            }
        </ul>
    `);
}
export default WhoToFollowListItemTest;