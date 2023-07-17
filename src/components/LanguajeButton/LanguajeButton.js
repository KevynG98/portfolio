import React, { useState } from 'react'
import './LanguajeButton.css'

const LanguajeButton = () => {
    const [languaje, setLanguaje] = useState('ES')

    return (
        <button className='boton' onClick={() => setLanguaje(languaje === 'ES' ? 'EN' : 'ES')}> {/* Recuerda siempre una arroy function en el onclick, ademas de ver que el estado sea global, por ahora solo es visual.*/}
            <h3>
                {languaje}
            </h3>
        </button>
    )
}

export default LanguajeButton