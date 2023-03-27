import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faRepeat,
  faShare,
  faComment,
  faHeart
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as heartEmpty} from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import { toggleLikeData } from "./tuits-reducer";

const TuitStats = ({ tuit }) => {
    const dispatch = useDispatch();
    const likeDataHandler = (id) => {
        console.log(id);
        dispatch(toggleLikeData(id));
    }
    return(
        <div class="row">
            <span class="wd-each-icon wd-gray-text col-3">
                <FontAwesomeIcon icon={ faComment }/> { tuit.replies }
            </span>
            <span class="wd-each-icon wd-gray-text col-3">
                <FontAwesomeIcon icon={ faRepeat }/> { tuit.retuits }
            </span>
            <span class="wd-bottom-icons-red col-3">
                <FontAwesomeIcon onClick={ () => likeDataHandler(tuit._id)} 
                icon={ tuit.liked ? faHeart : heartEmpty }/> { tuit.likes } 
            </span>
            <span class="wd-each-icon wd-gray-text col-3">
                <FontAwesomeIcon icon={ faShare }/>
            </span>
        </div>
    );
};

export default TuitStats;