import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-4.mp4' autoPlay loop muted />
      <h1>Get Your Dishes Ready</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <a href="Header.js"><Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          >
         
        GET STARTED
          
        </Button>
        </a>
        
        
          </div>
          
    </div>
  );
}

export default HeroSection;
