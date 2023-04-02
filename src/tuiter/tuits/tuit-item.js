/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import TuitStats from "./tuit-stats.js"
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = ({ tuit }) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));

    }
    return(
        <li className="list-group-item">
             <div className="row">
                    <div class="col-1">
                        <img class="wd-avatar-image"
                            src={ tuit.image }/>
                    </div>
                    <div class="col-11 ps-4">
                        <i className="bi bi-x-lg float-end"
                            onClick={() => deleteTuitHandler(tuit._id)}></i>
                        <span className="fw-bolder wd-font-size-16">
                            {tuit.userName}
                            <span className="ps-1">
                                <i class="bi bi-patch-check-fill"></i>
                            </span>
                        </span>
                        <span class="ps-1">
                            { tuit.handle } - { tuit.time }
                        </span>
                        <div>
                            { tuit.tuit }
                        </div>
                        <TuitStats tuit={tuit}/>
                    </div>
                </div>
        </li>
    );
};
export default TuitItem;