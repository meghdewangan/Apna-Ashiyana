import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Apna
            <span className='logo'>
            
            </span>
            <i  class='fas fa-home fa-fw fa-3x'></i>
            {/* <i  class='fas fa-home fa-fw fa-3x'></i> */}
            
         
            {/* <i class="fa fa-home" style="font-size:36px"></i> */}
            {/* <img src="./logo1.png" alt ="fireSpot"/> */}
            {/* <i class='fab fa-typo3' /> */}
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <div className='megh'>
          <ul style={{marginLeft: "420px"}} className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/'
               className='nav-links'
               onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/form'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Personal
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/formo'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Rent
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/formt'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Business
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/developer' className='nav-links' onClick={closeMobileMenu}>
                Developer's
              </Link>
            </li>

            {/* <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Dev. Team
              </Link>
            </li> */}

            {/* <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li> */}
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;