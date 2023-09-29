import React from "react";
import styles from "../../styles/Experiences.module.scss";

const experiences = [
  {
    timePeriod: "2016 Sept - 2020 July",
    title: "Computer Science",
    department: "ETŠ Split",
  },
  {
    timePeriod: "2020 Oct - 2023 Sept",
    title: "Bachelors degree in Computer Science",
    department: "FESB Split",
  },
  {
    timePeriod: "2022 Sept - 2022 Nov",
    title: "Frontend development intern",
    department: "Factory.hr",
  },
  {
    timePeriod: "2023 June - 2023 Sept",
    title: "Software developer",
    department: "Unispot.app - Virtualni svijet",
  },
  {
    timePeriod: "20203 Oct - Present",
    title: "Masters degree in Computer Science",
    department: "FESB Split",
  },
];
const Page = () => {
  return (
    <div className={styles.timeline}>
      {experiences.map((experience, index) => {
        return (
          <div
            className={
              `${index % 2 == 0 ? styles.left : styles.right}
               ${styles.container} `}
          >
            <div className={styles.content}>
              <h2>{experience.timePeriod}</h2>
              <p>
                {experience.title} at {experience.department}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
