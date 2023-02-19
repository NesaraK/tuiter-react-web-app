import WhoToFollowListItem from "./WhoToFollowListItem.js"
import who from "./who.js";

const WhoToFollowList = () =>{
    return(`
        <ul class = "list-group">
        <li class="list-group-item"><b>Who to follow</b></li>
            ${
                who.map(who1 => {
                    return(WhoToFollowListItem(who1));
                }).join('')
            }
        </ul>
    `)
}
export default WhoToFollowList;

$('#wd-sidebar').append(`
<div>
    <h1>sidebar testing</h1>
    ${WhoToFollowList()}
</div> 
`)