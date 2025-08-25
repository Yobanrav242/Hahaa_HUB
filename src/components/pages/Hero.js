import React, { useContext } from 'react'
import { myContext } from '../../App'
import "../../assets/css/Hero.css"
import { useNavigate } from 'react-router-dom';

function Hero() {
   const navigate =useNavigate();
  let { contextState, setContextState } = useContext(myContext);
  function handleName(e) {
    const value = e.target.value;
    setContextState({ ...contextState, name: value })
  }
  function handleClick(){
    navigate("/jokes")
  }
  return (
    <div className='hero'>
      <div className='container'>
        <h1 className='hero-title'><strong>Welcome to hahaa HUB</strong></h1>
        <p> your daily source of fresh jokes, clever punchlines, and hilarious quips guaranteed to brighten your day. Just scroll, laugh, and share...<h2>humor knows no bounds!</h2></p>
        <div className='name'>
          <input placeholder="Enter Your Name..." value={contextState.name} onChange={handleName} />
        </div>
      
      <div className='jokes'>
         <h1 className='hero-title'>Let's Have Fun...<strong>{contextState.name}</strong></h1>
         <button onClick={handleClick}>Jokes...</button>
      </div>
      </div>
    </div>
  )
}

export default Hero