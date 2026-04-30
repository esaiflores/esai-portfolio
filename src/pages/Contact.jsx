import { useState } from "react"
import FadeIn from "../components/FadeIn"

const links = [
  {
    label: "Email",
    value: "flores.esaijonathan@gmail.com",
    href: "mailto:flores.esaijonathan@gmail.com",
    icon: "@",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/esai-flores",
    href: "https://www.linkedin.com/in/esai-flores",
    icon: "in",
  },
  {
    label: "GitHub",
    value: "github.com/esaiflores",
    href: "https://github.com/esaiflores",
    icon: "</>",
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Opens the user's mail client with the form data pre-filled
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:flores.esaijonathan@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <div className="contact">

      <FadeIn>
        <div className="contact__header">
          <p className="section-label">Say hello</p>
          <h1 className="contact__title">Get in Touch</h1>
          <p className="contact__subtitle">
            I'm open to new opportunities and happy to connect. Whether you have a role in mind,
            a project idea, or just want to talk tech — feel free to reach out.
          </p>
        </div>
      </FadeIn>

      <div className="contact__grid">

        {/* Contact Form */}
        <FadeIn delay={0.1} className="contact-form-wrap">
          <div className="contact-card">
            <p className="section-label" style={{ marginBottom: "1.5rem" }}>Send a message</p>

            {sent ? (
              <div className="contact-form__success">
                <div className="contact-form__success-icon">✓</div>
                <p className="contact-form__success-title">Message sent!</p>
                <p className="contact-form__success-sub">Your mail client should have opened. I'll get back to you soon.</p>
                <button className="contact-form__reset" onClick={() => setSent(false)}>
                  Send another
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form__row">
                  <div className="contact-form__field">
                    <label className="contact-form__label">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="contact-form__input"
                    />
                  </div>
                  <div className="contact-form__field">
                    <label className="contact-form__label">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="contact-form__input"
                    />
                  </div>
                </div>
                <div className="contact-form__field">
                  <label className="contact-form__label">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What's on your mind?"
                    required
                    rows={6}
                    className="contact-form__input contact-form__textarea"
                  />
                </div>
                <button type="submit" className="contact-form__submit">
                  Send message →
                </button>
              </form>
            )}
          </div>
        </FadeIn>

        {/* Contact Links */}
        <div className="contact__links">
          {links.map((link, i) => (
            <FadeIn key={link.label} delay={0.15 + i * 0.08}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="contact-link"
              >
                <div className="contact-link__icon">{link.icon}</div>
                <div className="contact-link__body">
                  <p className="contact-link__label">{link.label}</p>
                  <p className="contact-link__value">{link.value}</p>
                </div>
                <span className="contact-link__arrow">↗</span>
              </a>
            </FadeIn>
          ))}

          {/* Availability card */}
          <FadeIn delay={0.5}>
            <div className="contact-availability">
              <span className="availability__dot" />
              <div>
                <p className="contact-availability__title">Open to opportunities</p>
                <p className="contact-availability__sub">Full-stack · Dallas–Fort Worth · Available now</p>
              </div>
            </div>
          </FadeIn>
        </div>

      </div>

    </div>
  )
}