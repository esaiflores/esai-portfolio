export default function Contact() {
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
        Say Hello
      </p>
      <h1
        style={{
          fontSize: "clamp(2rem, 4vw, 2.75rem)",
          fontWeight: 800,
          letterSpacing: "-0.5px",
          color: "var(--text-h)",
          margin: "0 0 24px",
        }}
      >
        Get in Touch
      </h1>
      <p
        style={{
          fontSize: "1rem",
          marginBottom: "3.5rem",
          lineHeight: 1.625,
          color: "var(--text)",
          maxWidth: "520px",
        }}
      >
        I'm open to new opportunities and happy to connect. Whether you have a role in mind,
        a project idea, or just want to talk tech — feel free to reach out.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "480px" }}>
        <a
          href="mailto:flores.esaijonathan@gmail.com"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            padding: "1.25rem",
            borderRadius: "0.75rem",
            transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",
            background: "var(--card-bg)",
            border: "1px solid var(--border)",
            textDecoration: "none",
            color: "inherit",
          }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--accent-border)")}
          onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
        >
          <div
            style={{
              width: "2.5rem",
              height: "2.5rem",
              borderRadius: "0.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              background: "var(--accent-bg)",
              color: "var(--accent)",
              fontWeight: 700,
              fontSize: "0.85rem",
            }}
          >
            @
          </div>
          <div>
            <p
              style={{
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "0.25rem",
                fontWeight: 600,
                color: "var(--accent)",
              }}
            >
              Email
            </p>
            <p style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--text-h)" }}>
              flores.esaijonathan@gmail.com
            </p>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/esai-flores"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            padding: "1.25rem",
            borderRadius: "0.75rem",
            transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",
            background: "var(--card-bg)",
            border: "1px solid var(--border)",
            textDecoration: "none",
            color: "inherit",
          }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--accent-border)")}
          onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
        >
          <div
            style={{
              width: "2.5rem",
              height: "2.5rem",
              borderRadius: "0.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              background: "var(--accent-bg)",
              color: "var(--accent)",
              fontWeight: 700,
              fontSize: "0.75rem",
            }}
          >
            in
          </div>
          <div>
            <p
              style={{
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "0.25rem",
                fontWeight: 600,
                color: "var(--accent)",
              }}
            >
              LinkedIn
            </p>
            <p style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--text-h)" }}>
              linkedin.com/in/esai-flores
            </p>
          </div>
        </a>
      </div>
    </div>
  )
}
