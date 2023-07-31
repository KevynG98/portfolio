import React from 'react'
import { AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai'
import { LiaTelegramPlane } from 'react-icons/lia'
import { linkInstagram, linkTelegram, linklinkedin } from '../../data/constantWords'
import './SocialMedia.css'

const SocialMedia = () => {
  return (
    <div>
        <a className='contentSocial' href={linkInstagram} target="_blank" rel="noopener noreferrer">
        <AiOutlineInstagram />
        </a>
        <a className='contentSocial' href={linkTelegram} target="_blank" rel="noopener noreferrer">
        <LiaTelegramPlane />
        </a>
        <a className='contentSocial' href={linklinkedin} target="_blank" rel="noopener noreferrer">
        <AiOutlineLinkedin />
        </a>
    </div>
  )
}

export default SocialMedia