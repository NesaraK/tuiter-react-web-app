import React from "react";
import postsArray from './posts.json';
import PostListItem from "./post-list-item";
import WhatsHappening from "./whats-happening";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import TuitsList from "../tuits/tuits-list";

const HomeComponent = () => {
    return(
      <>
        <h2>Home</h2>
        <WhatsHappening/>
        <TuitsList/>
      </>
      );
};
export default HomeComponent;