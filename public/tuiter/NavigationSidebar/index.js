const NavigationSidebar = (active = 'Home') => {
    return(`
      <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action">
                <i class="fab fa-twitter"></i></li></a>

            <a href="../home/index.html" class="list-group-item list-group-item-action ${active === 'Home' ? 'active': ''} c1-anchor">
                <i class="fa fa-home"></i>
                <span class = "c1-anchor-span d-none d-xl-block">
                    Home
                </span>
            </a>

            <a href="../explore/index.html" class="list-group-item list-group-item-action c1-anchor ${active === 'Explore' ? 'active': ''}">
                <i class="fa fa-hashtag"></i>
                <span class = "c1-anchor-span d-none d-xl-block">
                    Explore
                </span>
            </a>

            <a href="#" class="list-group-item list-group-item-action c1-anchor ${active === 'Notifications' ? 'active': ''}">
                <i class="fa fa-bell"></i>
                <span class = "c1-anchor-span d-none d-xl-block">
                    Notifications
                </span>
            </a>

            <a href="#" class="list-group-item list-group-item-action c1-anchor ${active === 'Messages' ? 'active': ''}">
                <i class="fa fa-envelope"></i>
                <span class = "c1-anchor-span d-none d-xl-block">
                    Messages
                </span>
            </a>

            <a href="#" class="list-group-item list-group-item-action c1-anchor ${active === 'Bookmarks' ? 'active': ''}">
                <i class="fa fa-bookmark"></i>
                <span class = "c1-anchor-span d-none d-xl-block">
                    Bookmarks
                </span>
            </a>
            
            <a href="#" class="list-group-item list-group-item-action c1-anchor ${active === 'Lists' ? 'active': ''}">
                <i class="fa fa-list"></i>
                <span class = "c1-anchor-span d-none d-xl-block">
                    Lists
                </span>
            </a>

            <a href="#" class="list-group-item list-group-item-action c1-anchor ${active === 'Profile' ? 'active': ''}">
                <i class="fa fa-user"></i>
                <span class = "c1-anchor-span d-none d-xl-block">
                    Profile
                </span>
            </a>

            <a href="#" class="list-group-item list-group-item-action c1-anchor ${active === 'More' ? 'active': ''}">
                <span class="fa-stack small">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>
                </span>
                <span class = "c1-anchor-span d-none d-xl-block">
                    More
                </span>
            </a>
      </div>
      <div class="d-grid mt-2">
        <a href="tweet.html"
           class="btn btn-primary btn-block rounded-pill">
           Tweet</a>
      </div>
    `);
   }
   export default NavigationSidebar;

   $('#wd-sidebar').append(`
        <div>
            <h1>sidebar testing</h1>
            ${NavigationSidebar()}
        </div> 
   `)
