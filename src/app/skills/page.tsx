import React from "react";
import Skills from "./skills";
import { client } from "../../lib/client";

async function getSkills() {
  const query = '*[_type == "skills"]';
  const skills = await client.fetch(query);
  return skills;
}

const Page = async () => {
  const skills = await getSkills();
  return (
    <>
      <h1>
        <span>My Skills</span>
      </h1>
      <h4 style={{ marginTop: "20px" }}>
        click on each skill to view description
      </h4>
      <Skills skills={skills} />
    </>
  );
};

export default Page;
