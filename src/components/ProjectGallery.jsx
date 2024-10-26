import projectsData from "../assets/projects.json"
import ProjectCard from "./ProjectCard.jsx"
import "./ProjectGallery.css"

function ProjectGallery() {
  return (
    <div className="gallery">
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
