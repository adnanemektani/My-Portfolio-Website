import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import BtpImg from "../assets/BTP.png";
interface ProjectsProps {
  isDark: boolean;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  deployed: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-MPGT — Intelligent BTP Document Assistant",
    description: "AI-powered RAG system for construction companies. Centralizes and analyzes BTP documents (PDF, Word, Excel, Images) using vector embeddings. Features multi-project management, automatic Gmail sync, and intelligent Q&A powered by LLaMA 3 via Groq.",
    image: BtpImg,
    tags: ["Python", "LangChain", "Pinecone", "Groq", "RAG", "Streamlit", "HuggingFace"],
    liveUrl: "https://e-mpgt---ai-system-for-construction-data-btp-project-mnjwguu2q.streamlit.app/",
    githubUrl: "https://github.com/adnanemektani/E-MPGT---AI-System-for-Construction-Data-BTP-Project.git",
    deployed: true,
  },
  {
    id: 2,
    title: "E-Commerce Dashboard",
    description: "Dashboard complet pour gérer boutiques en ligne avec analytics en temps réel et gestion des stocks.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    tags: ["Next.js", "TypeScript", "Prisma"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    deployed: true,
  },
  {
    id: 3,
    title: "CV Generator AI",
    description: "Générateur de CV intelligent qui utilise l'IA pour optimiser le contenu selon le poste visé.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80",
    tags: ["React", "Python", "FastAPI"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    deployed: true,
  },
  {
    id: 4,
    title: "Real Estate App",
    description: "Application immobilière avec recherche avancée, carte interactive et estimation de prix par ML.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
    tags: ["React Native", "Maps API", "ML"],
    liveUrl: "",
    githubUrl: "https://github.com",
    deployed: false,
  },
  {
    id: 5,
    title: "Social Media Automation",
    description: "Outil d'automatisation pour planifier et publier du contenu sur plusieurs plateformes sociales.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80",
    tags: ["Python", "Selenium", "Redis"],
    liveUrl: "",
    githubUrl: "https://github.com",
    deployed: false,
  },
  {
    id: 6,
    title: "DevOps Pipeline Tool",
    description: "Outil CI/CD personnalisé pour automatiser le déploiement et monitoring des applications cloud.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&q=80",
    tags: ["Docker", "GitHub Actions", "AWS"],
    liveUrl: "",
    githubUrl: "https://github.com",
    deployed: false,
  },
  {
    id: 7,
    title: "Finance Tracker",
    description: "Application de suivi financier personnel avec graphiques analytiques et alertes budgétaires.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
    tags: ["Vue.js", "Chart.js", "Firebase"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    deployed: true,
  },
  {
    id: 8,
    title: "Learning Management System",
    description: "Plateforme LMS complète avec cours vidéo, quiz interactifs et suivi de progression.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&q=80",
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    deployed: true,
  },
  {
    id: 9,
    title: "IoT Dashboard",
    description: "Dashboard temps réel pour visualiser et contrôler des capteurs IoT connectés via MQTT.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    tags: ["React", "MQTT", "WebSockets"],
    liveUrl: "",
    githubUrl: "https://github.com",
    deployed: false,
  },
];

interface ProjectCardProps {
  project: Project;
  isDark: boolean;
}

const ProjectCard = ({ project, isDark }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      whileHover={{
        y: -6,
        boxShadow: isDark
          ? "0 20px 40px rgba(0,0,0,0.4)"
          : "0 20px 40px rgba(0,0,0,0.1)",
      }}
      style={{
        backgroundColor: isDark ? "#161616" : "#ffffff",
        border: `1px solid ${isDark ? "#2a2a2a" : "#eeeeee"}`,
        borderRadius: "14px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
      }}
    >
      {/* IMAGE */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.4s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
        {project.deployed && (
          <div
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              backgroundColor: "#c8171d",
              color: "#fff",
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "1px",
              textTransform: "uppercase",
              padding: "4px 10px",
              borderRadius: "999px",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "#fff",
                display: "inline-block",
              }}
            />
            Live
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div
        style={{
          padding: "1.25rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          flex: 1,
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: "16px",
            fontWeight: 700,
            fontFamily: "'Playfair Display', serif",
            color: isDark ? "#ffffff" : "#111111",
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            margin: 0,
            fontSize: "13.5px",
            lineHeight: 1.65,
            color: isDark ? "#888888" : "#666666",
            flex: 1,
          }}
        >
          {project.description}
        </p>

        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: "11px",
                fontWeight: 500,
                color: "#c8171d",
                backgroundColor: isDark
                  ? "rgba(200,23,29,0.1)"
                  : "rgba(200,23,29,0.07)",
                border: "1px solid rgba(200,23,29,0.2)",
                borderRadius: "5px",
                padding: "3px 8px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div
          style={{
            height: "1px",
            backgroundColor: isDark ? "#2a2a2a" : "#eeeeee",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "12.5px",
              color: isDark ? "#aaaaaa" : "#555555",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#c8171d")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = isDark ? "#aaaaaa" : "#555555")
            }
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            Source Code
          </a>


          {project.deployed && project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "12.5px",
                fontWeight: 500,
                color: "#c8171d",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              View Live
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = ({ isDark }: ProjectsProps) => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section
      style={{
        backgroundColor: isDark ? "#0d0d0d" : "#f9f9f9",
        padding: "6rem",
        fontFamily: "'DM Sans', sans-serif",
        transition: "background-color 0.3s",
      }}
    >
      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
        

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
          Featured{" "}
          <span style={{ color: "#c8171d" }}>Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            fontSize: "15px",
            color: isDark ? "#888" : "#777",
            maxWidth: "500px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          A selection of projects I have built — from web apps to AI-powered tools.
        </motion.p>
      </div>

      {/* GRID */}
      <motion.div
        layout
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.75rem",
        }}
      >
        <AnimatePresence>
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} isDark={isDark} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* VIEW MORE */}
      {projects.length > 6 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginTop: "3rem" }}
        >
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: isDark ? "#2a2a2a" : "#e8e8e8",
              marginBottom: "2rem",
              position: "relative",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: isDark ? "#0d0d0d" : "#f9f9f9",
                padding: "0 1.5rem",
                fontSize: "12px",
                color: isDark ? "#555" : "#aaa",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              {showAll ? "Showing all projects" : `${projects.length - 6} more projects`}
            </span>
          </div>

          <button
            onClick={() => setShowAll(!showAll)}
            style={{
              padding: "0 2rem",
              height: "48px",
              backgroundColor: "transparent",
              border: `1.5px solid ${isDark ? "#333" : "#ddd"}`,
              borderRadius: "8px",
              color: isDark ? "#ffffff" : "#111111",
              fontSize: "14px",
              fontWeight: 500,
              cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
              transition: "all 0.2s",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#c8171d";
              e.currentTarget.style.color = "#c8171d";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = isDark ? "#333" : "#ddd";
              e.currentTarget.style.color = isDark ? "#ffffff" : "#111111";
            }}
          >
            {showAll ? "Show Less" : "View More"}
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;