"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/Skills.module.scss";
import { client } from "@/lib/client";
import { Modal } from "@/components";
import { useNextSanityImage } from "next-sanity-image";

import type { Skills } from "@/types/schema-types";
import type { ModalObject } from "@/types/objects";
import type { NextSanityImage } from "@/types/return-types";

const SkillSection = ({ skills }: { skills: Skills[] }) => {
  const [skillModal, setSkillModal] = useState<ModalObject>();
  const [showSkillModal, setShowSkillModal] = useState<boolean>(false);
  const nextSanityImage = useNextSanityImage;

  const handleShowSkillModal = (skill_id: string) => {
    const currentSkill = skills.find((skill) => skill._id === skill_id)!;
    const { name: title, description } = currentSkill;

    setSkillModal({ title, description });
    setShowSkillModal(true);
  };

  return (
    <>
      {showSkillModal && (
        <Modal {...skillModal} setShowModal={setShowSkillModal} />
      )}
      <div className={styles.app__skills_container}>
        <div className={styles.app__skills_list}>
          {skills?.map((skill) => {
            const imageProps: NextSanityImage = nextSanityImage(
              client,
              skill.icon
            );
            return (
              <div
                className={`${styles.app__skills_item} app__flex`}
                key={skill._id}
                onClick={() => handleShowSkillModal(skill._id)}
              >
                <div className="app__flex">
                  <Image
                    {...imageProps!}
                    width={50}
                    height={50}
                    alt={skill.name}
                    priority
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

export default SkillSection;
