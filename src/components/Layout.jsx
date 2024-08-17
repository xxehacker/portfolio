import React from 'react'
import Header from './Header'
import Footer from './Footer'
// import { Outlet } from 'react-router-dom'
import App from './App'

function Layout() {
  return (
    <>
    <Header/>
      
      {/* <Outlet /> */}
      <App />

    <Footer />
    </>
  )
}

export default Layout