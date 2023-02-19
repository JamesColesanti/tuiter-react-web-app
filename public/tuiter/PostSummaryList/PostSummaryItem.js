/* eslint-disable jsx-a11y/alt-text */
const PostSummaryItem = (post) => {
    return(`
        <a class="wd-tuit-basic-div list-group-item" href='#'>
            <div class="position-relative top-0 start-0">
                <div class="wd-gray-text wd-font-size-14">
                ${post.topic}
                </div>
                <div>
                    <span class="wd-font-size-14 wd-bold-text">${post.userName}</span>
                    <i class="fa fa-solid fa-check-circle"></i>
                    <span class="wd-gray-text wd-font-size-14"> - ${post.time}</span>
                </div>
                <div class="pe-5 me-5">
                    <div class="pe-5 wd-font-size-14 wd-bold-text">
                        ${post.title}
                    </div>
                </div>
            </div>
            <div class="position-absolute top-50 end-0 translate-middle-y pe-3">
                <img class="wd-basic-tuit-picture"  
                src="${post.image}"/>
            </div>
        </a>
    `);
}
export default PostSummaryItem;