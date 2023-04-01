import React from "react";
import {useDispatch} from "react-redux";
//import { deleteTuit } from "./tuits-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import "./index.css";
import {Link} from "react-router-dom";
import TuitStat from "./TuitStats";

const TuitItem = (
    {
        post = 
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
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    
 return(
   <>
    <li className="list-group-item">
        <div className="row">
            <div className="col-2 position-relative">
                <img src={`/images/${post.avatar_img}`} alt="skimag" className="s2-img-b"/>
            </div>
            <div className = "col-10 position-relative" >
            <i className="bi bi-x-lg float-end"
                onClick={() => deleteTuitHandler(post._id)}></i>
                    <div>
                        <span style= {{"font-size":"15px", "font-weight":"bold"}}>
                                {post.userName} <i class="fas fa-check-circle"></i>
                        </span>
                        <span className = "wd-handle-s2" style= {{"font-size":"15px", "margin-left":"5px"}}>
                    		{post.handle} . {post.time}
                	    </span>
                    </div>
                    <div >
                    		<span>
                        		{post.tuit}
                    		</span>
                    </div>
                    <TuitStat tuit = {post}/>
            </div>
        </div>
    </li>
  </>
 );
}

export default TuitItem;