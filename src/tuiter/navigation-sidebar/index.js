import React from "react";
import {Link} from "react-router-dom";
import "./index.css";
import {useLocation} from "react-router";



const NavigationSidebar = (
 {
   active = 'explore'
 }
) => {
  let {pathname} = useLocation();
  const location = useLocation();
  if (pathname === '/tuiter') pathname='home'
  
 return (
  <div>
   <div className="list-group">
      <a href="#" className="list-group-item list-group-item-action ">
        <i class="fab fa-twitter "></i>
      </a>
      <Link to="/tuiter/home" className={`list-group-item wd-nav-anchor
                    ${pathname.indexOf('home')>=0 ? 'active': ''}`} >
          <i class="fa fa-home"></i>
          <span className="d-none d-xl-block wd-nav-anchor-text" >Home</span>
     </Link>
      
     
     <Link to="/tuiter/explore" className={`list-group-item wd-nav-anchor
                    ${pathname.indexOf('explore')>=0 ? 'active': ''}`}>
          <i class="fa fa-hashtag"></i>
          <span className="d-none d-xl-block wd-nav-anchor-text" >Explore</span>  
     </Link>

     <Link to="/" className={`list-group-item wd-nav-anchor
                    ${active === 'notifications'?'active':''}`}>
          <i class="fa fa-bell"></i>
          <span className="d-none d-xl-block wd-nav-anchor-text" >Notifications</span> 
     </Link>

     <Link to="/" className={`list-group-item wd-nav-anchor
                    ${active === 'messages'?'active':''}`}>
          <i class="fa fa-envelope"></i>
          <span className="d-none d-xl-block wd-nav-anchor-text" >Messages</span> 
     </Link>

     <Link to="/" className={`list-group-item wd-nav-anchor
                    ${active === 'bookmarks'?'active':''}`}>
                    <i class="fa fa-bookmark"></i>
                    <span className="d-none d-xl-block wd-nav-anchor-text" >Bookmarks</span> 
     </Link>

     <Link to="/" className={`list-group-item wd-nav-anchor
                    ${active === 'lists'?'active':''}`}>
                    <i class="fa fa-list"></i>
                    <span className="d-none d-xl-block wd-nav-anchor-text" >Lists</span> 
     </Link>

     <Link to="/" className={`list-group-item wd-nav-anchor
                    ${active === 'profile'?'active':''}`}>
                    <i class="fa fa-user"></i>
                    <span className="d-none d-xl-block wd-nav-anchor-text" >Profile</span> 
     </Link>
     <Link to="/" className={`list-group-item wd-nav-anchor c1-anchor
                    ${active === 'more'?'active':''}`}>
              <span class="fa-stack small">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>
                </span>
                <span className = "c1-anchor-span d-none d-xl-block wd-nav-anchor-text">
                    More
                </span>
     </Link>
   </div>
         <div class="d-grid mt-2">
         <a href="tweet.html"
            class="btn btn-primary btn-block rounded-pill">
            Tweet</a>
    </div>
  </div>
 );
};
export default NavigationSidebar
