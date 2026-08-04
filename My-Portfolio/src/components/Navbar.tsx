import { useState, useEffect } from "react";

interface NavbarProps {
  isDark: boolean;
  setIsDark: (val: boolean) => void;
  onContactClick: () => void;
}

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
];

const socialLinks = [
  { icon: "linkedin", href: "https://linkedin.com/in/adnanemektani" },
  { icon: "github", href: "https://github.com/adnanemektani" },
  { icon: "instagram", href: "https://www.instagram.com/adnane_mektani/" },
];

const Navbar = ({ isDark, setIsDark, onContactClick }: NavbarProps) => {
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["home", "projects", "experience", "skills", "about"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const match = navLinks.find((l) => l.href === `#${id}`);
            if (match) setActiveLink(match.label);
          }
        });
      },
      { rootMargin: "-108px 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.15)" : "none",
        transition: "box-shadow 0.3s",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          backgroundColor: isDark ? "#111111" : "#ffffff",
          borderBottom: `1.5px solid ${isDark ? "#2a2a2a" : "#e8e8e8"}`,
          padding: "0 2.5rem",
          height: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          fontFamily: "'DM Sans', sans-serif",
          transition: "background-color 0.3s, border-color 0.3s",
        }}
      >
        {/* LOGO */}
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.15, flexShrink: 0 }}>
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "20px",
              fontWeight: 700,
              color: isDark ? "#ffffff" : "#111111",
              transition: "color 0.3s",
            }}
          >
            Adnane
          </span>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 700, color: "#c8171d" }}>
            Mektani
          </span>
        </div>

        {/* NAV LINKS */}
        <div style={{ display: "flex", alignItems: "center" }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActiveLink(link.label)}
              style={{
                fontSize: "13.5px",
                fontWeight: activeLink === link.label ? 500 : 400,
                color: activeLink === link.label ? "#c8171d" : isDark ? "#cccccc" : "#444444",
                padding: "6px 12px",
                cursor: "pointer",
                textDecoration: "none",
                whiteSpace: "nowrap",
                borderBottom: activeLink === link.label ? "2px solid #c8171d" : "2px solid transparent",
                transition: "all 0.18s",
              }}
              onMouseEnter={(e) => { if (activeLink !== link.label) e.currentTarget.style.color = "#c8171d"; }}
              onMouseLeave={(e) => { if (activeLink !== link.label) e.currentTarget.style.color = isDark ? "#cccccc" : "#444444"; }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", flexShrink: 0 }}>
          {/* DARK MODE TOGGLE */}
          <div
            onClick={() => setIsDark(!isDark)}
            style={{
              width: "52px",
              height: "28px",
              background: isDark ? "#111" : "#f0f0f0",
              border: `1.5px solid ${isDark ? "#444" : "#ccc"}`,
              borderRadius: "14px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              padding: "0 4px",
              transition: "background 0.3s, border-color 0.3s",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                background: isDark ? "#333" : "#fff",
                borderRadius: "50%",
                transform: isDark ? "translateX(24px)" : "translateX(0)",
                transition: "transform 0.3s, background 0.3s",
                boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {isDark ? (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round">
                  <circle cx="12" cy="12" r="4" />
                  <line x1="12" y1="2" x2="12" y2="5" />
                  <line x1="12" y1="19" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="5" y2="12" />
                  <line x1="19" y1="12" x2="22" y2="12" />
                  <line x1="4.9" y1="4.9" x2="7.1" y2="7.1" />
                  <line x1="16.9" y1="16.9" x2="19.1" y2="19.1" />
                  <line x1="19.1" y1="4.9" x2="16.9" y2="7.1" />
                  <line x1="7.1" y1="16.9" x2="4.9" y2="19.1" />
                </svg>
              )}
            </div>
          </div>

          {/* GET IN TOUCH BUTTON */}
          <button
            onClick={onContactClick}
            style={{
              padding: "0 1.3rem",
              height: "38px",
              backgroundColor: "#c8171d",
              border: "none",
              borderRadius: "7px",
              color: "#ffffff",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "13.5px",
              fontWeight: 500,
              cursor: "pointer",
              whiteSpace: "nowrap",
              flexShrink: 0,
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#a01015")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#c8171d")}
          >
            Get In Touch
          </button>
        </div>
      </nav>

      {/* MARKETING BAR */}
      <div
        style={{
          backgroundColor: "#c8171d",
          padding: "3px 3rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.3rem",
          flexWrap: "wrap",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.92)", letterSpacing: "1.8px", textTransform: "uppercase", margin: 0 }}>
          Smart Code,{" "}
          <strong style={{ color: "#fff", fontWeight: 600 }}>Smarter Solutions</strong>
        </p>
        <div style={{ width: "1px", height: "16px", background: "rgba(255,255,255,0.35)" }} />
        <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
          {socialLinks.map(({ icon, href }) => (
            <a
              key={icon}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: "14px",
                textDecoration: "none",
                transition: "background 0.18s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.3)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")}
            >
              <i className={`ti ti-brand-${icon}`} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;