import React from 'react'
import {Link} from 'react-router-dom'
import   '../styles/LandingPage.css'

export default function LandingPage() {
  return (

    <div>
      <header className='header'>
        <button href='https://www.linkedin.com/in/alen-machado/' >About us</button>
      </header>

    <div className='container'>
      

       <div className='title'>
        <h1 >Welcome to Wonderlands!</h1>
    </div>

       <div className='buttonBox'>
        <Link to='/home'>
                <button className='button'>Let started</button>
            </Link>
      </div>
      
            
    </div>
    </div>
    
   
  )
}