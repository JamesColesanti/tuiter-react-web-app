/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div className="list-group">
            <a className="list-group-item" href="/">
                <i class="bi bi-twitter"></i>
                <span class="d-none d-xl-inline-block ps-1">Tuiter</span>
            </a>
            <a className={`list-group-item ${active === 'home'?'active':''}`} href="#">
                <i class="bi bi-house-door-fill"></i>
                <span class="d-none d-xl-inline-block ps-1">Home</span>
            </a>
            <a className={`list-group-item ${active === 'explore'?'active':''}`} href="#">
                <i class="bi bi-hash"></i>
                <span class="d-none d-xl-inline-block ps-1">Explore</span>
            </a>
            <a className={`list-group-item ${active === 'notifications'?'active':''}`} href="#">
                <i class="bi bi-bell-fill"></i>
                <span class="d-none d-xl-inline-block ps-1">Notifications</span>
            </a>
            <a className={`list-group-item ${active === 'messages'?'active':''}`} href="#">
                <i class="bi bi-envelope-fill"></i>
                <span class="d-none d-xl-inline-block ps-1">Messages</span>
            </a>
            <a className={`list-group-item ${active === 'bookmarks'?'active':''}`} href="#">
                <i class="bi bi-bookmark-fill"></i>
                <span class="d-none d-xl-inline-block ps-1">Bookmarks</span>
            </a>
            <a className={`list-group-item ${active === 'lists'?'active':''}`} href="#">
                <i class="bi bi-list-ul"></i>
                <span class="d-none d-xl-inline-block ps-1">Lists</span>
            </a>
            <a className={`list-group-item ${active === 'profile'?'active':''}`} href="#">
                <i class="bi bi-person-fill"></i>
                <span class="d-none d-xl-inline-block ps-1">Profile</span>
            </a>
            <a className={`list-group-item ${active === 'more'?'active':''}`} href="#">
                <i class="bi bi-three-dots"></i>
                <span class="d-none d-xl-inline-block ps-1">More</span>
            </a>
        </div>
    );
};

export default NavigationSidebar;
