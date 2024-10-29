import experiencesData from "../assets/experiences.json"
import Experience from "./Experience.jsx"

function About() {
  return (
    <>
      <h3>Introduction</h3>
      <p>
        Hello, I am Jonatan. Welcome to my personal portfolio site! Here you can find my latest projects and resume.
        I am system developer with a strong foundation in Geographic Information Systems (GIS).
        A passionate technology enthusiast with a particular affinity for Linux, I thrive on exploring new tools and methodologies to improve processes. 
        Committed to continuous learning, I seek opportunities to contribute to impactful projects in a collaborative environment.
      </p>
      <h3>Employment</h3>
      {experiencesData
        .filter(experience => experience.type == "employment")
        .map(experience => (
          <Experience 
            key={experience.id}
            title={experience.title}
            orginization={experience.orginization}
            date={experience.date}
            description={experience.description}
        />
      ))}
      <h3>Education</h3>
      {experiencesData
        .filter(experience => experience.type == "education")
        .map(experience => (
          <Experience 
            key={experience.id}
            title={experience.title}
            orginization={experience.orginization}
            date={experience.date}
            description={experience.description}
        />
      ))}
    </>
  )
}

export default About
