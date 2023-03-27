/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./index.css";
import PostSummaryList from "../post-summary-list"

const ExploreComponent = () => {
    return(
    <>
        <div class="row">
            <div class="wd-search-section">
                <div class="position-relative top-50 start-0 translate-middle-y
                pb-2">
                    <span class="wd-search-tuiter-pill">
                        <div class="position-relative top-50 start-0
                        translate-middle-y">
                            <div class="position-absolute top-50 start-0
                                translate-middle-y ps-2">
                                <a href="#" class="wd-remove-decor ps-2">
                                <i className="bi bi-search position-absolute"></i>
                                </a>
                            </div>
                            <input class="wd-search-tuiter-input ps-5"
                            placeholder="Search Tuiter"/>
                        </div>
                    </span>
                    <div class="position-absolute top-50 end-0 translate-middle-y
                        pe-1 pb-2">
                        <a href="#">
                            <i className="text-primary float-end bi
                            bi-gear-fill fs-2 position-relative"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <ul className="nav nav-pills mb-2">
            <li className="nav-item">
                <a className="nav-link active" href="#">For You</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Trending</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">News</a>
            </li>
            <li className="nav-item">
                <a class="nav-link" href="#">Sports</a>
            </li>
            <li className="nav-item">
                <a class="nav-link d-none d-md-inline-block"
                    href="#">Entertainment</a>
            </li>
        </ul>
        <div className="position-relative mb-2">
            <img src="/images/starship.jpg" className="w-100"/>
            <h1 className="position-absolute wd-nudge-up text-white">
            SpaceX Starship</h1>
        </div>
        <PostSummaryList/>
    </>
);
};
export default ExploreComponent;
