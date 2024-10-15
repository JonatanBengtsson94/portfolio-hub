function Header() {
  return (
    <header>
      <nav>
        <h1>My Portfolio Hub</h1>
        <ul>
          <li><a href="/">Home</a></li>
          <li>
            Projects
            <ul>
              <a href="/projects/workoutlog">Workout app (web)</a>
              <a href="/projects/workoutlogapp">Workout app (android)</a>
              <a href="/projects/game">Platformer game</a>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
