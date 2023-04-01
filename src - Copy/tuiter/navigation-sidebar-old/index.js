import React from "react";
import {Link} from "react-router-dom";
import "./index.css";
import {useLocation} from "react-router";



const NavigationSidebar = (
 {
   active = 'explore'
 }
) => {
  const {pathname} = useLocation();
  const location = useLocation();
  //const links = ['home','explore','notification','messages','bookmarks','lists','profile']
  
 return (
   <div className="list-group">
      <a href="#" className="list-group-item list-group-item-action ">
        <i class="fab fa-twitter "></i>
      </a>
      <Link to="/tuiter/home" className={`list-group-item wd-nav-anchor
                    ${pathname.indexOf('home')>=0 ? 'active': ''}`} >
          <i class="fa fa-home"></i>
          <span className="d-none d-xl-block wd-nav-anchor-text" >Home</span>
     </Link>
      
     
     <Link to="/tuiter/explore" className={`list-group-item
                    ${pathname.indexOf('explore')>=0 ? 'active': ''}`}>
       Explore
     </Link>
     <Link to="/" className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
       Notifications
     </Link>
     <Link to="/" className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
       Messages
     </Link>
     <Link to="/" className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
       Bookmarks
     </Link>
     <Link to="/" className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
       Lists
     </Link>
     <Link to="/" className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
       Profile
     </Link>
     <Link to="/" className={`list-group-item
                    ${active === 'more'?'active':''}`}>
       More
     </Link>
     {pathname}
     
   </div>
 );
};
export default NavigationSidebar