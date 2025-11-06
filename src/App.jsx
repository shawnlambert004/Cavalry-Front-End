import React from 'react'
import Navbar from './components/Navigation/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Pricing from './pages/Pricing/Pricing'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Pricing/:PricingId' element={<Pricing/>}/>
      </Routes>
    </div>
  )
}

export default App