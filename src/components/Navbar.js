import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { FiMenu } from 'react-icons/fi'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='toggleButton'>
            <button><FiMenu /></button>
        </div>
        <div className='Links'>
            <Link to='/'> Home </Link>
            <Link to='/projects'> Projects </Link>
            <Link to='/experience'> Experience </Link>
        </div>
    </div>
  )
}

export default Navbar