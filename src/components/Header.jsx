import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.scss'
import { IoMenu } from 'react-icons/io5'
import { GiCrossMark } from 'react-icons/gi'


function Header() {

  const [click , setClick] = useState(false)

  const toggleMenu = () =>{
      

    setClick(!click)


  }

  return (
   <nav className='nav'>

      <h1>XxehackeR</h1>
      <main className={`navlinks ${click ? 'active' : ''}`}>

          <Link to={"/"} onClick={toggleMenu}>Home</Link>
          <Link to={"/about"} onClick={toggleMenu}>About</Link>
          <Link to={"/github"} onClick={toggleMenu}>Github</Link>
          <Link to={"/projects"} onClick={toggleMenu}>Projects</Link>
          

      </main>
      <div className='toggle-div'>

          <button onClick={toggleMenu}>{click ? <GiCrossMark />   : <IoMenu />}</button>

      </div>

   </nav>
  )
}

export default Header