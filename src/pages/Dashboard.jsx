import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { experience, projects } from "../data/projects"
import FadeIn from "../components/FadeIn"
import ProjectImage from "../components/ProjectImage"

export default function Dashboard() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setActiveIndex(i => (i + 1) % experience.length)
        setFading(false)
      }, 400)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const goTo = (index) => {
    if (index === activeIndex) return
    setFading(true)
    setTimeout(() => {
      setActiveIndex(index)
      setFading(false)
    }, 400)
  }

  const active = experience[activeIndex]

  return (
    <div className="dashboard">

      {/* Featured Hero */}
      <section className="featured">
        <div className={`featured__bg${fading ? " featured__bg--fading" : ""}`}>
          <ProjectImage project={active} className="featured__img" />
          <div className="featured__overlay" />
        </div>

        <div className="featured__glow" />

        <div className="featured__content">
          <motion.p
            className="featured__eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Featured work
          </motion.p>

          <motion.h1
            className={`featured__title${fading ? " featured__title--fading" : ""}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {active.title}
          </motion.h1>

          <motion.p
            className={`featured__company${fading ? " featured__company--fading" : ""}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {active.company}
          </motion.p>

          <motion.p
            className={`featured__desc${fading ? " featured__desc--fading" : ""}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            {active.description}
          </motion.p>

          <motion.div
            className="featured__tags"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {active.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link to={active.to} className="featured__cta">View project →</Link>
          </motion.div>
        </div>

        <div className="featured__dots">
          {experience.map((_, i) => (
            <button
              key={i}
              className={`featured__dot${i === activeIndex ? " featured__dot--active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`View ${experience[i].title}`}
            />
          ))}
        </div>
      </section>

      {/* Professional Experience */}
      <section className="work-section">
        <FadeIn>
          <p className="section-label">Professional experience</p>
        </FadeIn>
        <div className="card-row">
          {experience.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.08} direction="up">
              <Link to={item.to} className="thumb-card">
                <ProjectImage project={item} className="thumb-card__img" />
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Personal Projects */}
      {projects.length > 0 && (
        <section className="work-section">
          <FadeIn>
            <p className="section-label">Projects</p>
          </FadeIn>
          <div className="card-row">
            {projects.map((project, i) => (
              <FadeIn key={project.id} delay={i * 0.08} direction="up">
                <Link to={project.to} className="thumb-card">
                  <ProjectImage project={project} className="thumb-card__img" />
                </Link>
              </FadeIn>
            ))}
          </div>
        </section>
      )}

      {/* Availability Strip */}
      <FadeIn delay={0.1}>
        <section className="availability">
          <div className="availability__left">
            <span className="availability__dot" />
            <span className="availability__status">Open to new opportunities</span>
            <span className="availability__location">Full-stack · Dallas–Fort Worth</span>
          </div>
          <Link to="/contact" className="availability__cta">Get in touch →</Link>
        </section>
      </FadeIn>

    </div>
  )
}