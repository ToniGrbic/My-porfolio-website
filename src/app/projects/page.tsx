import { client } from "../../lib/client";
import Projects from "./projects";

const getProjects = async () => {
  const query = '*[_type == "works"]';
  const projects = await client.fetch(query);
  return projects;
};

export default async function Page() {
  const projects = await getProjects();
  return (
    <>
      <h1>
        <span>My Projects</span>
      </h1>
      <Projects projects={projects} />
    </>
  );
}
