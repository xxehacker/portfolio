import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div style={{fontSize:'2rem',display:'flex' , justifyContent:'center',alignItems:'center',width:'100%',height:'100vh',gap:'1rem'}}>Opps!
       <Link to={'/'}>Go back to home </Link>
    </div>
  )
}

export default ErrorPage