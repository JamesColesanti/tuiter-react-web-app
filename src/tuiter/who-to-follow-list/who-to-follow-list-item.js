/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const WhoToFollowListItem = (
{
    who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png' }
}
) => {
    return(
        <li className="list-group-item" href="#">
            <div className="row">
                <div className="col-2">
                    <img className="rounded-circle" height={48} src={`/images/${who.avatarIcon}`}/>
                </div>
                <div className="col-8">
                    <div className="fw-bold">
                        <span>{who.userName}</span>
                        <span className="ps-1">
                            <i class="bi bi-patch-check-fill"></i>
                        </span>
                    </div>
                    <div>@{who.handle}</div>
                </div>
                <div className="col-2 position-absolute top-50 end-0 translate-middle-y ps-1 pe-3">
                    <button className="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;