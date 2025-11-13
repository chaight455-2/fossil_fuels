import '../styles/Navigation.css'

interface NavigationProps {
  currentPage: string
  setCurrentPage: (page: string) => void
}

function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="nav-logo">Fossil Fuels in Wisconsin</h1>
        <ul className="nav-menu">
          <li className="nav-item">
            <button
              className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
              onClick={() => setCurrentPage('home')}
            >
              Home
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${currentPage === 'whatAre' ? 'active' : ''}`}
              onClick={() => setCurrentPage('whatAre')}
            >
              What Are Fossil Fuels?
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${currentPage === 'concerns' ? 'active' : ''}`}
              onClick={() => setCurrentPage('concerns')}
            >
              Concerns & Effects
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${currentPage === 'help' ? 'active' : ''}`}
              onClick={() => setCurrentPage('help')}
            >
              How to Help
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${currentPage === 'references' ? 'active' : ''}`}
              onClick={() => setCurrentPage('references')}
            >
              References
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
