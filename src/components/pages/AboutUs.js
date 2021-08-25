import React from 'react'
import '../../App.css';
import "./AboutUs.css";

export default function AboutUs(){
    return (
    <div className="about-us">
        <h1 className="heading">AboutUs</h1>
        <p className="para">Hello, wishes from YourRecipe.com</p>

        <p className="para1">
            Your Recipe is a food recipe website,with a team of three students with a motive of helping the local food stallers in our areas.Your Recipe provides recipes that are used by beginner to a professional chef. We are open to suggestions for any new ideas in our project.You can contact us for suggestions.Browse through some tips and tricks for recipes<br />
            <br/>
            <iframe width="270" height="200" src="https://www.youtube.com/embed/_4aS5vXNLVw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="270" height="200" src="https://www.youtube.com/embed/k9oV97JEvTk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="270" height="200" src="https://www.youtube.com/embed/EZ-MXloBm1Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </p></div>
    )
}