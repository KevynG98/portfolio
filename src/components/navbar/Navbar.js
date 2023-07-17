import React from 'react'
import icon from '../../assets/chasquido.png'
import OptionMenu from '../optionMenu/OptionMenu'
import LanguajeButton from '../LanguajeButton/LanguajeButton'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='content'>
      <img className='image' src= {icon} alt='icon'/>
      <div className='menus'>
        <OptionMenu />
        <LanguajeButton />
      </div>
    </div>
  )
}

export default Navbar