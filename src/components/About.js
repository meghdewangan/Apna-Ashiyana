// import logo from './logo.svg';
import React from 'react';
import './About.css';
// import Profile from './Componenet/Profile';

function About() {
    return (
        <div className="About">
            <h1 style={{fontSize: "3rem"}}>About</h1>
            <p style={{fontSize: "1.9rem"}}>Apna Ashiyana is an online solution dedicated to the creation of Home design
                 projects. From the search for inspiration to the Home design architecture 
                 through 2D,3D modeling, Apna Ashiyana supports you in all your Home design 
                 projects.
            </p>

            <p style={{fontSize: "1.9rem"}}>
                Apna ashiyana is a platform where people can see the designs of their dream 
                home. Here you will see plot area wise customized designs, where you will be able
                to analyze how your house will look like.
            </p>
        </div>
    );
}

export default About;