import React from 'react'
import '../../App.css';
import "./FoodStallers.css";
import { Carousel } from 'react-bootstrap';

// import image1 from './../assets/images/1.jpg';
export default function FoodStallers(){
    return (

     <div className="food-stall">
     <Carousel fade={false} pause={false} controls={true}>
      <Carousel.Item>
         <img
          className="d-block"
          //src={image1}
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