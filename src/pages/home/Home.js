import React from 'react'
import { aboutES, homeSubtitleES, homeTitleES, seeProjectsES } from '../../data/constantWords.js'
import './Home.css'
import OptionButton from '../../components/OptionButton/OptionButton.js'

const Home = () => {
  return (
    <div>
      <h1>{homeTitleES}</h1>
      <p>{homeSubtitleES}</p>
      <div>
        <OptionButton page='work' name={`->${seeProjectsES}`} />
        <OptionButton page='about' name={`->${aboutES}`}/>
      </div>
    </div>
  )
}

export default Home