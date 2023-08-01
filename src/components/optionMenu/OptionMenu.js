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
            <button className='btn'
                onClick={() => {
                    setExpandNavbar((prev) => !prev);
                }}>
                <AiOutlineMenu />
            </button>
            {!expandNavbar &&
                <div className='linksNavigation'>
                    <Link className='buttonLink' to='/'  > Home </Link>
                    <Link className='buttonLink' to='/About'> About </Link>
                    <Link className='buttonLink' to='/contact'> Contact </Link>
                    <Link className='buttonLink' to='/work'> Work </Link>
                </div>
            }
        </div>
    )
}

export default OptionMenu