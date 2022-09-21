import React, {useState} from 'react'
import styles from '../styles/Projects.module.scss'

import {  client } from '../lib/client';
import { Modal, Project } from '../components'

const Projects = ({projects}) => {

  const [showProjectModal, setShowProjectModal] = useState(false)
  const [modalProject, setModalProject] = useState({})
  
  const handleShowModal = (projectId)=>{
    const currentProject = projects.find((project)=> project._id === projectId)

    const { title, description, projectLink, codeLink, tags } = currentProject
    setModalProject({ title, description, projectLink, codeLink, tags })
    setShowProjectModal(true)
  }
  return (
    <>
    <h1><span>My Projects</span></h1>

    <div className={styles.app__project_portfolio}>
         { showProjectModal && (
          <Modal 
              {...modalProject}
              setShowModal={setShowProjectModal}
          /> )} 
    
      {
        projects?.map((project) =>{
          return (<Project 
                      project={project} 
                      handleShowModal={handleShowModal}/>)
        })
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