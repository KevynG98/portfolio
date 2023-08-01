import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Work.css'
import { workListES } from '../../data/constantWords.js'

const listaItems = workListES

const Work = () => {

  const [valor, setValor] = useState('');

  const handleMouse = (event) => {
    var id = event.target.id
    var indexBuscado = listaItems.findIndex((dato) => dato.id === parseInt(id))
    //console.log(listaItems[indexBuscado].name)
    setValor(listaItems[indexBuscado].images[0])
  }

  return (
    <div className='workContent'>
      <h1>Work</h1>
      <div className='listImage'>
        <div className='list'>
          <ul>
            {
              listaItems.map((item, index) => (
                <Link to={item.route}><li key={index} ><h2 className='a' id='0' onMouseOver={handleMouse}>{item.title}</h2></li></Link>
              ))}
          </ul>
        </div>
        <img className='imagen' src={valor} alt='Projects images' />
      </div>
    </div>
  )
}

export default Work