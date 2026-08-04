import { motion } from "framer-motion";

import geeksLogo from "../assets/GeeksInstitut.png";
import ocpLogo from "../assets/OCP.png";
import empsiLogo from "../assets/EmpsiConsulting.png";
import arkasLogo from "../assets/Arkas.png";
import empgtLogo from "../assets/E-MPGT.png";
import batimobLogo from "../assets/BATIMOB.webp";
import amlabsLogo from "../assets/AMLabs.png";

interface ExperienceProps {
  isDark: boolean;
}

const experiences = [
  {
    id: 1,
    role: "Founder & AI Engineer",
    company: "AM Labs",
    type: "Self-employed",
    period: "Aug 2026 – Present · 1 mo",
    location: "Casablanca-Settat, Morocco · Remote",
    logo: amlabsLogo,
    description:
      "Founded AM Labs to build AI-powered software, automation systems, and custom web applications for businesses.",
    bullets: [
      "Designing and developing AI-powered SaaS applications and automation systems",
      "Building custom full-stack web applications and API integrations",
      "Delivering AI solutions tailored to business needs across multiple industries",
      "Managing end-to-end product development from architecture to deployment",
    ],
    skills: ["AI Automation", "Full-Stack Development", "SaaS", "API Integrations"],
    current: true,
  },
  {
    id: 2,
    role: "AI & Full-Stack Developer Intern",
    company: "E-MPGT",
    type: "Internship",
    period: "Aug 2026 – Present",
    location: "Morocco · Remote",
    logo: empgtLogo,
    description:
      "Contributing to the design and architecture of an AI-driven enterprise ecosystem focused on intelligent automation, knowledge management, and scalable digital infrastructures.",
    bullets: [
      "Researching and designing Knowledge Graph architectures and AI Agent systems",
      "Defining enterprise automation workflows and contributing to a local AI-powered ERP system",
      "Contributing to the E-MPGT Platform — a business ecosystem with Company and Freelancer spaces",
      "Collaborating on Moroccan Vibrations, a next-gen e-commerce platform integrating marketplace, affiliate marketing, and AI-powered business tools",
    ],
    skills: ["Knowledge Graphs", "AI Agents", "ERP", "Full-Stack", "Automation"],
    current: true,
  },
  {
    id: 3,
    role: "Full-Stack Engineer",
    company: "BATIMOB",
    type: "Remote",
    period: "Jul 2026 – Present",
    location: "Morocco · Remote",
    logo: batimobLogo,
    description:
      "Collaborating on the design and development of BATIMOB's next-generation corporate website for the construction industry.",
    bullets: [
      "Designing and developing a premium corporate website using modern web technologies",
      "Building responsive and multilingual interfaces (French, English, and Arabic)",
      "Structuring the website for SEO optimization and high performance",
      "Implementing modern UI/UX interactions and developing reusable frontend components",
    ],
    skills: ["React", "TypeScript", "Multilingual", "SEO", "UI/UX"],
    current: true,
  },
  {
    id: 4,
    role: "Full-Stack & AI Developer",
    company: "Geeks Institute",
    type: "Bootcamp · Internship",
    period: "Jan 2026 – Aug 2026 · 8 mos",
    location: "Casablanca, Morocco",
    logo: geeksLogo,
    description:
      "Intensive on-site bootcamp focused on Full-Stack Development and Artificial Intelligence, working on real-world projects from day one.",
    bullets: [
      "Building full-stack web applications using the MERN stack (MongoDB, Express, React, Node.js)",
      "Integrating AI features and automation into web projects",
      "Applying software engineering best practices: Git, clean code, agile teamwork",
      "Continuous improvement through daily challenges and collaborative projects",
    ],
    skills: ["React", "Node.js", "MongoDB", "Python", "AI/ML"],
    current: true,
  },
  {
    id: 5,
    role: "Project Intern — Full-Stack Developer",
    company: "OCP Group",
    type: "Internship",
    period: "Jun 2024 – Sep 2024 · 4 mos",
    location: "Casablanca-Settat, Morocco",
    logo: ocpLogo,
    description:
      "Designed and developed a full project management platform from scratch, handling both frontend and backend architecture.",
    bullets: [
      "Built a project management web app using HTML, CSS, JavaScript, PHP and MySQL",
      "Implemented dynamic forms, dashboards, and a relational database architecture",
      "Set up frontend and backend structure following MVC principles",
      "Worked in an Agile environment with iterative deliverables and functional testing",
    ],
    skills: ["JavaScript", "PHP", "MySQL", "XAMPP", "Agile"],
  },
  {
    id: 6,
    role: "Full-Stack Developer",
    company: "EMPSI Consulting",
    type: "Internship",
    period: "Apr 2023 – Jun 2023 · 3 mos",
    location: "Casablanca-Settat, Morocco",
    logo: empsiLogo,
    description:
      "Developed a complete web application for gym management, covering registrations, payments, coach and session tracking.",
    bullets: [
      "Built a responsive gym management platform with HTML, CSS, JS, PHP and MySQL",
      "Implemented a full CRUD system for members, coaches, payments and sessions",
      "Designed an intuitive and responsive UI adapted to daily operational use",
      "Used Git for version control and XAMPP as the local development environment",
    ],
    skills: ["MySQL", "PHP", "JavaScript", "Git", "XAMPP"],
  },
  {
    id: 7,
    role: "Frontend Developer",
    company: "Arkas Maroc",
    type: "Internship",
    period: "Sep 2022 – Nov 2022 · 3 mos",
    location: "Casablanca, Morocco",
    logo: arkasLogo,
    description:
      "Handled frontend integration across 3 production websites, translating design mockups into clean and standards-compliant code.",
    bullets: [
      "Integrated frontend across 3 websites using HTML, CSS and JavaScript",
      "Respected UX/UI standards and adapted provided mockups into pixel-perfect interfaces",
      "Ensured cross-browser compatibility and responsive design across all pages",
      "Worked within a professional environment using Visual Studio Code and XAMPP",
    ],
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "XAMPP"],
  },
];

const Experience = ({ isDark }: ExperienceProps) => {
  return (
    <section
      style={{
        backgroundColor: isDark ? "#0d0d0d" : "#ffffff",
        padding: "6rem",
        fontFamily: "'DM Sans', sans-serif",
        transition: "background-color 0.3s",
      }}
    >
      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
            fontWeight: 700,
            fontFamily: "'Playfair Display', serif",
            color: isDark ? "#ffffff" : "#111111",
            margin: "0 0 0.75rem 0",
          }}
        >
          Work <span style={{ color: "#c8171d" }}>Experience</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ fontSize: "15px", color: isDark ? "#666" : "#888", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}
        >
          A track record of internships and hands-on projects across different industries and tech stacks.
        </motion.p>
      </div>

      {/* TIMELINE */}
      <div style={{ maxWidth: "860px", margin: "0 auto", position: "relative" }}>
        {/* vertical line */}
        <div style={{
          position: "absolute", left: "28px", top: 0, bottom: 0,
          width: "2px",
          backgroundColor: isDark ? "#1e1e1e" : "#f0f0f0",
        }} />

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
              display: "flex", gap: "1.75rem",
              marginBottom: index < experiences.length - 1 ? "3rem" : 0,
              position: "relative",
            }}
          >
            {/* LOGO */}
            <div style={{
              width: "58px", height: "58px", borderRadius: "14px",
              backgroundColor: isDark ? "#181818" : "#f8f8f8",
              border: `1px solid ${isDark ? "#222" : "#ebebeb"}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              overflow: "hidden", flexShrink: 0, zIndex: 1,
            }}>
              <img src={exp.logo} alt={exp.company} style={{ width: "42px", height: "42px", objectFit: "contain" }} />
            </div>

            {/* CONTENT CARD */}
            <div style={{
              flex: 1,
              backgroundColor: isDark ? "#141414" : "#fafafa",
              border: `1px solid ${exp.current ? "rgba(200,23,29,0.3)" : isDark ? "#1e1e1e" : "#f0f0f0"}`,
              borderRadius: "14px",
              padding: "1.5rem 1.75rem",
              transition: "border-color 0.2s",
            }}>
              {/* TOP ROW */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.4rem" }}>
                <div>
                  <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 700, color: isDark ? "#f0f0f0" : "#111111", fontFamily: "'Playfair Display', serif" }}>
                    {exp.role}
                  </h3>
                  <p style={{ margin: "3px 0 0", fontSize: "13px", color: "#c8171d", fontWeight: 500 }}>
                    {exp.company} · {exp.type}
                  </p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ margin: 0, fontSize: "12px", color: isDark ? "#666" : "#aaa" }}>{exp.period}</p>
                  <p style={{ margin: "2px 0 0", fontSize: "11.5px", color: isDark ? "#555" : "#bbb" }}>{exp.location}</p>
                </div>
              </div>

              {/* DESCRIPTION */}
              <p style={{ margin: "0.85rem 0 0.75rem", fontSize: "13.5px", lineHeight: 1.7, color: isDark ? "#888" : "#666" }}>
                {exp.description}
              </p>

              {/* BULLETS */}
              <ul style={{ margin: "0 0 1rem", paddingLeft: "1.1rem", display: "flex", flexDirection: "column", gap: "5px" }}>
                {exp.bullets.map((b, i) => (
                  <li key={i} style={{ fontSize: "13px", lineHeight: 1.65, color: isDark ? "#777" : "#777" }}>{b}</li>
                ))}
              </ul>

              {/* SKILLS — subtle */}
              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                {exp.skills.map((skill) => (
                  <span key={skill} style={{
                    fontSize: "11px", fontWeight: 500,
                    color: isDark ? "#888" : "#777",
                    backgroundColor: isDark ? "#1e1e1e" : "#f5f5f5",
                    border: `1px solid ${isDark ? "#2a2a2a" : "#e8e8e8"}`,
                    borderRadius: "5px",
                    padding: "3px 9px",
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;