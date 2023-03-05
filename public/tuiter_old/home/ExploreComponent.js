import PostSummaryList from "../PostSummaryList/index.js"

const ExploreComponent = () => {
    return(`
    <div class = "row">
        <div class="d-flex flex-row justify-content-between mb-1">
            <div class="d-flex flex-row c2-search-block">
                <i class="fa fa-search" style="margin-left:10px;margin-top: 12px;"></i>
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

        <div class="card" style="width: 100%;">
            <img src="../../images/starship.jpg"
                class="card-img-top" alt="...">
        
            <div>
                <span style="position:relative; left: 20px; top: -70px; color: grey; font-size: 35px">  
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