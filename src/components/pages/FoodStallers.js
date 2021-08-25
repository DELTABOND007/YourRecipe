import React from 'react'
import '../../App.css';
import "./FoodStallers.css";
import { Carousel } from 'react-bootstrap';

export default function FoodStallers(){
    return (

     <div className="food-stall">
     <Carousel fade={false} pause={false} controls={true}>
      <Carousel.Item>
         <img
          className="d-block"
          src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
          alt="First slide"
        /> 
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt="second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block"
          src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
     </div>
     )

    
    
}