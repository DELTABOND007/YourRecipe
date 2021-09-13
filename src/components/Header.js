import React from "react";



const Header = (props) => {
    const { search, onInputChange, onSearchClick } = props;
    return (
    <div className="jumbotron">
        
        <h1 className="display-1">
            <i class="icon ion-md-restaurant brand-icon"></i>YourRecipe<i class="icon ion-md-restaurant brand-icon"></i>

        </h1>
        <div className="input-group input w-50 mx-auto">
            <input type="text" class="form-control" placeholder="Search Your Recipe..."
                value={search}
                onChange={onInputChange}/>

            <div className="input-group-append ">
                <button className="btn btn-dark"  onClick={onSearchClick}>
                    Search
                </button>
            </div>
        </div>
        
        
       
    </div>
    
    
    );


    
    
}
export default Header;