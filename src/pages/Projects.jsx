import { Link } from "react-router-dom"
import { projects } from "../data/projects"
import FadeIn from "../components/FadeIn"
import ProjectImage from "../components/ProjectImage"

export default function Projects() {
  const featured = projects[0]
  const rest = projects.slice(1)

  return (
    <div className="projects">

      <FadeIn>
        <div className="projects__header">
          <p className="section-label">Projects</p>
          <h1 className="projects__title">Personal Work</h1>
          <p className="projects__subtitle">
            Side projects and builds outside of my day job — from full-stack apps to algorithm practice.
          </p>
        </div>
      </FadeIn>

      {/* Featured project */}
      <FadeIn delay={0.1}>
        <Link to={featured.to} className="project-featured">
          <div className="project-featured__img-wrap">
            <ProjectImage project={featured} className="project-featured__img" />
            <div className="project-featured__overlay" />
          </div>
          <div className="project-featured__body">
            <div className="project-featured__meta">
              {featured.status && (
                <span className={`project-status${featured.status === "In Development" || featured.status === "Coming Soon" ? " project-status--active" : ""}`}>
                  {featured.status}
                </span>
              )}
            </div>
            <h2 className="project-featured__title">{featured.title}</h2>
            <p className="project-featured__desc">{featured.description}</p>
            <div className="project-featured__tags">
              {featured.tags.slice(0, 5).map(tag => (
                <span key={tag} className="skill-pill">{tag}</span>
              ))}
            </div>
            <span className="project-featured__cta">View project →</span>
          </div>
        </Link>
      </FadeIn>

      {/* Rest of projects grid */}
      <div className="projects__grid">
        {rest.map((project, i) => (
          <FadeIn key={project.id} delay={i * 0.1}>
            <Link to={project.to} className="project-card">
              <div className="project-card__img-wrap">
                <ProjectImage project={project} className="project-card__img" />
                <div className="project-card__img-overlay" />
              </div>
              <div className="project-card__body">
                <div className="project-card__top">
                  <p className="project-card__title">{project.title}</p>
                  {project.status && (
                    <span className={`project-status${project.status === "Always Updating" ? " project-status--updating" : ""}`}>
                      {project.status}
                    </span>
                  )}
                </div>
                <p className="project-card__desc">{project.description}</p>
                <div className="project-card__tags">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="skill-pill">{tag}</span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="skill-pill">+{project.tags.length - 3}</span>
                  )}
                </div>
                <div className="project-card__links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__link"
                      onClick={e => e.stopPropagation()}
                    >
                      GitHub ↗
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__link"
                      onClick={e => e.stopPropagation()}
                    >
                      Live ↗
                    </a>
                  )}
                </div>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>

    </div>
  )
}