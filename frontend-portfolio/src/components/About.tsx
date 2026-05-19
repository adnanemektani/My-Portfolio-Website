import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AboutProps {
  isDark: boolean;
}

const educationItems = [
  {
    id: 1,
    school: "Faculté des sciences Ain Chock",
    degree: "Master",
    field: "Computer Engineering and Artificial Intelligence",
    period: "Nov 2025 - Aug 2027",
    current: true,
  },
  {
    id: 2,
    school: "Faculté des sciences Ain Chock",
    degree: "Licence Professionnelle",
    field: "Développement Full Stack et DevOps",
    period: "Sep 2023 - Sep 2024",
    current: false,
  },
  {
    id: 3,
    school: "EMPSI",
    degree: "Bachelor",
    field: "Marketing Digital",
    period: "Oct 2023 - Oct 2024",
    current: false,
  },
  {
    id: 4,
    school: "Faculté des sciences Ain Chock",
    degree: "Licence Fondamentale",
    field: "Cell and Molecular Biology",
    period: "Oct 2022 - Jul 2025",
    current: false,
  },
  {
    id: 5,
    school: "EMPSI",
    degree: "Cycle Préparatoire",
    field: "Advertising et Développement Digital",
    period: "Oct 2021 - Jul 2023",
    current: false,
  },
  {
    id: 6,
    school: "Lycée Ibnou Arabi",
    degree: "Baccalauréat",
    field: "Sciences de la vie et de la terre",
    period: "Sep 2019 - Sep 2020",
    current: false,
  },
];

const CVModal = ({ isDark, onClose }: { isDark: boolean; onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
    style={{
      position: "fixed",
      inset: 0,
      backgroundColor: "rgba(0,0,0,0.88)",
      zIndex: 9999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
    }}
  >
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 40, opacity: 0 }}
      transition={{ type: "spring", damping: 20 }}
      onClick={(e) => e.stopPropagation()}
      style={{
        backgroundColor: isDark ? "#0f0f0f" : "#ffffff",
        borderRadius: "20px",
        padding: "2.5rem",
        maxWidth: "560px",
        width: "100%",
        border: `1px solid ${isDark ? "#222" : "#eee"}`,
        boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.75rem" }}>
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "12px",
            backgroundColor: "#c8171d",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
        </div>
        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", color: isDark ? "#fff" : "#111", margin: 0 }}>
            Download CV
          </h2>
          <p style={{ fontSize: "13px", color: isDark ? "#666" : "#999", margin: 0 }}>
            Pick the version that fits your needs
          </p>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
        {[
          { title: "AI Engineer", desc: "Machine Learning, LLMs, Python, AI systems", tag: "AI" },
          { title: "MERN Stack Developer", desc: "MongoDB, Express, React, Node.js projects", tag: "JS" },
          { title: "Fullstack + DevOps", desc: "Frontend, backend, Docker, CI/CD, cloud", tag: "OPS" },
        ].map((cv) => (
          <motion.div
            key={cv.title}
            whileHover={{ x: 4 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "1rem 1.25rem",
              border: `1px solid ${isDark ? "#222" : "#eee"}`,
              borderRadius: "12px",
              cursor: "pointer",
              transition: "border-color 0.2s, background 0.2s",
              backgroundColor: isDark ? "#161616" : "#fafafa",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#c8171d";
              e.currentTarget.style.backgroundColor = isDark ? "#1a0a0a" : "#fff5f5";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = isDark ? "#222" : "#eee";
              e.currentTarget.style.backgroundColor = isDark ? "#161616" : "#fafafa";
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                backgroundColor: "rgba(200,23,29,0.08)",
                border: "1px solid rgba(200,23,29,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "9px",
                fontWeight: 800,
                color: "#c8171d",
                letterSpacing: "0.5px",
                flexShrink: 0,
              }}
            >
              {cv.tag}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "14px", fontWeight: 600, color: isDark ? "#fff" : "#111", marginBottom: "2px" }}>
                {cv.title}
              </div>
              <div style={{ fontSize: "12px", color: isDark ? "#666" : "#999" }}>{cv.desc}</div>
            </div>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#c8171d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </motion.div>
        ))}
      </div>

      <button
        onClick={onClose}
        style={{
          marginTop: "1.5rem",
          width: "100%",
          height: "42px",
          backgroundColor: "transparent",
          border: `1px solid ${isDark ? "#2a2a2a" : "#e0e0e0"}`,
          borderRadius: "10px",
          color: isDark ? "#555" : "#aaa",
          fontSize: "13.5px",
          cursor: "pointer",
          fontFamily: "'DM Sans', sans-serif",
          transition: "border-color 0.2s, color 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "#c8171d";
          e.currentTarget.style.color = "#c8171d";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = isDark ? "#2a2a2a" : "#e0e0e0";
          e.currentTarget.style.color = isDark ? "#555" : "#aaa";
        }}
      >
        Close
      </button>
    </motion.div>
  </motion.div>
);

const About = ({ isDark }: AboutProps) => {
  const [showCV, setShowCV] = useState(false);

  return (
    <>
      <section
        style={{
          backgroundColor: isDark ? "#0d0d0d" : "#f5f5f5",
          fontFamily: "'DM Sans', sans-serif",
          transition: "background-color 0.3s",
          overflow: "hidden",
        }}
      >
        {/* TOP HERO STRIP */}
        <div
          style={{
            background: isDark
              ? "linear-gradient(135deg, #0d0d0d 0%, #1a0505 50%, #0d0d0d 100%)"
              : "linear-gradient(135deg, #ffffff 0%, #fff0f0 50%, #ffffff 100%)",
            padding: "5rem 6rem 4rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* BG DECORATION */}
          <div
            style={{
              position: "absolute",
              top: "-80px",
              right: "-80px",
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(200,23,29,0.08) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-60px",
              left: "30%",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(200,23,29,0.05) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* LEFT — TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: "flex", flexDirection: "column", gap: "1.75rem", position: "relative" }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                backgroundColor: isDark ? "rgba(200,23,29,0.1)" : "rgba(200,23,29,0.07)",
                border: "1px solid rgba(200,23,29,0.22)",
                borderRadius: "999px",
                padding: "5px 14px",
                width: "fit-content",
              }}
            >
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#c8171d", display: "inline-block" }} />
              <span style={{ fontSize: "11px", color: "#c8171d", fontWeight: 600, letterSpacing: "1.2px", textTransform: "uppercase" }}>
                About Me
              </span>
            </div>

            <div>
              <h2
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  fontWeight: 700,
                  fontFamily: "'Playfair Display', serif",
                  color: isDark ? "#ffffff" : "#111111",
                  margin: "0 0 0.5rem 0",
                  lineHeight: 1.2,
                }}
              >
                Hi, I am{" "}
                <span
                  style={{
                    color: "#c8171d",
                    position: "relative",
                    display: "inline-block",
                  }}
                >
                  Adnane
                </span>
              </h2>
              <h3
                style={{
                  fontSize: "clamp(1rem, 1.8vw, 1.3rem)",
                  fontWeight: 400,
                  color: isDark ? "#888" : "#777",
                  margin: 0,
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: "0.3px",
                }}
              >
                Fullstack Developer and AI Engineer
              </h3>
            </div>

            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.85,
                color: isDark ? "#999" : "#555",
                margin: 0,
                maxWidth: "460px",
              }}
            >
              Based in Casablanca, Morocco. I build end-to-end digital products from
              clean, responsive interfaces to robust backends and intelligent automation
              systems.
              <br />
              <br />
              Whether you are a startup looking to launch fast, a company entering the
              digital space, or an individual with a product idea — I turn your vision
              into working software.
            </p>

            {/* FOLLOW */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <span style={{ fontSize: "11px", color: isDark ? "#555" : "#bbb", letterSpacing: "1.2px", textTransform: "uppercase" }}>
                Find me on
              </span>
              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "9px 18px",
                  backgroundColor: isDark ? "rgba(200,23,29,0.08)" : "rgba(200,23,29,0.06)",
                  border: "1px solid rgba(200,23,29,0.2)",
                  borderRadius: "9px",
                  color: "#c8171d",
                  textDecoration: "none",
                  fontSize: "13.5px",
                  fontWeight: 500,
                  width: "fit-content",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#c8171d";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = isDark ? "rgba(200,23,29,0.08)" : "rgba(200,23,29,0.06)";
                  e.currentTarget.style.color = "#c8171d";
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn — Adnane Mektani
              </a>
            </div>

            {/* CV BUTTON */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowCV(true)}
              style={{
                padding: "0 2rem",
                height: "52px",
                background: "linear-gradient(135deg, #c8171d 0%, #a01015 100%)",
                border: "none",
                borderRadius: "10px",
                color: "#ffffff",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                width: "fit-content",
                boxShadow: "0 8px 24px rgba(200,23,29,0.3)",
                letterSpacing: "0.3px",
              }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
              Download My CV
            </motion.button>
          </motion.div>

          {/* RIGHT — VISUAL CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ position: "relative" }}
          >
            {/* MAIN CARD */}
            <div
              style={{
                backgroundColor: isDark ? "#111111" : "#ffffff",
                border: `1px solid ${isDark ? "#222" : "#e8e8e8"}`,
                borderRadius: "20px",
                padding: "2.5rem",
                boxShadow: isDark
                  ? "0 30px 60px rgba(0,0,0,0.5)"
                  : "0 30px 60px rgba(0,0,0,0.08)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* RED ACCENT TOP */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: "linear-gradient(90deg, #c8171d, transparent)",
                  borderRadius: "20px 20px 0 0",
                }}
              />

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {/* IDENTITY */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div
                    style={{
                      width: "54px",
                      height: "54px",
                      borderRadius: "14px",
                      background: "linear-gradient(135deg, #c8171d, #800f12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      fontWeight: 800,
                      color: "#fff",
                      fontFamily: "'Playfair Display', serif",
                      flexShrink: 0,
                    }}
                  >
                    AM
                  </div>
                  <div>
                    <div style={{ fontSize: "16px", fontWeight: 700, color: isDark ? "#fff" : "#111" }}>
                      Adnane Mektani
                    </div>
                    <div style={{ fontSize: "12.5px", color: isDark ? "#666" : "#999" }}>
                      Casablanca, Morocco
                    </div>
                  </div>
                </div>

                {/* DIVIDER */}
                <div style={{ height: "1px", backgroundColor: isDark ? "#1e1e1e" : "#f0f0f0" }} />

                {/* SKILLS QUICK */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {[
                    { label: "Frontend", value: 90, tech: "React, TypeScript, Tailwind" },
                    { label: "Backend", value: 85, tech: "Node.js, Python, FastAPI" },
                    { label: "AI / ML", value: 78, tech: "LLMs, LangChain, RAG" },
                    { label: "DevOps", value: 70, tech: "Docker, CI/CD, AWS" },
                  ].map((skill) => (
                    <div key={skill.label}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: "5px",
                        }}
                      >
                        <div>
                          <span style={{ fontSize: "13px", fontWeight: 600, color: isDark ? "#ddd" : "#222" }}>
                            {skill.label}
                          </span>
                          <span style={{ fontSize: "11px", color: isDark ? "#555" : "#bbb", marginLeft: "8px" }}>
                            {skill.tech}
                          </span>
                        </div>
                        <span style={{ fontSize: "12px", fontWeight: 700, color: "#c8171d" }}>
                          {skill.value}%
                        </span>
                      </div>
                      <div
                        style={{
                          height: "4px",
                          backgroundColor: isDark ? "#1e1e1e" : "#f0f0f0",
                          borderRadius: "999px",
                          overflow: "hidden",
                        }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                          style={{
                            height: "100%",
                            background: "linear-gradient(90deg, #c8171d, #ff4a4a)",
                            borderRadius: "999px",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* DIVIDER */}
                <div style={{ height: "1px", backgroundColor: isDark ? "#1e1e1e" : "#f0f0f0" }} />

                {/* QUICK STATS */}
                <div style={{ display: "flex", gap: "1rem" }}>
                  {[
                    { n: "15+", label: "Projects" },
                    { n: "3+", label: "Years" },
                    { n: "100%", label: "Dedication" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      style={{
                        flex: 1,
                        textAlign: "center",
                        padding: "0.75rem",
                        backgroundColor: isDark ? "#161616" : "#f9f9f9",
                        borderRadius: "10px",
                        border: `1px solid ${isDark ? "#1e1e1e" : "#eeeeee"}`,
                      }}
                    >
                      <div style={{ fontSize: "18px", fontWeight: 800, color: "#c8171d", fontFamily: "'Playfair Display', serif" }}>
                        {s.n}
                      </div>
                      <div style={{ fontSize: "11px", color: isDark ? "#555" : "#aaa", marginTop: "2px" }}>
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FLOATING BADGE */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                bottom: "-16px",
                left: "-20px",
                backgroundColor: isDark ? "#161616" : "#ffffff",
                border: "1px solid rgba(200,23,29,0.25)",
                borderRadius: "12px",
                padding: "10px 16px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#22c55e",
                  boxShadow: "0 0 8px rgba(34,197,94,0.6)",
                }}
              />
              <span style={{ fontSize: "12px", fontWeight: 600, color: isDark ? "#ddd" : "#333" }}>
                Available for work
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* EDUCATION SECTION */}
        <div
          style={{
            padding: "5rem 6rem",
            backgroundColor: isDark ? "#0a0a0a" : "#ffffff",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: "center", marginBottom: "3.5rem" }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                backgroundColor: isDark ? "rgba(200,23,29,0.1)" : "rgba(200,23,29,0.07)",
                border: "1px solid rgba(200,23,29,0.22)",
                borderRadius: "999px",
                padding: "5px 14px",
                marginBottom: "1rem",
              }}
            >
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#c8171d", display: "inline-block" }} />
              <span style={{ fontSize: "11px", color: "#c8171d", fontWeight: 600, letterSpacing: "1.2px", textTransform: "uppercase" }}>
                Education
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 700,
                fontFamily: "'Playfair Display', serif",
                color: isDark ? "#ffffff" : "#111111",
                margin: 0,
              }}
            >
              Academic <span style={{ color: "#c8171d" }}>Journey</span>
            </h2>
          </motion.div>

          {/* SNAKE TIMELINE */}
          <div style={{ maxWidth: "860px", margin: "0 auto", position: "relative" }}>
            {educationItems.map((item, index) => {
              const isEven = index % 2 === 0;
              const isLast = index === educationItems.length - 1;

              return (
                <div key={item.id}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 40px 1fr",
                      alignItems: "center",
                      gap: "0",
                    }}
                  >
                    {/* LEFT SLOT */}
                    <div style={{ padding: "0 1.5rem 0 0" }}>
                      {isEven && (
                        <motion.div
                          initial={{ opacity: 0, x: -25 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.08 }}
                          style={{
                            padding: "1.25rem 1.5rem",
                            backgroundColor: isDark ? "#111111" : "#ffffff",
                            border: item.current
                              ? "1.5px solid #c8171d"
                              : `1px solid ${isDark ? "#222" : "#ebebeb"}`,
                            borderRadius: "14px",
                            position: "relative",
                            boxShadow: item.current
                              ? "0 0 24px rgba(200,23,29,0.12)"
                              : isDark ? "none" : "0 4px 16px rgba(0,0,0,0.04)",
                          }}
                        >
                          {item.current && (
                            <div
                              style={{
                                position: "absolute",
                                top: "10px",
                                right: "10px",
                                backgroundColor: "#c8171d",
                                color: "#fff",
                                fontSize: "8.5px",
                                fontWeight: 700,
                                letterSpacing: "1px",
                                textTransform: "uppercase",
                                padding: "3px 8px",
                                borderRadius: "999px",
                              }}
                            >
                              Current
                            </div>
                          )}
                          <div style={{ fontSize: "10px", color: "#c8171d", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "5px" }}>
                            {item.degree}
                          </div>
                          <div style={{ fontSize: "14.5px", fontWeight: 700, color: isDark ? "#ffffff" : "#111", fontFamily: "'Playfair Display', serif", lineHeight: 1.3, marginBottom: "5px" }}>
                            {item.field}
                          </div>
                          <div style={{ fontSize: "12.5px", color: isDark ? "#777" : "#888" }}>
                            {item.school}
                          </div>
                          <div style={{ fontSize: "11px", color: isDark ? "#444" : "#bbb", marginTop: "6px" }}>
                            {item.period}
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* CENTER — DOT */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div
                        style={{
                          width: "14px",
                          height: "14px",
                          borderRadius: "50%",
                          backgroundColor: item.current ? "#c8171d" : isDark ? "#2a2a2a" : "#d8d8d8",
                          border: `2px solid ${item.current ? "#c8171d" : isDark ? "#444" : "#c0c0c0"}`,
                          boxShadow: item.current ? "0 0 14px rgba(200,23,29,0.5)" : "none",
                          zIndex: 2,
                          flexShrink: 0,
                        }}
                      />
                    </div>

                    {/* RIGHT SLOT */}
                    <div style={{ padding: "0 0 0 1.5rem" }}>
                      {!isEven && (
                        <motion.div
                          initial={{ opacity: 0, x: 25 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.08 }}
                          style={{
                            padding: "1.25rem 1.5rem",
                            backgroundColor: isDark ? "#111111" : "#ffffff",
                            border: `1px solid ${isDark ? "#222" : "#ebebeb"}`,
                            borderRadius: "14px",
                            boxShadow: isDark ? "none" : "0 4px 16px rgba(0,0,0,0.04)",
                          }}
                        >
                          <div style={{ fontSize: "10px", color: "#c8171d", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "5px" }}>
                            {item.degree}
                          </div>
                          <div style={{ fontSize: "14.5px", fontWeight: 700, color: isDark ? "#ffffff" : "#111", fontFamily: "'Playfair Display', serif", lineHeight: 1.3, marginBottom: "5px" }}>
                            {item.field}
                          </div>
                          <div style={{ fontSize: "12.5px", color: isDark ? "#777" : "#888" }}>
                            {item.school}
                          </div>
                          <div style={{ fontSize: "11px", color: isDark ? "#444" : "#bbb", marginTop: "6px" }}>
                            {item.period}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* CONNECTOR */}
                  {!isLast && (
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 40px 1fr",
                        height: "44px",
                      }}
                    >
                      <div />
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "2px",
                            height: "100%",
                            background: isDark
                              ? "linear-gradient(to bottom, #2a2a2a, #1a1a1a)"
                              : "linear-gradient(to bottom, #e0e0e0, #ececec)",
                          }}
                        />
                      </div>
                      <div />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {showCV && <CVModal isDark={isDark} onClose={() => setShowCV(false)} />}
      </AnimatePresence>
    </>
  );
};

export default About;