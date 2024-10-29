import About from "./About.jsx"
import ProjectGallery from "./ProjectGallery.jsx"

function Welcome() {
  return (
  <main>
      <section id="about">
        <h2>About</h2>
        <About />
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <ProjectGallery />
      </section>
      <section id="contact"></section>
    </main>
 )
}

export default Welcome
