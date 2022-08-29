import React, {useState, useEffect, useRef} from 'react'
import styles from '../styles/Footer.module.scss'
import { SocialLinks } from '../components'

const Footer = ({position}) => {
  const [year, setYear] = useState('')
  const footerDiv = useRef(null)
  useEffect(()=>{
    const currentYear = new Date().getFullYear().toString()
    setYear(currentYear)
  },[])

  useEffect(()=>{
    footerDiv.current.style.top = `${position-130}px`
  },[position])

  return (
    <div className={styles.app__footer} ref={footerDiv}>
      <p>My socials:</p> 
      <div>
        <SocialLinks/>
      </div>
       <p>Gmail: tonigrbic.5@gmail.com</p>
     <p>-- {year} Created by Toni Grbić, all rights reserved --</p>
    </div>
  )
}

export default Footer