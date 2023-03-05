const PostListItem = (post) => {
    return(`
    <div class = "container" style = "border: 1px solid rgb(63, 62, 62);">
        <div class = "s2-b">
            <img src= ${post.avatar_img} alt="banner1" class="s2-img-b">
        </div>
        <div class = "s2-cd">
            <div class="s2-author-b1">
                <span style= "font-size:12px;">
                    ${post.userName} <i class="fas fa-check-circle"></i>
                </span>
                <span class = "wd-handle-s2" font-size:12px;>
                    @${post.handle} . ${post.time}
                </span>
            
                <div class="" font-size:12px;>
                    <span>
                        ${post.title}
                    </span>
                </div>
            </div>
            <div class="card border-secondary" style = "background-color: black;">
                    <img src= ${post.image}  class="card-img-top" alt="...">
                    <div class="card-body" style = "border-top:1px solid rgb(63, 62, 62); padding:5px 1rem 5px 1rem;">
                        <div class="">
                            ${post.link_title}
                        </div>
                            <p style = "color:lightgrey">
                                ${post.content}
                            </p>
                    </div>
            </div>

            <div class="s2-g">
                <div class = "s2-g-links">
                        <div class="s2-g-icons">
                            <a href="#"><i class="far fa-comment" style='color: white'></i></a>
                            <span class ="wd-s2-g-numbers">${post.comment_number}</span>
                        </div>
                        <div class="s2-g-icons">
                            <!--<i class="material-symbols-outlined">Cached</i>-->
                            <a href="#"><i class='fa fa-retweet' style='color: white'></i></a>
                            <span class ="wd-s2-g-numbers">${post.retweet_number}</span>
                        </div>
                        <div class="s2-g-icons">
                            <!--<i class='fa fa-heart fg-color-red'></i>-->
                            <!--<i class="material-symbols-outlined">Favorite</i>-->
                            <a href="#"><i class='fa fa-heart' style='color: red'></i></a>
                            <span class ="wd-s2-g-numbers">${post.like_number}</span>
                        </div>
                        <div class="s2-g-icons">
                            <!--<i class="material-symbols-outlined">Upload</i>-->
                            <a href="#"><i class='fa fa-upload' style='color: white'></i></a>
                        </div>
                </div>
            </div>
        </div>
        <div class = "float-done">

        </div>
    </div>
    `) 
}
export default PostListItem;