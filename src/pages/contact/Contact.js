import React from 'react'
import './Contact.css'
import SendEmail from '../../components/SendEmail/SendEmail'
import SocialMedia from '../../components/SocialMedia/SocialMedia'

const Contact = () => {
  return (
    <div className='contentContact'>
        <div className='elements'>
        <SendEmail />
        <SocialMedia />
        </div>
    </div>
  )
}

export default Contact