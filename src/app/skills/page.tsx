import React from "react";
import Skills from "./skills";
import { client } from "../../lib/client";

async function getSkills() {
  const query = '*[_type == "skills"]';
  return await client.fetch(query);
}

export default async function Page() {
  const skills = await getSkills();

  return (
    <>
      <h1 className="projectsSkills">My Skills</h1>
      <h4 style={{ marginTop: "20px" }}>
        click on each skill to view description
      </h4>
      <Skills skills={skills} />
    </>
  );
}
