import React from 'react'
import logo from "../../assets/img/hahaa_png.png"
import "../../assets/css/Header.css"
import { Link } from "react-router-dom"

function Header() {
 
  return (
    <div className='header'>
        <div className='logo'>
            <img src={logo} alt='Logo Not Found' width="90" height="90"/>
            <h1>Hahaaa <span>HUB</span></h1>
        </div>
        
        <div className="nav">
            <Link to="/" >Home</Link>
            <Link to="/jokes" >Jokes</Link>
            <Link to="/favorites" >Favorites</Link>
        </div>
    </div>
  )
}

export default Header