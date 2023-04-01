import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "avatar_img": "nasa.png",
   };
   
   const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
   }
   

const tuitsSlice = createSlice({
 name: 'tuits',
 initialState: tuits,
 reducers: {
    deleteTuit(state, action) {
      const index = state
        .findIndex(tuit =>
            tuit._id === action.payload);
      state.splice(index, 1);
    },

    createTuit(state, action) {
      state.unshift({
        ...action.payload,
        ...templateTuit,
        _id: (new Date()).getTime(),
      })
    },

    updateTuit(state, action){
      const index1 = state.findIndex(tuit => tuit._id === action.payload);
      let newtuit = {...tuits[index1]};
      if(newtuit.liked === true){
        newtuit.liked = false;
        newtuit.likes = newtuit.likes-1;
      }else{
        newtuit.liked = true;
        newtuit.likes = newtuit.likes+1;
      }
      let newtuits = tuits.map((tuit,index) => {
        if(index === index1) return(newtuit);
        else return(tuit);
      })
      return(tuits = newtuits);
    }
  } 
});
export const {createTuit, deleteTuit, updateTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;