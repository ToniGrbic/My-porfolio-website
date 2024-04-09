"use client";
import React, { useState } from "react";
import styles from "@/styles/Projects.module.scss";
import Filter from "@/components/Filter";
import { Modal, Project } from "@/components";
import type { Works } from "@/types/schema-types";
import type { ModalObject } from "@/types/objects";

const Projects = ({ projects }: { projects: Works[] }) => {
  const [projectModal, setProjectModal] = useState<ModalObject>();
  const [showProjectModal, setShowProjectModal] = useState<boolean>(false);
  const [filteredProjects, setFilteredProjects] = useState<Works[]>([]);

  const handleShowModal = (projectId: string) => {
    const currentProject = projects.find(
      (project) => project._id === projectId
    ) as Works;
    const { title, description, projectLink, codeLink, tags } = currentProject;

    setProjectModal({ title, description, projectLink, codeLink, tags });
    setShowProjectModal(true);
  };

  return (
    <div className={styles.app__project_portfolio}>
      {showProjectModal && (
        <Modal {...projectModal} setShowModal={setShowProjectModal} />
      )}
      <Filter projects={projects} setFilteredProjects={setFilteredProjects} />
      <div className={styles.app__projects}>
        {filteredProjects.map((project) => {
          return (
            <Project
              key={project._id}
              project={project}
              handleShowModal={handleShowModal}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
