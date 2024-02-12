import React from "react";
import styles from "@/styles/Projects.module.scss";

type FilterProps = {
  filters: [string, string][];
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  activeFilter: string;
};

const Filter = ({ filters, setFilter, activeFilter }: FilterProps) => {
  return (
    <div className={styles.app__filter_parent}>
      {filters.map(([_, filter]) => (
        <button
          key={filter}
          onClick={() => setFilter(filter)}
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
