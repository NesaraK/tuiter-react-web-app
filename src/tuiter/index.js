
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import {Routes, Route} from "react-router";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import HomeComponent from "./home";
import profileReducer from "./profile/profile-reducer";
import ProfileComponent from "./profile/ProfileComponent";
import EditProfile from "./edit-profile";

const store = configureStore(
  {reducer: {who: whoReducer, tuitsData: tuitsReducer, profile: profileReducer}});


function Tuiter() {
 return (
<Provider store={store}>
<div className="row mt-2">
  <div className="col-2 col-md-2 col-lg-1 col-xl-2">
    <NavigationSidebar active="explore"/>
  </div>
  <div className="col-10 col-md-10 col-lg-7 col-xl-6"
       style={{"position": "relative"}}>
       <Routes>
                <Route index element={<HomeComponent/>}></Route>
                <Route path="home" element={<HomeComponent/>}></Route>
                <Route path="explore" element={<ExploreComponent/>}></Route>
                <Route path="profile" element={<ProfileComponent/>}></Route>
                <Route path="edit-profile" element={<EditProfile/>}></Route>
        </Routes>
  </div>
  <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
     <WhoToFollowList/>
  </div>
</div>
</Provider>
 );
}

export default Tuiter