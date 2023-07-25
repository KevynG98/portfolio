import React from 'react'
import icon from '../../assets/kg_white.png'
import OptionMenu from '../optionMenu/OptionMenu'
import LanguajeButton from '../LanguajeButton/LanguajeButton'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='content'>
      <img className='image' src= {icon} alt='icon'/>
      <div className='menus'>
        <LanguajeButton />
        <OptionMenu />
      </div>
    </div>
  )
}

export default Navbar