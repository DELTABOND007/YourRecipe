import React from 'react';
import '../App.css';
import { Button } from './Button';
import Header from './Header'
import './HeroSection.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1>Get Your Dishes Ready</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          >
         
          <a className="link style" href="Header.js">GET STARTED</a>
          
        </Button>
        
        
          </div>
          
    </div>
  );
}

export default HeroSection;
