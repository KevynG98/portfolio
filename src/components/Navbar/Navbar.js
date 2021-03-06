import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Navbar/Navbar.css';
import { FiMenu } from 'react-icons/fi'

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
      <div className='toggleButton'>
        <button 
          onClick={() => {
          setExpandNavbar((prev) => !prev);
        }}>
          <FiMenu />
        </button>
      </div>
      <div className='links'>
        <Link to='/portfolio'  > Home </Link>
        <Link to='/projects'> Projects </Link>
        <Link to='/about'> About me </Link>
      </div>
    </div>
  )
}

export default Navbar