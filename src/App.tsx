import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import WhatAreFossilFuels from './pages/WhatAreFossilFuels'
import ConcernsAndEffects from './pages/ConcernsAndEffects'
import HowToHelp from './pages/HowToHelp'
import References from './pages/References'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />
      case 'whatAre':
        return <WhatAreFossilFuels />
      case 'concerns':
        return <ConcernsAndEffects />
      case 'help':
        return <HowToHelp />
      case 'references':
        return <References />
      default:
        return <Home />
    }
  }

  return (
    <div className="app">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <footer className="footer">
        <p>&copy; 2025 Fossil Fuels in Wisconsin. Informing the public to drive change.</p>
      </footer>
    </div>
  )
}

export default App
