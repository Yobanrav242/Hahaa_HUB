import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import "../../assets/css/Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <p className='copyrights'>© 2025 Hahaa Hub. All Rights Reserved.</p>
        <div className='icon'>
            <a href='https://instagram.com/hahaahub'> <FaInstagram size={28} className='icon-'/></a>
            <a href='https://facebook.com/hahaahub'> <FaFacebook size={28} className='icon-'/></a>
            <a href='https://twitter.com/hahaahub'> <FaTwitter size={28} className='icon-'/></a>
        </div>
        
    </div>
  )
}

export default Footer