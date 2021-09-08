import React from 'react'
import '../../App.css';
import "./FoodStallers.css";
import Footer from "../Footer";
import { Carousel } from 'react-bootstrap';

export default function FoodStallers(){
    return (
      <><div className="food-stall">
      <h1 className="heading">FoodStallers</h1>


      <div className="CarouselContainer">
        
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
         
        <p className="address">Address:Prabodhan Thakeray Natya Mandir Parking,Chamunda Circle,Borivali West,Mumbai,Maharashtra 400092</p>
          <p className="phone">Phone:090226 86134</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item >
        <img
          className="d-block"
          src="/images/image3.png"
          alt="Third slide"
        />
        <Carousel.Caption>
         
        <p className="address">Address:Shop no. 5, Gupta Chawl, Chincholi Bunder Road,Malad West,Mumbai,Maharashtra 400064</p>
          <p className="phone">Phone:098673 02523</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
        <img
          className="d-block"
          src="/images/image4.png"
          alt="Fourth slide"
        />
        <Carousel.Caption>
        <p className="address">Address:Shop no. 4,Nr.Ramapir Mandir,Shivanandj Maharaj Marg,Chinchpada,Borivali East,Mumbai,Maharashtra 400064</p>
          <p className="phone">Phone:098198 73001</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
        <img
          className="d-block"
          src="/images/image5.png"
          alt="Fifth slide"
        />
        <Carousel.Caption>
        <p className="address">Address:Shop no 1, Sejal Apartment, Charkop Road, Charkop Gaon, Kandivali West,Mumbai,Maharashtra 400067</p>
          <p className="phone">Phone:099694 73769</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
        <img
          className="d-block"
          src="/images/image6.png"
          alt="Sixth slide"
        />
        <Carousel.Caption>
        <p className="address">Address:Near Rajasthan Samelan Educational Trust, Mandalik Nagar,Sunder Nagar, Malad West,Mumbai,Maharashtra 400064</p>
          <p className="phone"></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
        <img
          className="d-block"
          src="/images/image7.png"
          alt="Seventh slide"
        />
        <Carousel.Caption>
        <p className="address">Address:New Link Road,Maharashtra Nagar,Kandivali West, Mumbai, Maharashtra 400067</p>
        
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
        <img
          className="d-block"
          src="/images/image8.png"
          alt="Eight slide"
        />
        <Carousel.Caption>
        <p className="address">Address:7/005, Chhatrapati Shivaji Raje Complex,Kandivali West,Mumbai,Maharashtra 400067</p>
          <p className="phone">Phone:070455 38424</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
        <img
          className="d-block"
          src="/images/image9.png"
          alt="Ninth slide"
        />
        <Carousel.Caption>
        <p className="address">Address:Soni Sarovar Tower CHS,Shop no 7, Vraj Deep, Chandavarkar RoadRoad,Borivali West,Mumbai,Maharashtra 400092</p>
          <p className="phone">Phone:081691 71627</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
        <img
          className="d-block"
          src="/images/image10.png"
          alt="Tenth slide"
        />
        <Carousel.Caption>
        <p className="address">Address:Abdul Hamid St,Old Collector Compound,Malwani,Malad West,Mumbai,Maharashtra 400095</p>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>

    
    
     </div>
     <Footer/>
     </>
 )
    
    
}