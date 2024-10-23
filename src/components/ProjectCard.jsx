import "./ProjectCard.css"

function ProjectCard(props) {
  return (
    <div className="card">
      <a href={props.url} target="_blank" rel="noopener noreferrer" className="project-card">
        <img src={`src/assets/${props.image}`} />
        <div className="overlay">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>
      </a>
    </div>
  )
}

export default ProjectCard
