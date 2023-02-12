import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>APNA आशियाना</h1>
      <p>Find Your Dream Property Architecture</p>
    </div>
  );
}

export default HeroSection;
