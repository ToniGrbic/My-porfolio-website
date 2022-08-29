import React, {useState, useEffect, useRef} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'



const Layout = ({children}) => {
  const containerDiv = useRef(null)
  const [containerHeight, setContainerHeight] = useState('')
  
  useEffect(()=>{
     const handleResizeHeight = () =>{
        setContainerHeight(containerDiv.current.scrollHeight)
     }
     handleResizeHeight()
     window.addEventListener('resize', handleResizeHeight)
     window.addEventListener('scroll', handleResizeHeight)
  
     return () => {
       window.removeEventListener('resize', handleResizeHeight)
       window.removeEventListener('scroll', handleResizeHeight)
     }

  },[])
  return (
    <div >
    <header>
      <Navbar/>
    </header >
    <main className="container" 
          ref={containerDiv}>
      {children}
    </main>
      <footer>
        <Footer position={containerHeight}/>
      </footer>
    </div>
  )
}

export default Layout