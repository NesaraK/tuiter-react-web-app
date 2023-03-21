import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./profile.css";


const ProfileComponent = () => {
    const {currentprofile} = useSelector(state => state.profile);
    const profile = {...currentprofile}
    return(
        <div className="row">
            <div className="col-12 position-relative">
                <div className="position-relative mb-2">
                    <img src={`/images/${profile.bannerPicture}`} alt="skimag" className="w-100"/>
                    <img src={`/images/${profile.profilePicture}`} alt="skimag" className="profile-img position-absolute wd-nudge-up"/>
                    <Link to="/tuiter/edit-profile" className="rounded-pill btn float-end edit-btn-class">
                        Edit Profile
                    </Link>
                </div>

                <div className="tuit-blank">

                </div>
                <div>
                    <span className="tuit-topic">
                        {profile.firstName} {profile.lastName}
                    </span>
                </div>
                <div>
                    <span className="">
                        {profile.handle} 
                    </span>
                </div>
                <div className="tuit-bio">
                    {profile.bio} 
                </div>

                <div class="s2-g">
                        <div className = "profile-links">
                                <div className="profile-icons">         
                                    <Link to="#"><i class="fas fa-map-marker-alt fg-color-black"></i></Link> 
                                    <span className ="wd-s2-g-numbers">{profile.location}</span>
                                </div>
                                <div className="profile-icons">                                  
                                    <Link to="#"><i class="bi bi-balloon fg-color-black"></i></Link> 
                                    <span class ="wd-s2-g-numbers">Born on {profile.dateOfBirth}</span>
                                </div>
                                <div className="profile-icons">
                                    <Link to="#"><i class="fa fa-calendar fa_custom fg-color-black"></i></Link> 
                                    <span class ="wd-s2-g-numbers">{profile.dateJoined}</span>
                                </div>
                        </div>
                        <div className="mt-4">
                            <span className="tuit-number">
                                {profile.followingCount} 
                            </span>
                            <span className="margin-right-16">
                                Following
                            </span>
                            <span className="tuit-number">
                                {profile.followersCount} 
                            </span>
                            Followers
                        </div>
                </div>
            </div>
        </div>
    );
}
export default ProfileComponent;