import React from 'react'
import Header from '../layouts/Header'
import Footer from "../layouts/Footer"
import Jokeapi from './Jokeapi'
import "../../assets/css/Jokes.css"

function Jokes() {
  return (
    <div className='jokes'>
      <Header />
      <Jokeapi />
      <Footer />
    </div>
  )
}

export default Jokes