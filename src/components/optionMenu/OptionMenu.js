import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const OptionMenu = () => {
    const estilo = {
        margin: '15px',
        height: '35px',
        width: '35px',
    }

    return (
        <div >
            <button style={estilo}>
                <AiOutlineMenu />
            </button>
        </div>
    )
}

export default OptionMenu