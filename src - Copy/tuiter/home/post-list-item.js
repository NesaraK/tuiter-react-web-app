import React from "react";
import "./index.css";
import {Link} from "react-router-dom";


const PostListItem = (
    {
        post = 
        {
            _id: 123,
            topic: 'Web Development',
            avatar_img: "banner1.jpg",
            handle: "elonmusk",
            userName: 'Elon Musk',
            time: '23h',
            title: 'amzing show about the mission',
            image: 'spaceman.jpg',
            link_title: 'contdown: inspiration4 mission to space',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
            comment_number: "4.2k",
            retweet_number: "3.5k",
            like_number: "37.5k"
        }
    }
) => {
 return(
   <>
        <div className="row">
            <div className="col-2 position-relative">
                <img src={`/images/${post.avatar_img}`} alt="skimag" className="s2-img-b"/>
            </div>
            <div className = "col-10 position-relative" >
                    <div>
                        <span style= {{"font-size":"15px"}}>
                                {post.userName} <i class="fas fa-check-circle"></i>
                        </span>
                        <span className = "wd-handle-s2" style= {{"font-size":"15px", "margin-left":"5px"}}>
                    		@{post.handle} . {post.time}
                	    </span>
                    </div>
                    <div >
                    		<span>
                        		{post.title}
                    		</span>
                    </div>

                    <div class="card border-secondary"  >
                            <img src={`/images/${post.image}`}  
                                        class="card-img-top" alt="..." /> 
                                    <div class="card-body" >
                                        <h5 class="card-title1">Countdown: Inspirational</h5>
                                        <p class="card-text1">
                                            {post.content}
                                        </p>
                                
                                    </div> 
                    </div> 

                

                    <div class="s2-g">
                        <div className = "s2-g-links">
                                <div className="s2-g-icons">
                                
                                    <Link to="#"><i className="far fa-comment fg-color-black" ></i></Link> 
                                    <span className ="wd-s2-g-numbers">{post.comment_number}</span>
                                </div>
                                <div className="s2-g-icons">
                                    
                                    <Link to="#"><i className="fa fa-retweet fg-color-black" ></i></Link> 
                                    <span class ="wd-s2-g-numbers">{post.retweet_number}</span>
                                </div>
                                <div className="s2-g-icons">
                                    <Link to="#"><i className="fa fa-heart fg-color-red" ></i></Link>
                                    <span className ="wd-s2-g-numbers">{post.like_number}</span>
                                </div>
                                <div className="s2-g-icons">
                                    <Link to="#"><i className="fa fa-upload fg-color-black" ></i></Link>
                                </div>
                                
                        </div>
                    </div>
                    


            </div>
        </div>
  </>
 );
}

export default PostListItem;