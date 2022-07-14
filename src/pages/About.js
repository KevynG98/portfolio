import React from 'react'
import '../styles/About.css'
import Profile from '../components/Profile/Profile'
import Data from '../components/PersonalData/Data';
import profilePicture from '../pictures/hola.jpg';

function About() {
  return (
    <div>
      <div className='aboutme'>
        <div className='picture'>
          <Profile 
            name="Kevyn Girón" 
            image={profilePicture} 
            speciality='Software Developer' 
            github='https://github.com/KevynG98'
            instagram='https://www.instagram.com/gtred86/'
            linkedin='https://www.linkedin.com/in/kgprogrammer98/'
            />
        </div>
        <div className='text'>
          <Data
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          birthday="June 30, 1998"
          location="Guatemala, Guatemala"
          languajes="Spanish, English"
          />
        </div>
      </div>

      <div className='contactform'>

      </div>
    </div>
  )
}

export default About