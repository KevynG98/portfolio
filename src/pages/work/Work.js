import React, { useState } from 'react'
//  import { Link } from 'react-router-dom'
import './Work.css'
import { workListES } from '../../data/constantWords.js'

const listaItems = workListES

const Work = () => {

  const [valor, setValor] = useState('');

  const handleMouse = (event) => {
    var id = event.target.innerText
    var indexBuscado = listaItems.findIndex((dato) => dato.id === parseInt(id))
    //console.log(listaItems[indexBuscado].name)
    setValor(listaItems[indexBuscado].mainImage)
  }
  
  return (
    <div>
      <h1>work</h1>
      <ul>
        {
          listaItems.map((item, index) => (
            <li key={index} ><h2 className='a' onMouseOver={handleMouse}>{item.id}</h2></li>
          ))}
      </ul>
      <img src={valor} alt='hola' />
    </div>
  )
}

export default Work