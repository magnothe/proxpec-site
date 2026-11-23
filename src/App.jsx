import { NavLink, Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Equipe from './pages/Equipe.jsx'

function Logo() {
  return (
    <span className="logo">
      <span className="logo-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 2 11 13" />
          <path d="M22 2 15 22l-4-9-9-4 20-7z" />
        </svg>
      </span>
      Proxpec
    </span>
  )
}

export default function App() {
  return (
    <div className="app">
      <header className="topbar">
        <div className="container topbar-inner">
          <NavLink to="/" className="brand"><Logo /></NavLink>
          <nav className="nav">
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              O sistema
            </NavLink>
            <NavLink to="/equipe" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Nossa equipe
            </NavLink>
          </nav>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="container">
          Desenvolvimento de Plataformas Web · CCT/UNIFOR · Fortaleza, novembro de 2026
        </div>
      </footer>
    </div>
  )
}
