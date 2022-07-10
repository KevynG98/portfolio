import React from 'react'
import '../styles/Card.css'

function Card(props) {
    const logoStyle = {color: "black"};
    return (
        <div className='card' style={{background: props.color}}>
            <div className='content'>
                <h1 style={logoStyle}>{props.icono}</h1>
                <h2>{props.content}</h2>
            </div>
        </div>
    )
}

export default Card