import React, { useEffect, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import './OptionMenu.css'
import { Link, useLocation } from 'react-router-dom';

const OptionMenu = () => {

    const [expandNavbar, setExpandNavbar] = useState(true);
    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(true);
    }, [location]);

    return (
        <div className='button'>
            <button
                onClick={() => {
                    setExpandNavbar((prev) => !prev);
                }}>
                <AiOutlineMenu />
            </button>
            {!expandNavbar &&
                <div className='links'>
                    <Link to='/'  > Home </Link>
                    <Link to='/About'> About </Link>
                    <Link to='/contact'> Contact </Link>
                    <Link to='/work'> Work </Link>
                </div>
            }
        </div>
    )
}

export default OptionMenu