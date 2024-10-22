function ProjectCard(props) {
  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer" className="project-card">
      <img src={`src/assets/${props.image}`} />
      <div className="overlay">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </a>
  )
}

export default ProjectCard
