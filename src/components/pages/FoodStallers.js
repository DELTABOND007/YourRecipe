import React from 'react'
import '../../App.css';
import "./FoodStallers.css";
import Footer from "../Footer";
import { Carousel } from 'react-bootstrap';

// import image1 from './../assets/images/1.jpg';
export default function FoodStallers(){
    return (
      <>

     <div className="food-stall">
     <Carousel fade={false} pause={false} controls={true}>
      <Carousel.Item>
         <img
          className="d-block"
          src='/images/image1.png'
          alt="First slide"
        /> 
        <Carousel.Caption>
          
          <p className="address">Address:2,Sardar Vallabbhai Patel Road,Himmat Nagar,Borivali West,Mumbai,Maharashtra 400013</p>
          <p className="phone">Phone:098690 49410</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block"
          src="/images/image2.png"
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
          src="/images/image3.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
        <img
          className="d-block"
          src="/images/image4.png"
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
        <img
          className="d-block"
          src="/images/image5.png"
          alt="Fifth slide"
        />
        <Carousel.Caption>
          <h3>Fifth slide label</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
        <img
          className="d-block"
          src="/images/image6.png"
          alt="Sixth slide"
        />
        <Carousel.Caption>
          <h3>Sixth slide label</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
        <img
          className="d-block"
          src="/images/image7.png"
          alt="Seventh slide"
        />
        <Carousel.Caption>
          <h3>Seventh slide label</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
        <img
          className="d-block"
          src="/images/image8.png"
          alt="Eight slide"
        />
        <Carousel.Caption>
          <h3>Eight slide label</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
        <img
          className="d-block"
          src="/images/image9.png"
          alt="Ninth slide"
        />
        <Carousel.Caption>
          <h3>Ninth slide label</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
        <img
          className="d-block"
          src="/images/image10.png"
          alt="Tenth slide"
        />
        <Carousel.Caption>
          <h3>Tenth slide label</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    
    
     </div>
     <Footer/>
     </>
 )
    
    
}