import { motion } from "framer-motion";
import React from "react";

interface SkillsProps {
  isDark: boolean;
}

const CategoryIcons: Record<string, React.ReactNode> = {
  Frontend: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8171d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  Backend: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8171d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="4" rx="1"/><rect x="2" y="10" width="20" height="4" rx="1"/><rect x="2" y="17" width="20" height="4" rx="1"/>
      <circle cx="6" cy="5" r="1" fill="#c8171d"/><circle cx="6" cy="12" r="1" fill="#c8171d"/><circle cx="6" cy="19" r="1" fill="#c8171d"/>
    </svg>
  ),
  Database: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8171d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
    </svg>
  ),
  "DevOps & Cloud": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8171d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  ),
  "AI / ML": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8171d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
    </svg>
  ),
  Tools: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8171d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  ),
};

const categories = [
  {
    label: "Frontend",
    skills: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    ],
  },
  {
    label: "Database",
    skills: [
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Pinecone", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    ],
  },
  {
    label: "DevOps & Cloud",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "GitLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
      { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "Ansible", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" },
      { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
      { name: "Grafana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
      { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "n8n", icon: "https://avatars.githubusercontent.com/u/45487711?s=200&v=4" },
    ],
  },
  {
    label: "AI / ML",
    skills: [
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
      { name: "LangChain", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "HuggingFace", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
      { name: "Streamlit", icon: "https://streamlit.io/images/brand/streamlit-mark-color.svg" },
      { name: "Groq", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "XAMPP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" },
      { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
    ],
  },
];

const SkillCard = ({
  name,
  icon,
  isDark,
  index,
  isInvertable,
}: {
  name: string;
  icon: string;
  isDark: boolean;
  index: number;
  isInvertable?: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25, delay: index * 0.04 }}
      whileHover={{ y: -5, scale: 1.06 }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
        padding: "14px 12px",
        backgroundColor: isDark ? "#161616" : "#ffffff",
        border: `1px solid ${isDark ? "#2a2a2a" : "#eeeeee"}`,
        borderRadius: "12px",
        cursor: "default",
        width: "82px",
        boxSizing: "border-box",
        transition: "border-color 0.2s, box-shadow 0.2s",
      }}
    >
      <img
        src={icon}
        alt={name}
        style={{
          width: "36px",
          height: "36px",
          objectFit: "contain",
          filter: isInvertable && isDark ? "invert(1)" : "none",
        }}
        onError={(e) => {
          const parent = (e.currentTarget as HTMLImageElement).parentElement;
          if (parent) {
            const fallback = document.createElement("div");
            fallback.style.cssText = `width:36px;height:36px;border-radius:8px;background:#c8171d22;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:#c8171d`;
            fallback.textContent = name.slice(0, 2).toUpperCase();
            (e.currentTarget as HTMLImageElement).replaceWith(fallback);
          }
        }}
      />
      <span
        style={{
          fontSize: "11px",
          fontWeight: 500,
          color: isDark ? "#cccccc" : "#444444",
          textAlign: "center",
          whiteSpace: "nowrap",
        }}
      >
        {name}
      </span>
    </motion.div>
  );
};

const Skills = ({ isDark }: SkillsProps) => {
  return (
    <section
      id="skills"
      style={{
        backgroundColor: isDark ? "#0d0d0d" : "#f9f9f9",
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
          Skills &amp; <span style={{ color: "#c8171d" }}>Technologies</span>
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
          A broad toolkit built across frontend, backend, cloud, and AI — always expanding.
        </motion.p>
      </div>

      {/* CATEGORIES */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "2.5rem",
        }}
      >
        {categories.map((cat, catIndex) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: catIndex * 0.08 }}
          >
            {/* CATEGORY LABEL */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
              {CategoryIcons[cat.label]}
              <h3
                style={{
                  margin: 0,
                  fontSize: "13px",
                  fontWeight: 600,
                  color: isDark ? "#ffffff" : "#111111",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                }}
              >
                {cat.label}
              </h3>
              <div style={{ flex: 1, height: "1px", backgroundColor: isDark ? "#2a2a2a" : "#e8e8e8", marginLeft: "0.5rem" }} />
            </div>

            {/* SKILLS GRID — centered via justify-content */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
                justifyContent: cat.skills.length <= 40 ? "center" : "flex-start",
              }}
            >
              {cat.skills.map((skill, i) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  isDark={isDark}
                  index={i}
                  isInvertable={
                    skill.name === "Express" ||
                    skill.name === "Next.js" ||
                    skill.name === "GitHub"
                  }
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;