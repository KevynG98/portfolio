import React from 'react'
import { AiFillGithub, AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import '../Profile/Profile.css';

function Profile(props) {
  const style = {width:'30px', height:'100%'}
  return (
    <div className='box'>
        <div className='info'>
            <img className='picture' src={props.image}/>
            <div className='text'>
              <h2>{props.name}</h2>
              <h5>{props.speciality}</h5>
            </div>
        </div>
        <div className='social'>
            <a href={props.github} target='_blank'><AiFillGithub style={style}/></a>
            <a href={props.instagram} target='_blank'><AiOutlineInstagram style={style}/></a>
            <a href={props.linkedin} target='_blank'><AiFillLinkedin style={style}/></a>
        </div>
    </div>
  )
}

export default Profile