import { useState } from 'react'
import './App.css'
import Navbar from './components/hero/navbar/navbar'
import Abtf from './components/hero/aboveTheFold/abtf'
import Services from './components/services/Services'
import Footr from './components/footer/Footr'
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
