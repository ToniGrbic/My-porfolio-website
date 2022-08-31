import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {

  return (
    <div className="wrapper">
    <div className="layoutDiv">
    <header>
      <Navbar/>
    </header >
    <main className="container">
      {children}
    </main>
    </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Layout