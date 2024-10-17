import GitHubIcon from "../assets/github_white.svg"
import LinkedInIcon from "../assets/linkedin_white.svg"

function Header() {
  return (
    <footer>
      <p>© 2024 Jonatan Bengtsson</p>
      <div className="icons">
        <a href="https://github.com/JonatanBengtsson94" target="_blank" rel="noopener noreferrer">
          <img src={GitHubIcon} />
        </a>
        <a href="https://www.linkedin.com/in/jonatan-bengtsson-633b13162" target="_blank" rel="noopener noreferrer">
          <img src={LinkedInIcon} />
        </a>
      </div>
    </footer>
  )
}

export default Header
