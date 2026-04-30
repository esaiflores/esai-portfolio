// ─── Project Data ────────────────────────────────────────
// Single source of truth for all work.
// Images go in: public/images/projects/
// Placeholder images use picsum.photos until real screenshots are added.

export const experience = [
  {
    id: "customer-portal",
    company: "D.R. Horton",
    role: "Software Engineer",
    location: "Arlington, TX",
    dates: "Oct 2021 – Present",
    title: "Customer Portal",
    description:
      "Led full-stack UI development in React and SCSS for a complete redesign of the customer portal web application, delivering a responsive experience across desktop and mobile following full SDLC practices.",
    tags: ["React", "SCSS", "C#", ".NET Core", "ASP.NET", "Azure DevOps", "CI/CD"],
    image: "/images/projects/customer-portal.png",
    placeholder: "https://picsum.photos/seed/portal/800/500",
    to: "/experience/customer-portal",
  },
  {
    id: "vendor-suite",
    company: "D.R. Horton",
    role: "Software Engineer",
    location: "Arlington, TX",
    dates: "Oct 2021 – Present",
    title: "VendorSuite",
    description:
      "Contributed to Vendor Suite, a company-wide vendor management platform supporting homebuilding operations. Built and maintained RESTful APIs in C# and .NET Core following microservice architecture patterns.",
    tags: ["React", "C#", ".NET Core", "RESTful APIs", "Microservices", "JSON"],
    image: "/images/projects/vendor-suite.png",
    placeholder: "https://picsum.photos/seed/vendor/800/500",
    to: "/experience/vendor-suite",
  },
  {
    id: "jsa",
    company: "D.R. Horton",
    role: "Software Engineer",
    location: "Arlington, TX",
    dates: "Oct 2021 – Present",
    title: "JSA",
    description:
      "Contributed to JSA, a job scheduling application used to coordinate work orders and maintenance across properties. Resolved bugs daily from Azure DevOps tickets across dev and production environments.",
    tags: ["React", "C#", ".NET Core", "Azure DevOps", "RESTful APIs"],
    image: "/images/projects/jsa.png",
    placeholder: "https://picsum.photos/seed/jsa/800/500",
    to: "/experience/jsa",
  },
  {
    id: "aa-flight-booking",
    company: "American Airlines",
    role: "Software Engineer",
    location: "Irving, TX",
    dates: "Apr 2021 – Oct 2021",
    title: "Flight Booking — Pay & Review",
    description:
      "Contributed to the redesign of the flight booking Pay and Review page, a high-traffic consumer-facing feature used by millions of travelers on aa.com. Built front-end components in Angular and TypeScript and backend services in Java and Spring Boot.",
    tags: ["Angular", "TypeScript", "Java", "Spring Boot", "Docker", "Kubernetes", "Dynatrace", "CI/CD"],
    image: "/images/projects/aa.png",
    placeholder: "https://picsum.photos/seed/airline/800/500",
    to: "/experience/aa-flight-booking",
  },
  {
    id: "rightnow-streaming",
    company: "RightNow Media",
    role: "Software Engineer",
    location: "McKinney, TX",
    dates: "Sep 2020 – Feb 2021",
    title: "Streaming Platform",
    description:
      "Contributed to full-stack web application development for a Christian streaming platform serving churches and congregations nationwide. Built and integrated features using Angular, TypeScript, and C# following microservice architecture patterns.",
    tags: ["Angular", "TypeScript", "C#", ".NET", "RESTful APIs", "CI/CD"],
    image: "/images/projects/rightnow.png",
    placeholder: "https://picsum.photos/seed/rightnow/800/500",
    to: "/experience/rightnow-streaming",
  },
]

export const projects = [
  {
    id: "library-manager",
    company: "Personal Project",
    title: "Library Management System",
    description:
      "A full-stack web application for teachers to catalog and manage their personal classroom libraries. Built with React on the frontend and .NET Core REST APIs on the backend.",
    tags: ["React", ".NET Core", "SQL Server", "RESTful APIs", "JSON"],
    image: "/images/projects/customer-portal.png",
    placeholder: "https://picsum.photos/seed/library/800/500",
    to: "/projects/library-manager",
    status: "In Development",
  },
]

// ─── Helpers ──────────────────────────────────────────────

export const allWork = [...experience, ...projects]

export function getWorkById(id) {
  return allWork.find(item => item.id === id)
}

// Group experience by company
export const experienceByCompany = experience.reduce((acc, item) => {
  if (!acc[item.company]) {
    acc[item.company] = {
      company: item.company,
      role: item.role,
      location: item.location,
      dates: item.dates,
      projects: [],
    }
  }
  acc[item.company].projects.push(item)
  return acc
}, {})