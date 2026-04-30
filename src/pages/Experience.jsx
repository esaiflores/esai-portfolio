import { Link } from "react-router-dom"
import { experienceByCompany } from "../data/projects"
import FadeIn from "../components/FadeIn"

export default function Experience() {
  return (
    <div className="experience">

      <FadeIn>
        <div className="experience__header">
          <p className="section-label">Experience</p>
          <h1 className="experience__title">Professional Work</h1>
          <p className="experience__subtitle">
            Projects and applications I've built across my career.
          </p>
        </div>
      </FadeIn>

      <div className="experience__companies">
        {Object.values(experienceByCompany).map((group, groupIndex) => (
          <div key={group.company} className="company-group">

            <FadeIn delay={0.05}>
              <div className="company-group__header">
                <div className="company-group__info">
                  <h2 className="company-group__name">{group.company}</h2>
                  <p className="company-group__meta">
                    {group.role} · {group.location} · {group.dates}
                  </p>
                </div>
              </div>
            </FadeIn>

            <div className="company-group__grid">
              {group.projects.map((project, i) => (
                <FadeIn key={project.id} delay={i * 0.1}>
                  <Link to={project.to} className="project-card">
                    <div className="project-card__img-wrap">
                      <img
                        src={project.image || project.placeholder}
                        alt={project.title}
                        className="project-card__img"
                      />
                      <div className="project-card__img-overlay" />
                    </div>
                    <div className="project-card__body">
                      <p className="project-card__title">{project.title}</p>
                      <p className="project-card__desc">{project.description}</p>
                      <div className="project-card__tags">
                        {project.tags.slice(0, 4).map(tag => (
                          <span key={tag} className="skill-pill">{tag}</span>
                        ))}
                        {project.tags.length > 4 && (
                          <span className="skill-pill">+{project.tags.length - 4}</span>
                        )}
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}