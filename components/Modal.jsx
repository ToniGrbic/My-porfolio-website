import React from 'react'

const  Modal = ({description, title, tags, setShowModal}) => {
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
            </div>)
            } 
        </div>
    </div>
  )
}

export default Modal