import React from "react"
import useEmblaCarousel from "embla-carousel-react"

export default function Carousel({ slides }) {
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps"
  })

  return (
    <div style={{ overflow: "hidden" }} ref={emblaRef}>
      <div style={{ display: "flex", gap: "1.25rem", paddingBottom: "0.5rem" }}>
        {slides.map((slide, i) => (
          <div
            key={i}
            className="carousel-slide"
            style={{
              padding: "1.75rem",
              borderRadius: "1rem",
              transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "default",
              background: "var(--card-bg)",
              borderTop: "3px solid var(--accent)",
              boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 4px 20px rgba(0,0,0,0.04)",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-4px)"
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.1), 0 0 0 1px var(--accent-border)"
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)"
              e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.06), 0 4px 20px rgba(0,0,0,0.04)"
            }}
          >
            <span
              style={{
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                display: "block",
                marginBottom: "1rem",
                fontWeight: 700,
                color: "var(--accent)",
              }}
            >
              0{i + 1}
            </span>
            <p
              style={{
                lineHeight: 1.375,
                marginBottom: "0.75rem",
                fontWeight: 800,
                fontSize: "1.05rem",
                letterSpacing: "-0.3px",
                color: "var(--text-h)",
              }}
            >
              {slide.title}
            </p>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.625, color: "var(--text)" }}>
              {slide.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
