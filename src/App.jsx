import { useState } from 'react'
import './App.css'
import Navbar from './components/hero/navbar/Navbar.jsx'
import Abtf from './components/hero/aboveTheFold/Abtf.jsx'

import Footr from './components/footer/Footr.jsx'
function App() {


  return (
    <main className='main'>
      <Navbar/>
      <Abtf/>
      <Footr/>
     
    </main>
     
     

    
  )
}

export default App
