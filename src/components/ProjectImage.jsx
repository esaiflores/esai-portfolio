// ProjectImage — shows the real image if available,
// otherwise renders a themed dark placeholder with initials.

const gradients = [
  "linear-gradient(135deg, #1a0533 0%, #2d1065 100%)",
  "linear-gradient(135deg, #0d1f3c 0%, #1a3a6b 100%)",
  "linear-gradient(135deg, #1a0a2e 0%, #3b1278 100%)",
  "linear-gradient(135deg, #0a1628 0%, #0f2d4a 100%)",
  "linear-gradient(135deg, #1f0a33 0%, #4a1278 100%)",
]

function getGradient(id) {
  const index = id
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0) % gradients.length
  return gradients[index]
}

function getInitials(title) {
  return title
    .split(" ")
    .slice(0, 2)
    .map(word => word[0])
    .join("")
    .toUpperCase()
}

export default function ProjectImage({ project, className = "", style = {} }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.title}
        className={className}
        style={style}
      />
    )
  }

  return (
    <div
      className={`project-placeholder ${className}`}
      style={{
        background: getGradient(project.id),
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        ...style,
      }}
    >
      {/* Subtle grid pattern */}
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.06 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id={`grid-${project.id}`} width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${project.id})`} />
      </svg>

      {/* Initials */}
      <div style={{
        position: "relative",
        zIndex: 1,
        fontSize: "1.75rem",
        fontWeight: 900,
        letterSpacing: "-1px",
        color: "rgba(255,255,255,0.15)",
        fontFamily: "var(--font-sans)",
        userSelect: "none",
      }}>
        {getInitials(project.title)}
      </div>

      {/* Project name */}
      <div style={{
        position: "relative",
        zIndex: 1,
        fontSize: "0.65rem",
        fontWeight: 700,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "rgba(255,255,255,0.2)",
        fontFamily: "var(--font-sans)",
        userSelect: "none",
      }}>
        {project.title}
      </div>
    </div>
  )
}