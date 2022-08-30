import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai'
const SocialLinks = () => {
  return (
    <>
          <a href='https://github.com/ToniGrbic'> 
            <AiFillGithub size={30}/>
          </a>
          <a href='https://www.linkedin.com/in/toni-grbi%C4%87-6aa509249/'>
            <AiFillLinkedin size={30}/> 
          </a>
          <a href='https://www.instagram.com/toni.grbic/'>
            <AiOutlineInstagram size={30}/>
          </a>
    </>
  )
}

export default SocialLinks