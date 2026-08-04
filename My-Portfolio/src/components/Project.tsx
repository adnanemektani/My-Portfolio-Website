import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BtpImg from "../assets/BTP.png";
import PriceP from "../assets/PriceP.png";
import VrBoost from "../assets/VrBoostAgency.png";
import useWindowSize from "../hooks/useWindowSize";
import { createPortal } from "react-dom";

interface ProjectsProps {
  isDark: boolean;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  video?: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  deployed: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AdnaneGPT — AI SaaS Assistant",
    description: "A full-stack AI chat assistant built with n8n workflow automation, Groq's Llama 3 for inference, and Supabase for persistent chat history. Features a ChatGPT-style interface with sidebar, dark/light mode, and real-time AI responses.",
    video: "/AdnaneGpt_Project.mp4",
    tags: ["n8n", "Groq", "Supabase", "Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "",
    githubUrl: "https://github.com/adnanemektani/AdnaneGPT---AI-SaaS-Assistant.git",
    deployed: false,
  },
  {
    id: 2,
    title: "VR Boost — Home Staging Virtuel",
    description: "A premium virtual Home Staging web app built for VR Boost Agency's technical recruitment challenge. Features a full management dashboard with visit tracking, an interactive 3D staging editor with furniture catalog (654+ items), virtual meeting management with scheduling and cancellation flows, an immersive Hub & Avatar experience, and a conversion-focused landing page — all built with a glassmorphism design system on a blue-violet-pink gradient.",
    image: VrBoost,
    tags: ["React", "TypeScript", "Tailwind CSS v3", "Framer Motion", "React Router DOM", "Lucide React"],
    liveUrl: "https://vr-boost-agency-gold.vercel.app",
    githubUrl: "https://github.com/adnanemektani/VR-Boost-Agency/tree/11837759c1c2f57a540b85cf5bbc298c53c7aa56/vr-boost-staging",
    deployed: true,
  },
  {
    id: 3,
    title: "PricePulse - Smart Price Tracker",
    description: "Full-stack web application that monitors product prices, simulates real-time market fluctuations, and provides an interactive dashboard for tracking trends. Built with React, TypeScript, Express, PostgreSQL, and Docker.",
    image: PriceP,
    tags: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Docker", "Jest", "Supertest", "Cypress", "Tailwind CSS", "REST API", "Railway", "Nginx"],
    liveUrl: "https://gino-legal-tech.vercel.app",
    githubUrl: "https://github.com/adnanemektani/GINO-LegalTech-.git",
    deployed: true,
  },
  {
    id: 4,
    title: "E-MPGT — Intelligent BTP Document Assistant",
    description: "AI-powered RAG system for construction companies. Centralizes and analyzes BTP documents (PDF, Word, Excel, Images) using vector embeddings. Features multi-project management, automatic Gmail sync, and intelligent Q&A powered by LLaMA 3 via Groq.",
    image: BtpImg,
    tags: ["Python", "LangChain", "Pinecone", "Groq", "RAG", "Streamlit", "HuggingFace"],
    liveUrl: "https://e-mpgt---ai-system-for-construction-data-btp-project-mnjwguu2q.streamlit.app/",
    githubUrl: "https://github.com/adnanemektani/E-MPGT---AI-System-for-Construction-Data-BTP-Project.git",
    deployed: false,
  },
];

// ─── VIDEO MEDIA COMPONENT ────────────────────────────────────────
const VideoMedia = ({ src, isDark }: { src: string; isDark: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalMuted, setIsModalMuted] = useState(false);

  const handleMouseEnter = () => {
    if (isModalOpen) return; // ← fix: mkatbdach play ila modal mftouh
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.muted = true;
      setIsMuted(true);
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (isModalOpen) return;
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const next = !isMuted;
      videoRef.current.muted = next;
      setIsMuted(next);
    }
  };

  const handleClick = () => {
    setIsModalOpen(true);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsHovered(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
      modalVideoRef.current.currentTime = 0;
    }
  };

  const toggleModalMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (modalVideoRef.current) {
      const next = !isModalMuted;
      modalVideoRef.current.muted = next;
      setIsModalMuted(next);
    }
  };

  return (
    <>
      {/* ── MODAL OVERLAY ── */}
      {isModalOpen && createPortal (
        <div
          onClick={closeModal}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            backgroundColor: "rgba(0,0,0,0.92)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "1rem",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative", width: "100%", maxWidth: "900px",
              borderRadius: "12px", overflow: "hidden",
              boxShadow: "0 0 80px rgba(200,23,29,0.2)",
            }}
          >
            <video
              ref={modalVideoRef}
              src={src}
              autoPlay
              loop
              playsInline
              style={{ width: "100%", display: "block", maxHeight: "80vh", objectFit: "contain", backgroundColor: "#000" }}
            />
            {/* Modal controls */}
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              padding: "12px 16px",
              background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
              display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>
              <button onClick={toggleModalMute} style={{
                width: "36px", height: "36px", borderRadius: "50%",
                backgroundColor: "rgba(0,0,0,0.6)",
                border: "1px solid rgba(255,255,255,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer",
              }}>
                {isModalMuted ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                    <line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                  </svg>
                )}
              </button>
              <button onClick={closeModal} style={{
                display: "flex", alignItems: "center", gap: "6px",
                padding: "6px 16px", borderRadius: "6px",
                backgroundColor: "rgba(200,23,29,0.85)",
                border: "none", color: "#fff",
                fontSize: "13px", fontWeight: 500,
                cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
                Close
              </button>
            </div>
          </div>
        </div>,
        document.body 
      )}

      {/* ── THUMBNAIL ── */}
      <div
        style={{ position: "relative", overflow: "hidden", height: "200px", cursor: "pointer" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          style={{
            width: "100%", height: "200px", objectFit: "cover", display: "block",
            transition: "transform 0.4s",
            transform: isHovered ? "scale(1.02)" : "scale(1)",
          }}
        />

        {/* Play overlay — visible when NOT hovered */}
        {!isHovered && (
          <div style={{
            position: "absolute", inset: 0,
            backgroundColor: "rgba(0,0,0,0.4)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <div style={{
              width: "52px", height: "52px", borderRadius: "50%",
              backgroundColor: "rgba(200,23,29,0.9)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 4px 20px rgba(200,23,29,0.4)",
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
          </div>
        )}

        {/* Click to expand hint */}
        {isHovered && (
          <div style={{
            position: "absolute", top: "10px", left: "50%", transform: "translateX(-50%)",
            backgroundColor: "rgba(0,0,0,0.55)",
            borderRadius: "6px", padding: "3px 10px",
            display: "flex", alignItems: "center", gap: "5px",
            backdropFilter: "blur(4px)", pointerEvents: "none",
          }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
              <polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/>
              <line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>
            </svg>
            <span style={{ fontSize: "10px", color: "#fff", letterSpacing: "0.5px" }}>Click to expand</span>
          </div>
        )}

        {/* Mute/Unmute button */}
        {isHovered && (
          <button
            onClick={toggleMute}
            style={{
              position: "absolute", bottom: "10px", right: "10px",
              width: "32px", height: "32px", borderRadius: "50%",
              backgroundColor: "rgba(0,0,0,0.65)",
              border: "1px solid rgba(255,255,255,0.2)",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(200,23,29,0.85)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.65)")}
          >
            {isMuted ? (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                <line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>
              </svg>
            ) : (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
              </svg>
            )}
          </button>
        )}

        {/* Demo badge */}
        <div style={{
          position: "absolute", top: "10px", left: "10px",
          backgroundColor: isDark ? "rgba(20,20,20,0.85)" : "rgba(255,255,255,0.9)",
          border: "1px solid rgba(200,23,29,0.3)",
          borderRadius: "6px", padding: "3px 10px",
          display: "flex", alignItems: "center", gap: "5px",
          backdropFilter: "blur(4px)",
        }}>
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#c8171d" }} />
          <span style={{ fontSize: "10px", fontWeight: 600, color: "#c8171d", letterSpacing: "1px", textTransform: "uppercase" }}>
            Demo
          </span>
        </div>
      </div>
    </>
  );
};

// ─── PROJECT CARD ─────────────────────────────────────────────────
const ProjectCard = ({ project, isDark }: { project: Project; isDark: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      whileHover={{
        y: -6,
        boxShadow: isDark ? "0 20px 40px rgba(0,0,0,0.4)" : "0 20px 40px rgba(0,0,0,0.1)",
      }}
      style={{
        backgroundColor: isDark ? "#161616" : "#ffffff",
        border: `1px solid ${isDark ? "#2a2a2a" : "#eeeeee"}`,
        borderRadius: "14px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        cursor: "default",
      }}
    >
      {/* MEDIA */}
      {project.video ? (
        <VideoMedia src={project.video} isDark={isDark} />
      ) : (
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: "100%", height: "200px", objectFit: "cover", display: "block", transition: "transform 0.4s" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
          {project.deployed && (
            <div style={{
              position: "absolute", top: "12px", right: "12px",
              backgroundColor: "#c8171d", color: "#fff",
              fontSize: "10px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase",
              padding: "4px 10px", borderRadius: "999px",
              display: "flex", alignItems: "center", gap: "5px",
            }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#fff", display: "inline-block" }} />
              Live
            </div>
          )}
        </div>
      )}

      {/* CONTENT */}
      <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.75rem", flex: 1 }}>
        <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 700, fontFamily: "'Playfair Display', serif", color: isDark ? "#ffffff" : "#111111" }}>
          {project.title}
        </h3>

        <p style={{ margin: 0, fontSize: "13.5px", lineHeight: 1.65, color: isDark ? "#888888" : "#666666", flex: 1 }}>
          {project.description}
        </p>

        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{
              fontSize: "11px", fontWeight: 500,
              color: isDark ? "#888" : "#777",
              backgroundColor: isDark ? "#1e1e1e" : "#f5f5f5",
              border: `1px solid ${isDark ? "#2a2a2a" : "#e8e8e8"}`,
              borderRadius: "5px", padding: "3px 8px",
            }}>
              {tag}
            </span>
          ))}
        </div>

        <div style={{ height: "1px", backgroundColor: isDark ? "#2a2a2a" : "#eeeeee" }} />

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12.5px", color: isDark ? "#aaaaaa" : "#555555", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#c8171d")}
            onMouseLeave={(e) => (e.currentTarget.style.color = isDark ? "#aaaaaa" : "#555555")}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            Source Code
          </a>

          {project.deployed && project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12.5px", fontWeight: 500, color: "#c8171d", textDecoration: "none", transition: "opacity 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              View Live
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// ─── PROJECTS SECTION ─────────────────────────────────────────────
const Projects = ({ isDark }: ProjectsProps) => {
  const [showAll, setShowAll] = useState(false);
  const { isMobile, isTablet } = useWindowSize();

  const visibleProjects = showAll ? projects : projects.slice(0, 6);
  const gridCols = isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)";
  const sectionPadding = isMobile ? "3rem 1.5rem" : isTablet ? "4rem 3rem" : "6rem";

  return (
    <section
      id="projects"
      style={{
        backgroundColor: isDark ? "#0d0d0d" : "#f9f9f9",
        padding: sectionPadding,
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
          transition={{ duration: 0.5 }}
          style={{ fontSize: isMobile ? "1.8rem" : "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 700, fontFamily: "'Playfair Display', serif", color: isDark ? "#ffffff" : "#111111", margin: "0 0 0.75rem 0" }}
        >
          Featured <span style={{ color: "#c8171d" }}>Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ fontSize: "15px", color: isDark ? "#888" : "#777", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}
        >
          A selection of projects I have built — from web apps to AI-powered tools.
        </motion.p>
      </div>

      {/* GRID */}
      <motion.div layout style={{ display: "grid", gridTemplateColumns: gridCols, gap: isMobile ? "1.25rem" : "1.75rem" }}>
        <AnimatePresence>
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} isDark={isDark} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* VIEW MORE */}
      {projects.length > 6 && (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ textAlign: "center", marginTop: "3rem" }}>
          <div style={{ width: "100%", height: "1px", backgroundColor: isDark ? "#2a2a2a" : "#e8e8e8", marginBottom: "2rem", position: "relative" }}>
            <span style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", backgroundColor: isDark ? "#0d0d0d" : "#f9f9f9", padding: "0 1.5rem", fontSize: "12px", color: isDark ? "#555" : "#aaa", letterSpacing: "1.5px", textTransform: "uppercase", whiteSpace: "nowrap" }}>
              {showAll ? "Showing all projects" : `${projects.length - 6} more projects`}
            </span>
          </div>
          <button onClick={() => setShowAll(!showAll)}
            style={{ padding: "0 2rem", height: "48px", backgroundColor: "transparent", border: `1.5px solid ${isDark ? "#333" : "#ddd"}`, borderRadius: "8px", color: isDark ? "#ffffff" : "#111111", fontSize: "14px", fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", transition: "all 0.2s", display: "inline-flex", alignItems: "center", gap: "8px" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#c8171d"; e.currentTarget.style.color = "#c8171d"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = isDark ? "#333" : "#ddd"; e.currentTarget.style.color = isDark ? "#ffffff" : "#111111"; }}
          >
            {showAll ? "Show Less" : "View More"}
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;