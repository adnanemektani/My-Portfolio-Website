import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import heroImg from "../assets/Layer 0.png";
import useWindowSize from "../hooks/useWindowSize";

interface HeroProps {
  isDark: boolean;
}

const useCounter = (target: number, duration: number = 1500) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return { count, ref };
};

const StatItem = ({ number, suffix, label, isDark }: { number: number; suffix: string; label: string; isDark: boolean }) => {
  const { count, ref } = useCounter(number);
  return (
    <div ref={ref} style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
      <span style={{ fontSize: "22px", fontWeight: 700, color: "#c8171d", fontFamily: "'Playfair Display', serif" }}>
        {count}{suffix}
      </span>
      <span style={{ fontSize: "11.5px", color: isDark ? "#888" : "#999", letterSpacing: "0.5px" }}>
        {label}
      </span>
    </div>
  );
};

const Hero = ({ isDark }: HeroProps) => {
  const { isMobile, isTablet } = useWindowSize();
  const isSmall = isMobile || isTablet;

  return (
    <section
      style={{
        minHeight: "calc(100vh - 108px)",
        backgroundColor: isDark ? "#0d0d0d" : "#ffffff",
        display: "flex",
        flexDirection: isSmall ? "column" : "row",
        alignItems: "center",
        justifyContent: isSmall ? "flex-start" : "center",
        padding: isMobile ? "2.5rem 1.5rem" : isTablet ? "3rem 3rem" : "0 6rem",
        gap: isSmall ? "2rem" : "4rem",
        fontFamily: "'DM Sans', sans-serif",
        transition: "background-color 0.3s",
        overflow: "hidden",
      }}
    >
      {/* IMAGE — top on mobile */}
      {isSmall && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: isMobile ? "1rem" : "0",
          }}
        >
          <img
            src={heroImg}
            alt="Adnane Mektani"
            style={{
              width: isMobile ? "220px" : "320px",
              objectFit: "contain",
              filter: isDark
                ? "drop-shadow(0 10px 30px rgba(200,23,29,0.2))"
                : "drop-shadow(0 10px 30px rgba(0,0,0,0.1))",
            }}
          />
        </motion.div>
      )}

      {/* LEFT — TEXT */}
      <div
        style={{
          flex: isSmall ? "unset" : 1,
          width: isSmall ? "100%" : "auto",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            backgroundColor: isDark ? "rgba(200,23,29,0.12)" : "rgba(200,23,29,0.08)",
            border: "1px solid rgba(200,23,29,0.25)",
            borderRadius: "999px",
            padding: "6px 14px",
            width: "fit-content",
          }}
        >
          <span style={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: "#c8171d", display: "inline-block" }} />
          <span style={{ fontSize: "12px", color: "#c8171d", fontWeight: 500, letterSpacing: "1px", textTransform: "uppercase" }}>
            Available for projects
          </span>
        </motion.div>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: isMobile ? "2rem" : isTablet ? "2.4rem" : "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 700,
            fontFamily: "'Playfair Display', serif",
            color: isDark ? "#ffffff" : "#111111",
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          Fullstack Developer
          <br />
          <span style={{ color: "#c8171d" }}>&amp; AI Engineer</span>
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: isMobile ? "14.5px" : "15.5px",
            lineHeight: 1.75,
            color: isDark ? "#aaaaaa" : "#555555",
            maxWidth: isSmall ? "100%" : "480px",
            margin: 0,
          }}
        >
          Vous avez une idée, une entreprise à digitaliser, ou un produit à construire ?
          Je transforme vos ambitions en solutions concrètes — applications web sur mesure,
          intégration d'intelligence artificielle, et automatisation intelligente.
          <br /><br />
          <span style={{ color: isDark ? "#dddddd" : "#222222", fontWeight: 500 }}>
            Startup, PME ou projet individuel, construisons quelque chose qui compte.
          </span>
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              padding: "0 1.75rem",
              height: "48px",
              backgroundColor: "#c8171d",
              border: "none",
              borderRadius: "8px",
              color: "#ffffff",
              fontSize: "14.5px",
              fontWeight: 500,
              cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
              transition: "background-color 0.2s",
              flex: isMobile ? 1 : "unset",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#a01015")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#c8171d")}
          >
            Get In Touch
          </button>

          <button
            style={{
              padding: "0 1.75rem",
              height: "48px",
              backgroundColor: "transparent",
              border: `1.5px solid ${isDark ? "#444" : "#ddd"}`,
              borderRadius: "8px",
              color: isDark ? "#ffffff" : "#111111",
              fontSize: "14.5px",
              fontWeight: 500,
              cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
              transition: "border-color 0.2s, color 0.2s",
              flex: isMobile ? 1 : "unset",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#c8171d";
              e.currentTarget.style.color = "#c8171d";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = isDark ? "#444" : "#ddd";
              e.currentTarget.style.color = isDark ? "#ffffff" : "#111111";
            }}
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Projects
          </button>
        </motion.div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            display: "flex",
            gap: isMobile ? "1.5rem" : "2rem",
            marginTop: "0.5rem",
            flexWrap: "wrap",
          }}
        >
          {[
            { number: 3, suffix: "+", label: "Projects Built" },
            { number: 5, suffix: "+", label: "Years Learning" },
            { number: 100, suffix: "%", label: "Dedication" },
          ].map((stat) => (
            <StatItem key={stat.label} {...stat} isDark={isDark} />
          ))}
        </motion.div>
      </div>

      {/* RIGHT — IMAGE desktop only */}
      {!isSmall && (
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          <img
            src={heroImg}
            alt="Adnane Mektani"
            style={{
              width: "100%",
              maxWidth: "580px",
              objectFit: "contain",
              filter: isDark
                ? "drop-shadow(0 20px 60px rgba(200,23,29,0.15))"
                : "drop-shadow(0 20px 60px rgba(0,0,0,0.08))",
              transition: "filter 0.3s",
            }}
          />
        </motion.div>
      )}
    </section>
  );
};

export default Hero;