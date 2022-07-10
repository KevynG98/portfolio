import React from 'react'
import { AiFillGithub, AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <AiFillGithub />
            <AiOutlineInstagram />
            <AiFillLinkedin />
        </div>
        <p> &copy; 2022 kevfgprogrammer.com</p>
    </div>
  )
}

export default Footer