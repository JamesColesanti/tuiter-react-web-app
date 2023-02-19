import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <div class="row">
            <!-- search field and cog -->
            <div class="wd-search-section">
                <div class="position-relative top-50 start-0 translate-middle-y
                pb-2">
                    <span class="wd-search-tuiter-pill">
                        <div class="position-relative top-50 start-0
                        translate-middle-y">
                            <div class="position-absolute top-50 start-0
                                translate-middle-y ps-2">
                                <a href="#" class="wd-remove-decor ps-2">
                                    <i class="fas fa-solid fa-search"></i>
                                </a>
                            </div>
                            <input class="wd-search-tuiter-input ps-5"
                            placeholder="Search Tuiter"/>
                        </div>
                    </span>
                    <div class="position-absolute top-50 end-0 translate-middle-y
                        pe-1 pb-2">
                        <a href="explore-settings.html">
                        <i class="fas fa-cog fa-2x"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <ul class="nav mb-2 nav-tabs">
            <!-- tabs -->
            <li class="nav-item">
                <a class="nav-link active" href="../for-you.html">For You</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../trending.html">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../news.html">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../sports.html">Sports</a>
            </li>
            <li class="nav-item">
                <a class="nav-link d-none d-md-inline-block"
                    href="../entertainment.html">Entertainment</a>
            </li>
        </ul>
        <!-- image with overlaid text -->
        <div class="position-relative pt-1">
            <img class="wd-picture"
                src="../../images/starship.jpg"/>
            <div class="position-absolute bottom-0 start-0 wd-image-text ps-1">
                SpaceX's Starship
            </div>
        </div>
        ${PostSummaryList()}
    `);
}
export default ExploreComponent;