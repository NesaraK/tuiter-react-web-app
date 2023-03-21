import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../profile/profile.css";
import "./index.css";
import { updateProfile,undoProfile } from "../profile/profile-reducer";


const EditProfile = () => {
    const get_Date = (s) => {
        var mdate = new Date(s);
        var d = String(mdate.getDate()).padStart(2,'0');
        var m = String(mdate.getMonth()+1).padStart(2,'0');
        var y = mdate.getFullYear();
        var newdate = y + '-' + m + '-' + d;
        return(newdate);
    }
    const dispatch = useDispatch();
    const {currentprofile} = useSelector(state => state.profile);
    const [profile, setProfile] = useState(currentprofile);
    const oldprofile = {...currentprofile}
    var datestr = get_Date(profile.dateOfBirth).toString();
    
    const updateProfileHandler = () =>{
      dispatch(updateProfile(profile)); 
    }

    const undoProfileHandler = () =>{
        //alert("undoProfile");
        //console.log(oldprofile);
        //setProfile(oldprofile);
        dispatch(undoProfile(oldprofile)); 
    }
    return(
        <div className="row">
            <div className="col-12 position-relative">
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link to = "/tuiter/profile">
                        <i className="bi bi-x-lg"></i>
                        </Link>
                        <label className="EditProfile-label">Edit Profile</label>
                        <button className="rounded-pill btn-dark float-end editprofile-button" onClick={() => 
                        updateProfileHandler(profile)}>Save</button>
                    </li>
                    <li className="list-group-item">
                        <div className="position-relative mb-4">
                            <img src={`/images/${profile.bannerPicture}`} alt="skimag" className="w-100"/>
                            <img src={`/images/${profile.profilePicture}`} alt="skimag" className="profile-img-2 position-absolute wd-nudge-up"/>
                        </div>
                        <div className="tuit-blank">

                        </div>
                   
                        <div className="input-group1 form-horizontal border border-secondary rounded-2 mt-4">
                            <div>
                                <label htmlFor="profile-name" className="form-label px-3 mb-0 text-secondary">Name:</label>
                            </div>
                            
                            <div class="input-group">
                                <input className="form-control  ml-0 pt-0 border-0 w-25" id="profile-name" value={profile.firstName} 
                                onChange={(event) =>{const newProfile = {...profile, firstName:event.target.value}
                                setProfile(newProfile)}}
                                />
                                <input className="form-control  ml-0 pt-0 border-0 w-75"  value={profile.lastName} 
                                onChange={(event) =>{const newProfile = {...profile, lastName:event.target.value}
                                setProfile(newProfile)}}
                                />
                            </div>
                        </div>
                    
                        <div className="input-group1 form-horizontal border border-secondary rounded-2 mt-4">
                            <div>
                                <label htmlFor="profile-bio" className="form-label px-3 mb-0 text-secondary">Bio:</label>
                            </div>
                            <div>
                                <textarea class="form-control border-0" id="profile-bio" value={profile.bio} rows="3"
                                onChange={(event) =>{const newProfile = {...profile, bio:event.target.value}
                                setProfile(newProfile)}}></textarea>
                            </div>
                        </div>

                        <div className="form-horizontal border border-secondary rounded-2 mt-4">
                            <div>
                                <label htmlFor="profile-location" className="form-label px-3 mb-0 text-secondary">Location:</label>
                                <input className="form-control  ml-0 pt-0 border-0" id="profile-location" value={profile.location} 
                                onChange={(event) =>{const newProfile = {...profile, location:event.target.value}
                                setProfile(newProfile)}}
                                />
                            </div>

                        </div>

                        <div className="form-horizontal border border-secondary rounded-2 mt-4">
                            <div>
                                <input className="form-control  ml-0 pt-0 border-0" id="profile-website" placeholder="Website" value = {profile.website}
                                onChange={(event) =>{const newProfile = {...profile, website:event.target.value}
                                setProfile(newProfile)}}
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label htmlFor="profile-dateOfBirth" className="form-label px-3 mb-0 text-secondary ">Birth Date:</label>
                            <input type = "date" className="form-control  ml-0 pt-0 border-0" id="profile-dateOfBirth" value={datestr} 
                            onChange={(event) =>{const newProfile = {...profile, dateOfBirth:event.target.value}
                            setProfile(newProfile)}}
                            />
                        </div>

                    </li>

                </ul>
            </div>
        </div>
    )
}
export default EditProfile;