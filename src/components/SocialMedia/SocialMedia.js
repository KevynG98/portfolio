import React from 'react'
import { AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai'
import { LiaTelegramPlane } from 'react-icons/lia'
import { linkInstagram, linkTelegram, linklinkedin } from '../../data/constantWords'

const SocialMedia = () => {
  return (
    <div>
        <a href={linkInstagram} target="_blank" rel="noopener noreferrer">
        <AiOutlineInstagram />
        </a>
        <a href={linkTelegram} target="_blank" rel="noopener noreferrer">
        <LiaTelegramPlane />
        </a>
        <a href={linklinkedin} target="_blank" rel="noopener noreferrer">
        <AiOutlineLinkedin />
        </a>
    </div>
  )
}

export default SocialMedia