import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { SocialLinks } from './'

const Navbar = () => {
  const links = ['', 'projects', 'skills']
  const [currentLink, setCurrentLink] = useState('')
  const [toggle, setToggle] = useState(false)

  const handleNavbarClick = (link)=>{
    setCurrentLink(link)
  }
  const handleMenuClick = (link) =>{
    setCurrentLink(link)
    setToggle(false)
  }

  return ( 
    <nav className={styles.app__navbar}>
        <div>
            <h3>portfolio</h3>
        </div>
        <div>
            <ul className={styles.app__navbar_links}>

                {links?.map((link)=>{
                  return (
                    <li key={`link-${link}`}>
                        <Link href={`/${link}`}>
                            <a className={
                             `${styles.app__navbar_link}
                              ${currentLink === link ? 
                                styles.app__navbar_link_color : ''}`} 
                                onClick={()=>handleNavbarClick(link)} 
                              >
                                {link === '' ? 'home' : link} 
                              <div 
                                 className={currentLink === link ? 
                                `${styles.app__navbar_link_underline}` : ''}>
                              </div>
                            </a>
                        </Link>  
                    </li>
                  )
                })}
            </ul>
        </div>

        <div className={styles.app__navbar_social_media}>
          <SocialLinks/>
        </div>
        


        <div className={styles.app__navbar_menu}>
          <HiMenuAlt4 onClick={()=>setToggle(true)}/>
          {
            toggle && (
              <div>
                
                <HiX onClick={()=> setToggle(false)}/>
               
                <ul> 
                  <h3>portfolio</h3>
                {links.map((link)=>{
                return (
                  <li key={link} >
                     <Link href={`/${link}`} 
                           key={`link-${link}`}>
                            <a onClick={()=> handleMenuClick(link)}
                               className={currentLink === link ? 
                               styles.app__navbar_menulink_color : ''}
                            >
                            {link === '' ? 'home' : link} 
                          </a>
                      </Link>
                  </li>) 
                })}
                </ul>
              </div>
            )
          }
        </div>
    </nav> 
  )
}

export default Navbar