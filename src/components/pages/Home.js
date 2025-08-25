import React from 'react'
import Header from '../layouts/Header'
import Footer from "../layouts/Footer"
import Hero from '../pages/Hero'

function Home() {
  return (
    <div >
      <Header />
      {/* Username Creation */}
      <Hero />
      <Footer />
    </div>
  )
}

export default Home