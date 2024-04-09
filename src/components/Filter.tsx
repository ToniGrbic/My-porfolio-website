"use client";
import React, { useState, useEffect } from "react";
import styles from "@/styles/Projects.module.scss";
import { Works } from "@/types/schema-types";
export const filterOptions = {
  All: "All",
  React: "ReactJS",
  NextJS: "NextJS",
  JavaScript: "JavaScript",
  TypeScript: "TypeScript",
};

type FilterProps = {
  projects: Works[];
  setFilteredProjects: React.Dispatch<React.SetStateAction<Works[]>>;
};

const Filter = ({ projects, setFilteredProjects }: FilterProps) => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  useEffect(() => {
    const filtered = projects.filter(
      (project) => project.tags.includes(activeFilter) || activeFilter === "All"
    );
    setFilteredProjects(filtered);
  }, [activeFilter]);

  const filters = Object.entries(filterOptions);
  return (
    <div className={styles.app__filter_parent}>
      {filters.map(([_, filter]) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`${styles.app__filter_btn} 
            ${activeFilter === filter ? styles.app__filter_btn_active : ""}`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Filter;
