import PostList from "../PostList/index.js"

const HomeComponent = () => {
    return(`
 

        ${PostList()}
    `)
}
export default HomeComponent;

/*$('#wd-explore').append(`
<div>
    <h1>sidebar testing</h1>
    ${ExploreComponent()} 
</div> 
`)*/