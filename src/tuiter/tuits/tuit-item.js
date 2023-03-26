/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import TuitStats from "./tuit-stats.js"
import { deleteTuit } from "./tuits-reducer.js";
import {useDispatch} from "react-redux";

const TuitItem = ({ tuit }) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return(
        <li className="list-group-item">
             <div className="row">
                    <div class="col-2">
                        <img class="wd-avatar-image"
                            src="../images/JamesColesantiProfilePicture.jpg"/>
                    </div>
                    <div class="col-10">
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