import React from "react";
import '../App.css'
const RecipeItem=(props)=>{
    const{name,image,ingredientLines}=props;
return (
<div class="card py-2 text-center">
    <img src={image} className="img-fluid w-10 mx-auto rounded-circle"/>
    <div class="card-body">
        <h5>{name}</h5>
    </div>
    <ul className="list-group list-group-flush">
        {
            ingredientLines.map(ingredient=>
                (<li className="list-group-item">{ingredient}</li>))
        }
    </ul>
</div>
);
}
export default RecipeItem;