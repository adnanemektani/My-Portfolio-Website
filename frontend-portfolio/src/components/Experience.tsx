import { motion } from "framer-motion";

import geeksLogo from "../assets/GeeksInstitut.png";
import ocpLogo from "../assets/OCP.png";
import empsiLogo from "../assets/EmpsiConsulting.png";
import arkasLogo from "../assets/Arkas.png";

interface ExperienceProps {
  isDark: boolean;
}

const experiences = [
  {
    id: 1,
    role: "Full-Stack & AI Developer",
    company: "Geeks Institute",
    type: "Bootcamp · Internship",
    period: "Jan 2026 – Present · 5 mos",
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
  },
  {
    id: 2,
    role: "Stagiaire Projet - Full-Stack Developer",
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
    id: 3,
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
    id: 4,
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
          transition={{ duration: 0.5, delay: 0.1 }}
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
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            fontSize: "15px",
            color: isDark ? "#888" : "#777",
            maxWidth: "480px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          A track record of internships and hands-on projects across different industries and tech stacks.
        </motion.p>
      </div>

      {/* TIMELINE */}
      <div style={{ maxWidth: "860px", margin: "0 auto", position: "relative" }}>

        {/* vertical line */}
        <div style={{
          position: "absolute",
          left: "28px",
          top: 0,
          bottom: 0,
          width: "2px",
          backgroundColor: isDark ? "#2a2a2a" : "#eeeeee",
        }} />

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
              display: "flex",
              gap: "1.75rem",
              marginBottom: index < experiences.length - 1 ? "3rem" : 0,
              position: "relative",
            }}
          >
            {/* LOGO */}
            <div style={{
              width: "58px",
              height: "58px",
              borderRadius: "14px",
              backgroundColor: isDark ? "#1a1a1a" : "#f5f5f5",
              border: `1px solid ${isDark ? "#2a2a2a" : "#e8e8e8"}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              flexShrink: 0,
              zIndex: 1,
            }}>
              <img
                src={exp.logo}
                alt={exp.company}
                style={{
                  width: "42px",
                  height: "42px",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* CONTENT */}
            <div style={{
              flex: 1,
              backgroundColor: isDark ? "#161616" : "#fafafa",
              border: `1px solid ${isDark ? "#2a2a2a" : "#eeeeee"}`,
              borderRadius: "14px",
              padding: "1.5rem 1.75rem",
            }}>
              {/* TOP ROW */}
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginBottom: "0.4rem",
              }}>
                <div>
                  <h3 style={{
                    margin: 0,
                    fontSize: "16.5px",
                    fontWeight: 700,
                    color: isDark ? "#ffffff" : "#111111",
                    fontFamily: "'Playfair Display', serif",
                  }}>
                    {exp.role}
                  </h3>
                  <p style={{
                    margin: "2px 0 0",
                    fontSize: "13.5px",
                    color: "#c8171d",
                    fontWeight: 500,
                  }}>
                    {exp.company} · {exp.type}
                  </p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ margin: 0, fontSize: "12.5px", color: isDark ? "#777" : "#999" }}>
                    {exp.period}
                  </p>
                  <p style={{ margin: "2px 0 0", fontSize: "12px", color: isDark ? "#666" : "#aaa" }}>
                     {exp.location}
                  </p>
                </div>
              </div>

              {/* DESCRIPTION */}
              <p style={{
                margin: "0.85rem 0 0.75rem",
                fontSize: "13.5px",
                lineHeight: 1.7,
                color: isDark ? "#aaaaaa" : "#555555",
              }}>
                {exp.description}
              </p>

              {/* BULLETS */}
              <ul style={{
                margin: "0 0 1rem",
                paddingLeft: "1.1rem",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}>
                {exp.bullets.map((b, i) => (
                  <li key={i} style={{
                    fontSize: "13px",
                    lineHeight: 1.65,
                    color: isDark ? "#999" : "#666",
                  }}>
                    {b}
                  </li>
                ))}
              </ul>

              {/* SKILLS */}
              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                {exp.skills.map((skill) => (
                  <span key={skill} style={{
                    fontSize: "11px",
                    fontWeight: 500,
                    color: "#c8171d",
                    backgroundColor: isDark ? "rgba(200,23,29,0.1)" : "rgba(200,23,29,0.07)",
                    border: "1px solid rgba(200,23,29,0.2)",
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