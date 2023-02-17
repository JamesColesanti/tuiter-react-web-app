const NavigationSidebar = () => {
    return(`
        <div class="list-group">
            <a class="list-group-item" href="/">
                <i class="fab fa-twitter"></i></a>
            <a class="list-group-item" href="#">
                <i class="fas fa-solid fa-home"></i>
                <span class="d-none d-xl-inline-block">Home</span>
            </a>
            <a class="list-group-item" href="#">
                <i class="fas fa-solid fa-hashtag"></i>
                <span class="d-none d-xl-inline-block">Explore</span>
            </a>
            <a class="list-group-item" href="#">
                <i class="fas fa-solid fa-envelope"></i>
                <span class="d-none d-xl-inline-block">Notifications</span>
            </a>
            <a class="list-group-item" href="#">
                <i class="fas fa-solid fa-bookmark"></i>
                <span class="d-none d-xl-inline-block">Messages</span>
            </a>
            <a class="list-group-item" href="#">
                <i class="fas fa-solid fa-list"></i>
                <span class="d-none d-xl-inline-block">Lists</span>
            </a>
            <a class="list-group-item" href="#">
                <i class="fas fa-solid fa-user"></i>
                <span class="d-none d-xl-inline-block">Profile</span>
            </a>
            <a class="list-group-item" href="#">
                <span class="fa-stack small">
                    <i class="fas fa-solid fa-circle fa-stack-2x"></i>
                    <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>
                </span>
                <span class="d-none d-xl-inline-block">More</span>
            </a>
        </div>
        <div class="d-grid mt-2">
            <a href="../tuit.html"
                class="btn btn-primary btn-block rounded-pill">
                Tuit</a>
        </div>
    `);
}
export default NavigationSidebar;