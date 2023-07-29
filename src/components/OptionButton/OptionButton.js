import React from 'react'
import './OptionButton.css'
import { Link } from 'react-router-dom'

const OptionButton = (props) => {
    const seccion = props.page;
    const nombre = props.name;

    return (
        <div className='optionButtonContainer'>
            <Link className='link' to={`/${seccion}`}>{nombre}</Link>
        </div>
    )
}

export default OptionButton