const PostSummaryItem = (post) => {
    return(`
        <div class="card" style="width: 100%;">
            <div class="card-body d-flex flex-row justify-content-between">
                <div>
                    <div class = "c2-title">
                        ${post.topic}
                    </div>
                    <div>
                        <span class="c2-author">${post.userName}</span><i class="fas fa-check-circle"></i> <span class= "c2-title">- ${post.time}</span>
                        <div class="c2-author">
                            ${post.title}
                        </div>
                    </div>
                </div>
                <div>
                    <img class ="c2-img" src="${post.image}" alt="${post.userName}">
                </div>
            </div>
        </div>
    `)
}
export default PostSummaryItem;