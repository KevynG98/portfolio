import React from 'react'
import './Portfolio.css'
import { workListES } from '../../data/constantWords'


const Portfolio = () => {
  return (
    <div className='portfolioContent'>
      <div className='textElements'>
        <div className='elemento'>
          <h1 className='title'>{workListES[0].title}</h1>
        </div>
        <div className='elemento'>
          <h3 className='category'><span className='type'>Category:</span> {workListES[0].category}</h3>
        </div>
        <div className='elemento'>
          <h3 className='year'><span className='type'>Category:</span>{workListES[0].year}</h3>
        </div>
        <div className='elemento'>
          <p className='information'><span className='type'>Category:</span>{workListES[0].information}</p>
        </div>

      </div>
      {
        workListES[0].images.map((item, index) => (
          <img className='imagesP' key={index} src={item} alt='a' />
        )
        )
      }
    </div>
  )
}

export default Portfolio