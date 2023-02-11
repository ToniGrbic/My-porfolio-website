import React, { useState } from 'react'
import { client } from '../lib/client'
import styles from '../styles/Skills.module.scss'
import { Modal} from '../components'
import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'
const Skills = ({skills}) => {
  
  const [showSkillModal, setShowSkillModal] = useState(false)
  const [modalDesc, setModalDesc]= useState('')
  const [modalTitle, setModalTitle] = useState('')
  const nextSanityImage = useNextSanityImage;
  const handleShowSkillModal = (skill_id)=>{
    const currentSkill = skills.find((skill)=>skill._id === skill_id)
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
          const imageProps = nextSanityImage(
            client,
            skill.icon
          )
          return (
            <div className={`${styles.app__skills_item} app__flex`}
                 key={skill._id}
                 onClick={()=>handleShowSkillModal(skill._id)}>
                  <div className='app__flex'>
                      <Image {...imageProps}
                             width={50}
                             height={50}
                             alt={skill.name}/>
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