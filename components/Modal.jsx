import React from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

const  Modal = ({description, title, tags, setShowModal, modalLinks}) => {
  return (
    <div className='modal'>
        <div className='modal-content'>
             <span 
                className='close' 
                onClick={()=>setShowModal(false)}>
                &times;
            </span>
            <h2>{title}</h2>
            <h3>Description: </h3>
            <p>{description}</p>
            {
             tags && (
             <div>
                <h3>Tech and tools used:</h3>
                <ul>
                  {tags.map((tag,index)=>{
                    return (
                      <li key={index}>{tag} </li>
                    )
                 })}
                </ul>
                {modalLinks && <div className="modalLinks">
                  <h3>Links:</h3>
                  {modalLinks.projectLink && 
                  <p><AiFillEye/><a href={modalLinks.projectLink}>  Website </a></p>
                  }
                  <p><AiFillGithub/><a href={modalLinks.codeLink}>  GitHub</a></p>
                </div>
                } 
            </div>)
            } 
        </div>
    </div>
  )
}

export default Modal