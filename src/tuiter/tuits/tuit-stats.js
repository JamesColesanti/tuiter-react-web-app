/* eslint-disable jsx-a11y/anchor-is-valid */
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faRepeat,
  faShareAlt,
  faHeart
} from "@fortawesome/free-solid-svg-icons";
import {faComment, faHeart as heartEmpty} from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import { toggleLikeData } from "./tuits-reducer";

/* eslint-disable jsx-a11y/alt-text */
const TuitStats = ({ tuit }) => {
    const dispatch = useDispatch();
    const likeDataHandler = (id) => {
        console.log(id);
        dispatch(toggleLikeData(id));
    }
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
                <FontAwesomeIcon onClick={() => likeDataHandler(tuit._id)} className={`${tuit.liked ? 'text-danger':''}`}
                icon={tuit.liked ? faHeart : heartEmpty}/> {tuit.likes} </a>
                
                {/* <img src="../images/like.png"
                    class="wd-like-pic"/>{ tuit.likes }</a> */}
            <a href="#"
                class="wd-gray-text col-3">
                <img src="../images/share.png"
                    class="wd-icon-pic"/>
            </a>
        </div>
    );
};
export default TuitStats;