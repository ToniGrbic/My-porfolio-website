import React, { useState } from 'react'
import { urlFor, client } from '../lib/client'
import styles from '../styles/Skills.module.scss'
import { Modal} from '../components'

const Skills = ({skills}) => {

  const [showSkillModal, setShowSkillModal] = useState(false)
  const [modalDesc, setModalDesc]= useState('')
  const [modalTitle, setModalTitle] = useState('')

  const handleShowSkillModal = (skillId)=>{
    const currentSkill = skills.find((skill)=>skill._id === skillId)
    setModalDesc(currentSkill.description)
    setModalTitle(currentSkill.name)
    setShowSkillModal(true)
  }

  return (
    <>
      <h1><span>My Skills</span></h1>
      { showSkillModal && 
        <Modal title={modalTitle}
               description={modalDesc}
               setShowModal={setShowSkillModal}
        />}
      <div className={styles.app__skills_container}>
        <div className={styles.app__skills_list}>
        { skills?.map((skill)=>{
          return (
            <div className={`${styles.app__skills_item} app__flex`}
                 key={skill._id}
                 onClick={()=>handleShowSkillModal(skill._id)}>
                  <div className='app__flex'>
                      <img src={urlFor(skill.icon)} alt={skill.name}/>
                      <p>{skill.name}</p>
                  </div>
            </div>
          )
        })}
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = async()=>{
  const query = '*[_type == "skills"]'
  const skills = await client.fetch(query)
  return {
    props: { skills }
  }
}

export default Skills