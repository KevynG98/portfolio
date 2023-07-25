import React from 'react'
import { aboutTitleES, aboutParagraphES } from '../../data/constantWords'
import photo from '../../assets/photo.jpeg'
import './About.css'

const About = () => {
  return (
    <div>
        <div>
          <h2>{aboutTitleES}</h2>
          <p>{aboutParagraphES}</p>
        </div>
        <div>
          <img src={photo} alt="I'ts me"/>
        </div>
    </div>
  )
}

export default About