import PostSummaryList from "../PostSummaryList/index.js"

const ExploreComponent = () => {
    return(`
    <div class = "row">
        <div class="d-flex flex-row justify-content-between mb-1 mb-2">
            <div class="d-flex flex-row c2-search-block-1" style = "display:flex; border:1px solid black; border-radius: 25px; height: 40px; width:90%; background-color: white;">
                <i class="fa fa-search" style="margin-left:10px;margin-top: 12px; color: black;"></i>
                <input type="text" id="text-field-search" placeholder="Search Tuiter" class="form-control c2-search-input-field">
            </div>
            <div class="p-2" style="align-content: right">
                <a href="explore-settings.html" class="gear-icon"><i class="fa fa-cog fa-2x"></i></a> 
            </div>
        </div>
    </div>
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" href="#">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Sports</a>
            </li>
            <li class="nav-item d-none d-md-block">
                <a class="nav-link" href="#">Entertainment</a>
            </li>
        </ul>

        <div class="card" style="width: 100%; position: relative">
            <img src="../../images/starship.jpg"
                class="card-img-top" alt="...">
        
            <div>
                <span style="position:absolute; left: 20px; bottom: 30px; color: grey; font-size: 35px; font-weight: bold">  
                    SpaceX StarShip
                </span>
            </div>
        </div>

        ${PostSummaryList()}
    `)
}
export default ExploreComponent;

/*$('#wd-explore').append(`
<div>
    <h1>sidebar testing</h1>
    ${ExploreComponent()} 
</div> 
`)*/