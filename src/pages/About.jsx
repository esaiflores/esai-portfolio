import { Link } from "react-router-dom"
import FadeIn from "../components/FadeIn"

const skills = {
  Frontend: ["React", "Angular", "TypeScript", "JavaScript", "HTML", "CSS", "SCSS", "Bootstrap"],
  Backend: ["C#", ".NET Core", "ASP.NET", "Java", "Spring Boot", "SQL", "JSON"],
  "Databases & Tools": ["SQL Server", "MySQL", "Git", "GitHub", "Docker", "Kubernetes", "Azure DevOps", "Figma", "Dynatrace"],
  Methodologies: ["Agile / Scrum", "TDD", "CI/CD", "Microservices", "RESTful APIs", "OOP", "SDLC"],
}

const experience = [
  {
    company: "D.R. Horton",
    role: "Software Engineer",
    location: "Arlington, TX",
    dates: "Oct 2021 – Present",
    current: true,
  },
  {
    company: "American Airlines",
    role: "Software Engineer",
    location: "Irving, TX",
    dates: "Apr 2021 – Oct 2021",
    current: false,
  },
  {
    company: "RightNow Media",
    role: "Software Engineer",
    location: "McKinney, TX",
    dates: "Sep 2020 – Feb 2021",
    current: false,
  },
]

export default function About() {
  return (
    <div className="about">

      <FadeIn>
        <div className="about__header">
          <p className="section-label">About</p>
          <h1 className="about__name">Esai Flores</h1>
          <div className="about__links">
            <a href="https://linkedin.com/in/esai-flores" target="_blank" rel="noopener noreferrer" className="about__link">LinkedIn ↗</a>
            <a href="https://github.com/esaiflores" target="_blank" rel="noopener noreferrer" className="about__link">GitHub ↗</a>
            <a href="mailto:flores.esaijonathan@gmail.com" className="about__link">Email ↗</a>
          </div>
        </div>
      </FadeIn>

      <div className="about__grid">

        <FadeIn delay={0.1} className="about-card about-card--bio">
          <p className="section-label">Bio</p>
          <p className="about-card__text">
            Full-Stack Software Engineer with 4+ years of professional experience building enterprise
            and consumer-facing applications. My role spans the full stack — from crafting polished
            React UIs to building and maintaining .NET Core and C# APIs across internal tools,
            legacy modernization efforts, and customer-facing platforms.
          </p>
          <p className="about-card__text">
            Most recently I led UI work on a full redesign of D.R. Horton's customer portal,
            delivering a responsive experience across desktop and mobile. I genuinely enjoy the
            problem-solving side of development — whether that's tracking down a tricky bug or
            rethinking a UI interaction to make it feel right.
          </p>
          <p className="about-card__text">
            My path into software started from an unlikely place — a Biology degree from Dickinson
            College — but that background sharpened how I think about systems, data, and user
            behavior in ways that still show up in my work today.
          </p>
        </FadeIn>

        <FadeIn delay={0.15} className="about-card">
          <p className="section-label">Experience</p>
          <div className="timeline">
            {experience.map((job, i) => (
              <div key={job.company} className="timeline__item">
                <div className="timeline__left">
                  <div className={`timeline__dot${job.current ? " timeline__dot--active" : ""}`} />
                  {i < experience.length - 1 && <div className="timeline__line" />}
                </div>
                <div className="timeline__body">
                  <p className="timeline__company">{job.company}</p>
                  <p className={`timeline__role${job.current ? " timeline__role--active" : ""}`}>{job.role}</p>
                  <p className="timeline__meta">{job.dates} · {job.location}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="about-card">
          <p className="section-label">Education</p>
          <p className="about-card__title">Dickinson College</p>
          <p className="about-card__subtitle">B.S. Biology · Carlisle, PA · May 2019</p>
          <div className="about-card__tags">
            <span className="about-tag">Sigma Lambda Beta</span>
            <span className="about-tag">WDCV Radio</span>
            <span className="about-tag">Biology Teaching Assistant</span>
            <span className="about-tag">Residence Life</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.25} className="about-card about-card--skills">
          <p className="section-label">Technologies</p>
          <div className="skills-grid">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="skills-group">
                <p className="skills-group__label">{group}</p>
                <div className="skills-group__pills">
                  {items.map(skill => (
                    <span key={skill} className="skill-pill">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

      </div>

      <FadeIn delay={0.1}>
        <div className="availability">
          <div className="availability__left">
            <span className="availability__dot" />
            <span className="availability__status">Open to new opportunities</span>
            <span className="availability__location">Full-stack · Dallas–Fort Worth</span>
          </div>
          <Link to="/contact" className="availability__cta">Get in touch →</Link>
        </div>
      </FadeIn>

    </div>
  )
}