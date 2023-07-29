import React from 'react'
import './Contact.css'
import SendEmail from '../../components/SendEmail/SendEmail'
import SocialMedia from '../../components/SocialMedia/SocialMedia'

const Contact = () => {
  return (
    <div>
        <SendEmail />
        <SocialMedia />
    </div>
  )
}

export default Contact