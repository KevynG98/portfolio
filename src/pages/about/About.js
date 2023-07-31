import React from 'react'
import { aboutTitleES, aboutParagraphES } from '../../data/constantWords'
import photo from '../../assets/photo.jpeg'
import './About.css'

const About = () => {
  return (
    <div className='contentAbout'>
        <div className='textAbout'>
          <h2 className='aboutTitle'>{aboutTitleES}</h2>
          <p>{aboutParagraphES}</p>
        </div>
        <img className='profileImage' src={photo} alt="I'ts me"/>
    </div>
  )
}

export default About