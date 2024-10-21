import projectsData from "../assets/projects.json"
import ProjectCard from "./ProjectCard.jsx"

function ProjectGallery() {
  return (
    <div>
      {projectsData.map(project => (
        <ProjectCard 
          key={project.id}
          title={project.title}
          description={project.description}
          url={project.url}
          image={project.image}
        />
      ))}
    </div>
  )
}

export default ProjectGallery
