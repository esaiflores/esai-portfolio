import { useParams, Link, useNavigate } from "react-router-dom"
import { getWorkById } from "../data/projects"

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = getWorkById(id)

  if (!project) {
    return (
      <div className="project-detail">
        <p className="section-label">Not found</p>
        <h1 className="project-detail__title">Project not found</h1>
        <Link to="/" className="project-detail__back">← Back home</Link>
      </div>
    )
  }

  return (
    <div className="project-detail">

      <button onClick={() => navigate(-1)} className="project-detail__back">
        ← Back
      </button>

      {/* Hero image */}
      <div className="project-detail__hero">
        <img
          src={project.image || project.placeholder}
          alt={project.title}
          className="project-detail__hero-img"
        />
        <div className="project-detail__hero-overlay" />
      </div>

      <div className="project-detail__body">

        <div className="project-detail__meta">
          <p className="section-label">{project.company}</p>
          {project.status && (
            <span className="project-detail__status">{project.status}</span>
          )}
        </div>

        <h1 className="project-detail__title">{project.title}</h1>

        {project.dates && (
          <p className="project-detail__dates">{project.dates} · {project.location}</p>
        )}

        <p className="project-detail__desc">{project.description}</p>

        {/* Tech Stack */}
        <div className="project-detail__section">
          <p className="section-label">Tech Stack</p>
          <div className="project-detail__tags">
            {project.tags.map(tag => (
              <span key={tag} className="skill-pill">{tag}</span>
            ))}
          </div>
        </div>

        {/* Placeholder for screenshots — to be added later */}
        <div className="project-detail__section">
          <p className="section-label">Screenshots</p>
          <div className="project-detail__screenshots-placeholder">
            <p>Screenshots coming soon</p>
          </div>
        </div>

      </div>

    </div>
  )
}