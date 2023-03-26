/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
const TuitStats = ({ tuit }) => {
    return(
        <div class="row">
            <a href="#" class="wd-each-icon wd-gray-text col-3">
                <img src="../images/comment.png"
                    class="wd-icon-pic"/>{ tuit.replies }
                    </a>
            <a href="#"
                class="wd-each-icon wd-gray-text col-3">
                <img src="../images/retweet.png"
                    class="wd-icon-pic"/>{ tuit.retuits }</a>
            <a href="#"
                class="wd-bottom-icons-red col-3">
                <img src="../images/like.png"
                    class="wd-like-pic"/>{ tuit.likes }</a>
            <a href="#"
                class="wd-gray-text col-3">
                <img src="../images/share.png"
                    class="wd-icon-pic"/>
            </a>
        </div>
    );
};
export default TuitStats;