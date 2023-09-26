 
import { useContext, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../projects-data.json";
import { ThemeContext } from "../context/Theme.context";
 
function ProjectsPage() {
    const {theme} =  useContext(ThemeContext)
  const [projects, setProjects] = useState(projectsData);
 
  return (
    <div className={"ProjectsPage " + theme}>
      <h1>My Projects</h1>
      <div className="projects">
        {projects.map(p => (
          <ProjectCard key={p._id} project={p} />
        ))}
      </div>
    </div>
  );
}
 
export default ProjectsPage;