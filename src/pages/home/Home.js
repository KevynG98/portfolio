import React from 'react'
import { aboutES, homeSubtitleES, homeTitleES, seeProjectsES } from '../../data/constantWords.js'
import './Home.css'
import OptionButton from '../../components/OptionButton/OptionButton.js'

const Home = () => {
  return (
    <div className='homeContainer'>
      <h1 className='homeTitle'>{homeTitleES}</h1>
      <p className='homeSubtitle'>{homeSubtitleES}</p>
      <div className='links'>
        <OptionButton page='work' name={`->${seeProjectsES}`} />
        <OptionButton page='about' name={`->${aboutES}`}/>
      </div>
    </div>
  )
}

export default Home