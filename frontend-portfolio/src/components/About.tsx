import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroImg from "../assets/Layer 0.png";

interface AboutProps {
  isDark: boolean;
}

const educationItems = [
  { year: "2020", title: "Baccalauréat", school: "Ibnou Arabi", field: "Sciences de la Vie et de la Terre" },
  { year: "2023", title: "Cycle Préparatoire", school: "EMPSI", field: "Advertising & Développement Digital" },
  { year: "2023", title: "DEUG", school: "Faculté des Sciences Ain Chock", field: "Biology & Biological Sciences" },
  { year: "2024", title: "Bachelor — Marketing Digital", school: "EMPSI", field: "Marketing Digital" },
  { year: "2024", title: "Licence Pro — Full Stack & DevOps", school: "Faculté des Sciences Ain Chock", field: "Développement Full Stack et DevOps" },
  { year: "2025", title: "Master — Computer Engineering & AI", school: "Faculté des Sciences Ain Chock", field: "Computer Engineering and Artificial Intelligence", current: true },
];

const Particles = ({ isDark }: { isDark: boolean }) => (
  <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
    {[...Array(10)].map((_, i) => (
      <motion.div
        key={i}
        style={{
          position: "absolute",
          width: i % 3 === 0 ? "5px" : "3px",
          height: i % 3 === 0 ? "5px" : "3px",
          borderRadius: "50%",
          backgroundColor: i % 2 === 0 ? "rgba(200,23,29,0.4)" : isDark ? "#222" : "#e8e8e8",
          left: `${(i * 17 + 5) % 90}%`,
          top: `${(i * 23 + 10) % 85}%`,
        }}
        animate={{ y: [0, -16, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 3 + (i % 3), repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
      />
    ))}
  </div>
);

const TypeWriter = ({ texts }: { texts: string[] }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else {
      setDeleting(false);
      setTextIndex((i) => (i + 1) % texts.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, textIndex, texts]);

  return (
    <span style={{ color: "#c8171d", fontWeight: 600 }}>
      {displayed}
      <span style={{ display: "inline-block", width: "2px", height: "1em", backgroundColor: "#c8171d", marginLeft: "2px", verticalAlign: "middle", animation: "blink 1s infinite" }} />
    </span>
  );
};

const About = ({ isDark }: AboutProps) => {
  const [showCVModal, setShowCVModal] = useState(false);

  return (
    <section style={{
      backgroundColor: isDark ? "#0d0d0d" : "#ffffff",
      padding: "6rem",
      fontFamily: "'DM Sans', sans-serif",
      transition: "background-color 0.3s",
      position: "relative",
      overflow: "hidden",
    }}>
      <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}`}</style>

      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: "5rem" }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 700, fontFamily: "'Playfair Display', serif", color: isDark ? "#ffffff" : "#111111", margin: 0 }}
        >
          The <span style={{ color: "#c8171d" }}>Story</span> Behind the Code
        </motion.h2>
      </div>

      {/* MAIN LAYOUT */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "4rem", alignItems: "flex-start" }}>

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ flex: "0 0 370px", display: "flex", flexDirection: "column", gap: "2rem" }}
        >
          {/* BIG CARD */}
          <div style={{
            position: "relative", borderRadius: "20px",
            border: `1.5px solid ${isDark ? "#2a2a2a" : "#e8e8e8"}`,
            overflow: "hidden",
            backgroundColor: isDark ? "#111" : "#fafafa",
            boxShadow: isDark ? "0 0 60px rgba(200,23,29,0.06)" : "0 0 60px rgba(0,0,0,0.04)",
          }}>
            {/* subtle red top accent */}
            <div style={{ height: "2px", background: "linear-gradient(90deg, transparent, #c8171d, transparent)" }} />
            <Particles isDark={isDark} />

            <div style={{ position: "relative", zIndex: 1, padding: "1.5rem 1.5rem 0" }}>
              <img
                src={heroImg}
                alt="Adnane Mektani"
                style={{ width: "100%", objectFit: "contain", display: "block", filter: "drop-shadow(0 20px 40px rgba(200,23,29,0.15))" }}
              />
            </div>

            <div style={{ position: "relative", zIndex: 1, padding: "1.25rem 1.5rem 1.5rem", borderTop: `1px solid ${isDark ? "#1e1e1e" : "#f0f0f0"}` }}>
              <p style={{ margin: 0, fontSize: "14px", color: isDark ? "#888" : "#777", lineHeight: 1.6 }}>
                I build{" "}
                <TypeWriter texts={["scalable web apps.", "AI-powered tools.", "clean backends.", "smart automation.", "digital products."]} />
              </p>
              <div style={{ display: "flex", gap: "1.5rem", marginTop: "1rem" }}>
                {[{ val: "4+", label: "Internships" }, { val: "15+", label: "Projects" }, { val: "3+", label: "Years" }].map((s) => (
                  <div key={s.label} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "20px", fontWeight: 700, color: "#c8171d", fontFamily: "'Playfair Display', serif" }}>{s.val}</div>
                    <div style={{ fontSize: "10px", color: isDark ? "#555" : "#aaa", letterSpacing: "0.5px", textTransform: "uppercase" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BIO */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            <p style={{ margin: 0, fontSize: "14.5px", lineHeight: 1.8, color: isDark ? "#888" : "#666" }}>
              Fullstack Developer and AI Engineer based in Casablanca, Morocco. I build end-to-end digital products — from clean interfaces to robust backends and intelligent automation.
            </p>
            <p style={{ margin: 0, fontSize: "14.5px", lineHeight: 1.8, color: isDark ? "#888" : "#666" }}>
              Startup, company, or solo project —{" "}
              <span style={{ color: isDark ? "#ddd" : "#222", fontWeight: 500 }}>I work with any stack and adapt to your vision.</span>
            </p>

            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
              <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "0 1.1rem", height: "40px", backgroundColor: "#0077b5", borderRadius: "7px", color: "#fff", fontSize: "13px", fontWeight: 500, textDecoration: "none", transition: "opacity 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>

              <button onClick={() => setShowCVModal(true)}
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "0 1.1rem", height: "40px", backgroundColor: "transparent", border: `1.5px solid ${isDark ? "#333" : "#e0e0e0"}`, borderRadius: "7px", color: isDark ? "#ccc" : "#444", fontSize: "13px", fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", transition: "border-color 0.2s, color 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#c8171d"; e.currentTarget.style.color = "#c8171d"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = isDark ? "#333" : "#e0e0e0"; e.currentTarget.style.color = isDark ? "#ccc" : "#444"; }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                My CV
              </button>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — EDUCATION TIMELINE */}
        <div style={{ flex: 1 }}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ margin: "0 0 2rem", fontSize: "11px", fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", color: isDark ? "#444" : "#bbb" }}
          >
            Education Path
          </motion.p>

          <div style={{ position: "relative" }}>
            {educationItems.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  style={{ display: "flex", justifyContent: isLeft ? "flex-start" : "flex-end", marginBottom: "1.5rem", position: "relative" }}
                >
                  {/* connector */}
                  {index < educationItems.length - 1 && (
                    <div style={{
                      position: "absolute", left: "50%", top: "100%",
                      width: "1px", height: "1.5rem",
                      backgroundColor: isDark ? "#222" : "#eeeeee",
                      transform: "translateX(-50%)",
                    }} />
                  )}

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    style={{
                      width: "46%",
                      backgroundColor: isDark ? "#141414" : "#fafafa",
                      border: `1px solid ${item.current ? "rgba(200,23,29,0.35)" : isDark ? "#1e1e1e" : "#f0f0f0"}`,
                      borderRadius: "12px",
                      padding: "1rem 1.15rem",
                      position: "relative",
                      transition: "box-shadow 0.2s",
                    }}
                  >
                    {/* year badge — subtle */}
                    <div style={{
                      position: "absolute", top: "-10px",
                      ...(isLeft ? { right: "14px" } : { left: "14px" }),
                      backgroundColor: item.current ? "#c8171d" : isDark ? "#1a1a1a" : "#ffffff",
                      border: `1px solid ${item.current ? "#c8171d" : isDark ? "#2a2a2a" : "#e8e8e8"}`,
                      borderRadius: "999px",
                      padding: "2px 10px",
                      fontSize: "10px", fontWeight: 600,
                      color: item.current ? "#fff" : isDark ? "#555" : "#bbb",
                      letterSpacing: "1px",
                    }}>
                      {item.year}
                    </div>

                    <p style={{ margin: 0, fontSize: "13px", fontWeight: 700, color: isDark ? "#e0e0e0" : "#111111", lineHeight: 1.3 }}>
                      {item.title}
                    </p>
                    <p style={{ margin: "3px 0 0", fontSize: "11.5px", color: "#c8171d", fontWeight: 500 }}>
                      {item.school}
                    </p>
                    <p style={{ margin: "4px 0 0", fontSize: "11px", color: isDark ? "#555" : "#aaa", lineHeight: 1.5 }}>
                      {item.field}
                    </p>

                    {item.current && (
                      <div style={{ display: "inline-flex", alignItems: "center", gap: "5px", marginTop: "6px" }}>
                        <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#c8171d" }} />
                        <span style={{ fontSize: "10px", color: "#c8171d", fontWeight: 600 }}>Current</span>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CV MODAL */}
      <AnimatePresence>
        {showCVModal && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setShowCVModal(false)}
            style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999, backdropFilter: "blur(6px)" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{ backgroundColor: isDark ? "#141414" : "#ffffff", border: `1px solid ${isDark ? "#222" : "#eee"}`, borderRadius: "16px", padding: "2rem", width: "100%", maxWidth: "400px", fontFamily: "'DM Sans', sans-serif" }}
            >
              <h3 style={{ margin: "0 0 0.4rem", fontSize: "20px", fontWeight: 700, fontFamily: "'Playfair Display', serif", color: isDark ? "#fff" : "#111" }}>
                Download <span style={{ color: "#c8171d" }}>CV</span>
              </h3>
              <p style={{ margin: "0 0 1.5rem", fontSize: "13px", color: isDark ? "#666" : "#999" }}>Choose the version that fits your needs.</p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {[
                  { label: "Full CV", desc: "Complete — all experience & skills", file: "/cv-full.pdf" },
                  { label: "Tech CV", desc: "Focused on development & engineering", file: "/cv-tech.pdf" },
                  { label: "AI / ML CV", desc: "Focused on AI, data & automation", file: "/cv-ai.pdf" },
                ].map((cv) => (
                  <a key={cv.label} href={cv.file} download
                    style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.9rem 1.1rem", backgroundColor: isDark ? "#1a1a1a" : "#f9f9f9", border: `1px solid ${isDark ? "#222" : "#eee"}`, borderRadius: "10px", textDecoration: "none", transition: "border-color 0.18s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(200,23,29,0.4)")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = isDark ? "#222" : "#eee")}
                  >
                    <div>
                      <p style={{ margin: 0, fontSize: "14px", fontWeight: 600, color: isDark ? "#e0e0e0" : "#111" }}>{cv.label}</p>
                      <p style={{ margin: "2px 0 0", fontSize: "12px", color: isDark ? "#555" : "#aaa" }}>{cv.desc}</p>
                    </div>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#c8171d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                  </a>
                ))}
              </div>

              <button onClick={() => setShowCVModal(false)}
                style={{ marginTop: "1rem", width: "100%", height: "40px", backgroundColor: "transparent", border: `1px solid ${isDark ? "#2a2a2a" : "#e8e8e8"}`, borderRadius: "8px", color: isDark ? "#555" : "#aaa", fontSize: "13px", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", transition: "border-color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(200,23,29,0.4)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = isDark ? "#2a2a2a" : "#e8e8e8")}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;