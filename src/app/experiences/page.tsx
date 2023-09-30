import React from "react";
import styles from "../../styles/Experiences.module.scss";
import Image from "next/image";
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
    timePeriod: "2023 Oct - Present",
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
            className={`${index % 2 == 0 ? styles.left : styles.right}
               ${styles.container} `}
          >
            <div className={styles.content}>
              <h2>{experience.timePeriod}</h2>
              <p>
                {experience.title} at {experience.department}
              </p>
              <Image
                style={{ marginTop: "15px", borderRadius: "50%" }}
                width={100}
                height={100}
                alt="placeholder"
                src="data:image/jpeg;base64,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"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
