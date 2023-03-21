import { createSlice } from "@reduxjs/toolkit";
import currentprofile from "./profile.json";

/*const initialState ={
  currentprofile:{
      firstName: "Jose",
      lastName: "Annunziato",
      handle: "@jannunzi",
    profilePicture: "jose.png",
     	bannerPicture: "banner1.jpg",
    bio: "Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.",
    website: "youtube.com/webdevtv",
    location: "Boston, MA",
    	dateOfBirth: "7/7/1968",
      	dateJoined: "4/2009",
    followingCount: "340",	
    followersCount: "223"
  }
}
*/
const initialState ={
  currentprofile
}




const profileSlice = createSlice({
 name: 'profile',
 initialState,
 reducers: {
  updateProfile :(state, action) => {
      state.currentprofile = action.payload;
  },
  undoProfile :(state, action) => {
    state.currentprofile = action.payload;
  }
}

});

export const {updateProfile,undoProfile} = profileSlice.actions;
export default profileSlice.reducer;