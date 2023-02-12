import React from 'react'
import "./Developer.css"
import Image1 from "../../src/Image/ritik.png";
import Image2 from "../../src/Image/megh.png";
import Image3 from "../../src/Image/puspa.png";
import Image4 from "../../src/Image/rakesh.png";
// import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Developer = () => {
  return (

    <div>
        <div className="Developer">
    <h1 style={{marginTop: "7px"}}>Our Team</h1>
    <p>Meet our developers who shares their knowledge and best practice to upskill
        the project. We together solved all the problems faced during the development 
        period and also contributed to the wider development community offering
        advice on sites such as stack exchange and Github.</p>
      
    </div>

    <div className='set'>
    <div className='container'>
        <img src={Image1} className="image"
        style={{
            height: "200px",
            width: "150px"
        }}
        />
        {/* <h1>Meghraj Dewangan</h1> */}
        <h2>Ritik Sahu</h2>
        <h3>Frontend Developer</h3>
    </div>
    <div className='container'>
        <img src={Image2} className="image"
        style={{
            height: "200px",
            width: "150px"
        }}
        />
        <h2>Megh Dewangan</h2>
        <h3>Backend Developer</h3>
        
    </div>
    <div className='container'>
        <img src={Image3} className="image"
        style={{
            height: "200px",
            width: "150px"
        }}
        />
        <h2>Puspendra</h2>
        <h3>Frontend Developer</h3>
        
    </div>
    <div className='container'>
        <img src={Image4} className="image"
        style={{
            height: "200px",
            width: "150px"
        }}
        />
        <h2>Rakesh Singh</h2>
        <h3>Backend Developer</h3>
        
    </div>
    </div>
    </div>
  );
}

export default Developer;