const personal = [
  {
    name: "Classroom Library Manager",
    description:
      "A library management system for teachers to organize their personal classroom libraries — track books, manage checkouts, and help students find great reads.",
    tags: ["React", "Personal Project"],
    status: "In Progress",
  },
]

const enterprise = [
  {
    company: "D.R. Horton",
    name: "Customer Portal Redesign",
    description:
      "Full UI redesign of the homebuyer-facing portal from scratch, responsive across desktop and mobile, built to spec with navigation, document access, and video integration.",
  },
  {
    company: "D.R. Horton",
    name: "Vendor Suite",
    description:
      "Company-wide vendor management platform supporting D.R. Horton's field and vendor operations across properties.",
  },
  {
    company: "American Airlines",
    name: "aa.com Pay & Review",
    description:
      "Flight booking Pay and Review page — a high-traffic consumer feature used by millions of travelers. Built with Angular, TypeScript, and Java.",
  },
  {
    company: "D.R. Horton",
    name: "JSA Scheduling App",
    description:
      "Internal job scheduling application coordinating work orders, maintenance tasks, and scheduling across properties and job sites.",
  },
]

export default function Projects() {
  return (
    <div style={{ paddingInline: "2rem", paddingBlock: "4rem", textAlign: "left" }}>
      <p
        style={{
          fontSize: "0.75rem",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          marginBottom: "1rem",
          fontWeight: 700,
          color: "var(--accent)",
        }}
      >
        Work
      </p>
      <h1
        style={{
          fontSize: "clamp(2rem, 4vw, 2.75rem)",
          fontWeight: 800,
          letterSpacing: "-0.5px",
          color: "var(--text-h)",
          margin: "0 0 56px",
        }}
      >
        Projects
      </h1>

      {/* Personal */}
      <p
        style={{
          fontSize: "0.75rem",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          marginBottom: "1.25rem",
          fontWeight: 600,
          color: "var(--text)",
        }}
      >
        Personal
      </p>
      <div className="grid-cols-responsive-2" style={{ gap: "1rem", marginBottom: "4rem" }}>
        {personal.map((p) => (
          <div
            key={p.name}
            style={{
              padding: "1.75rem",
              borderRadius: "1rem",
              background: "var(--card-bg)",
              border: "1px solid var(--border)",
              borderLeft: "3px solid var(--accent)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: "1rem",
                marginBottom: "0.75rem",
              }}
            >
              <p style={{ fontWeight: 700, fontSize: "1rem", color: "var(--text-h)" }}>
                {p.name}
              </p>
              <span
                style={{
                  fontSize: "0.75rem",
                  paddingInline: "0.625rem",
                  paddingBlock: "0.25rem",
                  borderRadius: "9999px",
                  flexShrink: 0,
                  fontWeight: 600,
                  background: "var(--accent-bg)",
                  color: "var(--accent)",
                  border: "1px solid var(--accent-border)",
                }}
              >
                {p.status}
              </span>
            </div>
            <p
              style={{
                fontSize: "0.875rem",
                lineHeight: 1.625,
                marginBottom: "1.25rem",
                color: "var(--text)",
              }}
            >
              {p.description}
            </p>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "0.75rem",
                    paddingInline: "0.625rem",
                    paddingBlock: "0.25rem",
                    borderRadius: "9999px",
                    background: "var(--accent-bg)",
                    color: "var(--accent)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Enterprise */}
      <p
        style={{
          fontSize: "0.75rem",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          marginBottom: "1.25rem",
          fontWeight: 600,
          color: "var(--text)",
        }}
      >
        Enterprise
      </p>
      <div className="grid-cols-responsive-2" style={{ gap: "1rem" }}>
        {enterprise.map((p) => (
          <div
            key={p.name}
            style={{
              padding: "1.5rem",
              borderRadius: "0.75rem",
              background: "var(--card-bg)",
              border: "1px solid var(--border)",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "0.5rem",
                fontWeight: 600,
                color: "var(--accent)",
              }}
            >
              {p.company}
            </p>
            <p
              style={{
                marginBottom: "0.5rem",
                fontWeight: 600,
                fontSize: "0.95rem",
                color: "var(--text-h)",
              }}
            >
              {p.name}
            </p>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.625, color: "var(--text)" }}>
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
