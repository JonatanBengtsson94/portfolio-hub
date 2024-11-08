import "./ProjectCard.css"

function ProjectCard(props) {
  const imageUrl = new URL(`../assets/${props.image}`, import.meta.url).href;

  return (
    <div className="card">
      <a href={props.url} target="_blank" rel="noopener noreferrer" className="project-card">
        <img src={imageUrl} />
        <div className="overlay">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>
      </a>
    </div>
  )
}

export default ProjectCard
