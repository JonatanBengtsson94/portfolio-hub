import ProjectGallery from "./ProjectGallery.jsx"

function Welcome() {
  return (
  <main>
      <section id="about">
        <h2>About</h2>
        <p>
          Hello, I am Jonatan. Welcome to my personal portfolio site! Here you can find my latest projects and resume.
          I am system developer with a strong foundation in Geographic Information Systems (GIS).
          A passionate technology enthusiast with a particular affinity for Linux, I thrive on exploring new tools and methodologies to improve processes. 
          Committed to continuous learning, I seek opportunities to contribute to impactful projects in a collaborative environment.
        </p>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <p>
          A collection of hobby projects and experiements. 
        </p>
        <ProjectGallery />
      </section>
      <section id="contact"></section>
    </main>
 )
}

export default Welcome
