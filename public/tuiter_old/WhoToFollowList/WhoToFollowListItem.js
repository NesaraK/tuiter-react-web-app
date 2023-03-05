const WhoToFollowListItem = (who) => {
    return(`
    <li class="list-group-item c3-list-items">
        <div style="display: flex; align-items: center;">
            <img class="c3-img" src= ${who.avatarIcon} alt= ${who.userName}>
            <div style="display: flex; flex-direction: column; align-items: center; margin-left: 15px;">
                <div>
                    <span class="c2-author">${who.userName}</span><i class="fas fa-check-circle"></i>
                </div>
                <span style="margin-left: -10px;">@${who.handle}</span>
            </div>
        </div>
        <button class="btn btn-primary c3-button">
            Follow
        </button>    
    </li>
    `)
}
export default WhoToFollowListItem;