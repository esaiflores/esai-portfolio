import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

const links = [
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="navbar__logo" onClick={() => setMenuOpen(false)}>
        <span className="navbar__logo-mark">EF</span>
        <span className="navbar__logo-name">Esai Flores</span>
      </Link>

      {/* Desktop links */}
      <div className="navbar__links">
        {links.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className={`navbar__link${pathname === to ? " navbar__link--active" : ""}`}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        className={`navbar__hamburger${menuOpen ? " navbar__hamburger--open" : ""}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="navbar__drawer">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`navbar__drawer-link${pathname === to ? " navbar__drawer-link--active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}