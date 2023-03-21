import React from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import { updateTuit } from "./tuits-reducer";
import "./index.css";

const TuitStat = (
    {
        tuit = 
        { "_id": 123, 
        "topic": "Web Development", 
        "userName": "ReactJS",
        "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
        "time": "2h",   
        "image": "reactlogo.png",
        "liked": true,
        "replies": 123,
        "retuits": 432,
        "likes": 2345,
        "handle": "@spacex",
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
       },
    }
) => {
    const dispatch = useDispatch();
    const updateLikeHandler = (id) => {
        dispatch(updateTuit(id));
    }
    
 return(
   <>
                   <div class="s2-g">
                        <div className = "s2-g-links">
                                <div className="s2-g-icons">
                                
                                    <Link to="#"><i className="far fa-comment fg-color-black" ></i></Link> 
                                    <span className ="wd-s2-g-numbers">{tuit.replies}</span>
                                </div>
                                <div className="s2-g-icons">
                                    
                                    <Link to="#"><i className="fa fa-retweet fg-color-black" ></i></Link> 
                                    <span class ="wd-s2-g-numbers">{tuit.retuits}</span>
                                </div>
                                <div className="s2-g-icons">
                                    {tuit.liked && <Link to="#"><i className="fa fa-heart fg-color-red" onClick={()=>updateLikeHandler(tuit._id)}></i></Link>}
                                    {!tuit.liked && <Link to="#"><i className="bi bi-heart fg-color-black" onClick={()=>updateLikeHandler(tuit._id)}></i></Link>}
                                    <span className ="wd-s2-g-numbers">{tuit.likes}</span>
                                </div>
                                <div className="s2-g-icons">
                                    <Link to="#"><i className="fa fa-upload fg-color-black" ></i></Link>
                                </div>
                        </div>
                    </div>
  </>
 );
}

export default TuitStat;