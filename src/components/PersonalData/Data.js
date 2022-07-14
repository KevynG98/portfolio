import React from 'react'
import './Data.css'

function Data(props) {
  return (
    <div className='boxD'>
      <div className='data'>
        <h2>ABOUT ME</h2>
        <p>{props.paragraph}</p>
        <p><strong>Birthday: </strong>{props.birthday}</p>
        <p><strong>Location: </strong>{props.location}</p>
        <p><strong>Languajes: </strong>{props.languajes}</p>
      </div>
    </div>
  )
}

export default Data