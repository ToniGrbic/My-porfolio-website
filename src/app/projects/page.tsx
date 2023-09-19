import { client } from "../../lib/client";
import Projects from "./projects";

const getProjects = async () => {
  const query = '*[_type == "works"]';
  return await client.fetch(query);
  
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
