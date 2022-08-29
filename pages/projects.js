import React, {useState} from 'react'
import styles from '../styles/Projects.module.scss'
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { urlFor, client } from '../lib/client';
import { Modal } from '../components'

const Projects = ({projects}) => {

  const [showProjectModal, setShowProjectModal] = useState(false)
  const [modalDesc, setModalDesc]= useState('')
  const [modalTitle, setModalTitle] = useState('')
  const [modalTags, setModalTags] = useState([])
  
  const handleShowModal = (projectId)=>{
    const currentProject = projects.find((project)=>project._id === projectId)
    setModalDesc(currentProject.description)
    setModalTitle(currentProject.title)
    setModalTags(currentProject.tags)
    setShowProjectModal(true)
  }
  return (
    <>
    <h1 className="head-text"><span>My Projects</span></h1>

    <div className={styles.app__work_portfolio}>
       
         { showProjectModal && (
          <Modal 
              description={modalDesc}
              title={modalTitle}
              tags={modalTags}
              setShowModal={setShowProjectModal}
          /> )} 
    
      {
        projects?.map((project) =>{
          return (
         
          <div className={styles.app__work_item} key={project._id}>
            
            <div className={`${styles.app__work_img} app__flex`}>
              <img src ={urlFor(project.imgUrl)} 
                   alt={project.name}/>
              <div className={`${styles.app__work_hover} app__flex`}>
                <a href={project.projectLink} target="_blank" rel="noreferrer">
                  <div className='app__flex'>
                    <AiFillEye />
                  </div>
                </a>
                <a href={project.codeLink} target="_blank" rel="noreferrer">
                  <div className='app__flex'>
                    <AiFillGithub/>
                  </div>
                </a>
              </div>
            </div>
            <div className={`${styles.app__work_content} app__flex`}>
              <h4 className="bold-text">{project.title}</h4>
              <p className="p-text" 
                 style={{ marginTop: 10 }}>
                  <button 
                    className='openModalBtn' 
                    onClick={()=>handleShowModal(project._id)}>
                    Description
                  </button>
              </p>
              <div className={`${styles.app__work_tag} app__flex`}>
                <p className="p-text">{project.tags[0]}</p>
              </div>
            </div>
          </div>
        )})
      }
    </div>
    </>)
}

export const getServerSideProps = async()=>{
  const query = '*[_type == "works"]'
  const projects = await client.fetch(query)
  return {
    props: { projects }
  }
}

export default Projects