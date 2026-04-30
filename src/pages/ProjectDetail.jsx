import { useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { getWorkById } from "../data/projects"
import ProjectImage from "../components/ProjectImage"
import FadeIn from "../components/FadeIn"

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = getWorkById(id)
  const [activeScreenshot, setActiveScreenshot] = useState(0)

  if (!project) {
    return (
      <div className="project-detail">
        <p className="section-label">Not found</p>
        <h1 className="project-detail__title">Project not found</h1>
        <Link to="/" className="project-detail__back">← Back home</Link>
      </div>
    )
  }

  const hasScreenshots = project.screenshots && project.screenshots.length > 0

  return (
    <div className="project-detail">

      <FadeIn>
        <button onClick={() => navigate(-1)} className="project-detail__back">
          ← Back
        </button>
      </FadeIn>

      {/* Hero image */}
      <FadeIn delay={0.05}>
        <div className="project-detail__hero">
          <ProjectImage project={project} className="project-detail__hero-img" />
          <div className="project-detail__hero-overlay" />
        </div>
      </FadeIn>

      <div className="project-detail__body">

        <FadeIn delay={0.1}>
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
        </FadeIn>

        {/* Tech Stack */}
        <FadeIn delay={0.15}>
          <div className="project-detail__section">
            <p className="section-label">Tech Stack</p>
            <div className="project-detail__tags">
              {project.tags.map(tag => (
                <span key={tag} className="skill-pill">{tag}</span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Links */}
        {(project.github || project.live) && (
          <FadeIn delay={0.2}>
            <div className="project-detail__section">
              <p className="section-label">Links</p>
              <div className="project-detail__links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-detail__link"
                  >
                    GitHub ↗
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-detail__link"
                  >
                    Live Site ↗
                  </a>
                )}
              </div>
            </div>
          </FadeIn>
        )}

        {/* Screenshots */}
        <FadeIn delay={0.25}>
          <div className="project-detail__section">
            <p className="section-label">Screenshots</p>

            {project.internal ? (
              <div className="project-detail__internal">
                <div className="project-detail__internal-icon">🔒</div>
                <p className="project-detail__internal-title">Internal Application</p>
                <p className="project-detail__internal-sub">
                  Screenshots are not publicly available for this internal enterprise application.
                </p>
              </div>
            ) : hasScreenshots ? (
              <div className="screenshot-gallery">
                {/* Main image */}
                <div className="screenshot-gallery__main">
                  <img
                    src={project.screenshots[activeScreenshot]}
                    alt={`${project.title} screenshot ${activeScreenshot + 1}`}
                    className="screenshot-gallery__main-img"
                  />
                </div>
                {/* Thumbnails — only show if more than 1 */}
                {project.screenshots.length > 1 && (
                  <div className="screenshot-gallery__thumbs">
                    {project.screenshots.map((src, i) => (
                      <button
                        key={i}
                        className={`screenshot-gallery__thumb${i === activeScreenshot ? " screenshot-gallery__thumb--active" : ""}`}
                        onClick={() => setActiveScreenshot(i)}
                      >
                        <img src={src} alt={`Screenshot ${i + 1}`} />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="project-detail__screenshots-placeholder">
                <p>Screenshots coming soon</p>
              </div>
            )}
          </div>
        </FadeIn>

      </div>

    </div>
  )
}