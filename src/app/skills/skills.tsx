"use client";
import React, { useState } from "react";
import styles from "../../styles/Skills.module.scss";
import { client } from "../../lib/client";
import { Modal } from "../../components";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";

const Skills = ({ skills }) => {
  const [showSkillModal, setShowSkillModal] = useState(false);
  const [modalDesc, setModalDesc] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const nextSanityImage = useNextSanityImage;

  const handleShowSkillModal = (skill_id) => {
    const currentSkill = skills.find((skill) => skill._id === skill_id);
    setModalDesc(currentSkill.description);
    setModalTitle(currentSkill.name);
    setShowSkillModal(true);
  };

  return (
    <>
      {showSkillModal && (
        <Modal
          title={modalTitle}
          description={modalDesc}
          setShowModal={setShowSkillModal}
        />
      )}
      <div className={styles.app__skills_container}>
        <div className={styles.app__skills_list}>
          {skills?.map((skill) => {
            const imageProps: any = nextSanityImage(client, skill.icon);
            return (
              <div
                className={`${styles.app__skills_item} app__flex`}
                key={skill._id}
                onClick={() => handleShowSkillModal(skill._id)}
              >
                <div className="app__flex">
                  <Image
                    {...imageProps}
                    width={50}
                    height={50}
                    alt={skill.name}
                  />
                  <p>{skill.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skills;
