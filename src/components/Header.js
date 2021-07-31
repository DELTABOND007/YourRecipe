import React from "react";
const Header = (props) => {
    const { search, onInputChange } = props;
    return (<div className="jumbotron">
        <h1 className="display-1">
            <i class="icon ion-md-restaurant brand-icon"></i>Your Recipe
            <i class="icon ion-md-restaurant brand-icon"></i>

        </h1>
        <div className="input-group w-50 mx-auto">
            <input type="text" class="form-control" placeholder="Search Your Recipe..."
                value={props.search}
                onChange={props.onInputChange} />

            <div class="input-group-append">
                <button className="btn btn-dark">Search</button>
            </div>
        </div>
    </div>);
}
export default Header;