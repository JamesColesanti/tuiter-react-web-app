const WhoToFollowListItem = (who) => {
    return(`
        <a class="list-group-item" href='#'>
            <div>
                <div class="position-relative top-50 start-0 translate-middle-y">
                    <span class="float-start">
                        <img class="wd-follow-image"
                        src="${who.avatarIcon}"/>
                    </span>
                    <span class="float-start mt-xl-1 mb-xl-1 ms-xl-3 me-xl-1">
                        <div>
                            <span>${who.userName}</span>
                            <i class="fa fa-solid fa-check-circle"></i>
                        </div>
                        <div>@${who.handle}</div>
                    </span>
                </div>
                <div class="position-absolute top-50 end-0 translate-middle-y ps-1 pe-3">
                    <button class="btn btn-primary override-bs">Follow</button>
                </div>
            </div>
        </a>
    `);
}
export default WhoToFollowListItem;