import ProjectGallery from "./ProjectGallery.jsx"

function Welcome() {
  return (
  <main>
      <section id="about"></section>
      <section id="projects">
        <h2>Projects</h2>
        <ProjectGallery />
      </section>
      <section id="contact"></section>
    </main>
 )
}

export default Welcome
