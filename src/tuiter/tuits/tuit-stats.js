import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faRepeat,
  faShare,
  faComment,
  faHeart,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as heartEmpty} from "@fortawesome/free-regular-svg-icons";
import { faThumbsDown as faThumbsDownEmpty} from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunks";

const TuitStats = ({ tuit }) => {
    const dispatch = useDispatch();
    const likeDataHandler = (tuit) => {
        tuit.likes = tuit.likes + 1;
        console.log(tuit);
        dispatch(updateTuitThunk({
            ...tuit,
            likes: tuit.likes + 1,
            liked: true
        }));
    }
    return(
        <div class="row">
            <span class="wd-each-icon wd-gray-text col-2">
                <FontAwesomeIcon icon={ faComment }/> { tuit.replies }
            </span>
            <span class="wd-each-icon wd-gray-text col-2">
                <FontAwesomeIcon icon={ faRepeat }/> { tuit.retuits }
            </span>
            <span class="wd-bottom-icons-red col-2">
                <FontAwesomeIcon onClick={ () => dispatch(updateTuitThunk({
                    ...tuit,
                    likes: tuit.likes + 1,
                    liked: true
                    }))}
                icon={ tuit.liked ? faHeart : heartEmpty }/> { tuit.likes } 
            </span>
            <span class="wd-bottom-icons-red col-2">
                <FontAwesomeIcon onClick={ () => dispatch(updateTuitThunk({
                    ...tuit,
                    dislikes: tuit.dislikes + 1,
                    disliked: true
                    }))}
                icon={ tuit.disliked ? faThumbsDown : faThumbsDownEmpty }/> { tuit.dislikes } 
            </span>
            <span class="wd-each-icon wd-gray-text col-2">
                <FontAwesomeIcon icon={ faShare }/>
            </span>
        </div>
    );
};

export default TuitStats;