import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"

import Dashboard from "./pages/Dashboard"
import About from "./pages/About"
import Experience from "./pages/Experience"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import ProjectDetail from "./pages/ProjectDetail"

import './styles/main.scss'

export default function App() {
  return (
    <div style={{ background: "var(--bg)", color: "var(--text)" }}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/experience/:id" element={<ProjectDetail />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}