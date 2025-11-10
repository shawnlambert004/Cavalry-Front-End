import React, { useContext } from 'react'
import './Navbar.css' 
import logo from "../../assets/horseLogo.png"


const Navbar = () => {
  return (
    <div className='NavigationBar'>
        <img src={logo} alt="" width={115} height={115}/>
        <ul>
            <li>Home</li>
            <li>Portfolio</li>
            <li>Pricing</li>        
        </ul>
        <div className="nav-right">
            <button>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar