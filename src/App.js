import '../src/assets/css/App.css';
import Home from './components/pages/Home';
import Jokes from "./components/pages/Jokes"
import Favorites from "./components/pages/Favourites"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { createContext, useState } from 'react';
export const myContext = createContext()

function App() {
  const [ contextState, setContextState ] = useState({
    name:'',
    role:'',
 } );

  return (  
    <>
    <myContext.Provider  value={{contextState, setContextState}}>
    <Router>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/jokes' element={ <Jokes /> } />
        <Route path='/favorites' element={ <Favorites /> } />
      </Routes>
    </Router>
    </myContext.Provider>
    </>
  
  );
}

export default App;
