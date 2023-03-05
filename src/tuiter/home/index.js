import React from "react";
import postsArray from './posts.json';
import PostListItem from "./post-list-item";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const HomeComponent = () => {
    return(
        <ul className="list-group solid-black-border-1px">
          {
            postsArray.map(post =>
              <PostListItem
                key={post._id} post={post}/> )
          }
        </ul>
      );
};
export default HomeComponent;