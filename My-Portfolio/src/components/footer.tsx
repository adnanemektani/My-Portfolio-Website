import { motion } from "framer-motion";

interface FooterProps {
  isDark: boolean;
}

const navLinks = ["Home", "Projects", "Experience", "Skills", "About"];
const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/adnanemektani",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/adnanemektani",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/adnane_mektani/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
  },
];

const Footer = ({ isDark }: FooterProps) => {
  return (
    <footer
      style={{
        backgroundColor: isDark ? "#080808" : "#111111",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* top red line */}
      <div style={{ height: "3px", background: "linear-gradient(90deg, transparent, #c8171d, transparent)" }} />

      {/* MAIN FOOTER CONTENT */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "4rem 2.5rem 2.5rem" }}>
        <div style={{ display: "flex", gap: "4rem", justifyContent: "space-between", flexWrap: "wrap", marginBottom: "3rem" }}>

          {/* LEFT — LOGO + BIO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ flex: "0 0 280px" }}
          >
            <div style={{ marginBottom: "1rem" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 700, color: "#ffffff", lineHeight: 1.15 }}>
                Adnane
              </div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 700, color: "#c8171d", lineHeight: 1.15 }}>
                Mektani
              </div>
              <div style={{ fontSize: "11px", color: "#555", letterSpacing: "2px", textTransform: "uppercase", marginTop: "4px" }}>
                Fullstack · AI Engineer
              </div>
            </div>
            <p style={{ margin: 0, fontSize: "13.5px", lineHeight: 1.8, color: "#666", maxWidth: "260px" }}>
              Building smart digital products — from web apps to AI-powered solutions. Available for freelance & collaboration.
            </p>
          </motion.div>

          {/* CENTER — NAV */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p style={{ margin: "0 0 1rem", fontSize: "11px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "#444" }}>
              Navigation
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  style={{ fontSize: "14px", color: "#777", textDecoration: "none", transition: "color 0.18s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#c8171d")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#777")}
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p style={{ margin: "0 0 1rem", fontSize: "11px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "#444" }}>
              Get in Touch
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <a href="mailto:adnane.mektani@email.com"
                style={{ fontSize: "13.5px", color: "#777", textDecoration: "none", transition: "color 0.18s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#c8171d")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#777")}
              >
                adnanemektani02@email.com
              </a>
              <span style={{ fontSize: "13px", color: "#555" }}>Casablanca, Morocco</span>
            </div>

            {/* SOCIAL */}
            <div style={{ display: "flex", gap: "0.6rem", marginTop: "1.25rem" }}>
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.name}
                  style={{
                    width: "36px", height: "36px", borderRadius: "8px",
                    backgroundColor: "#1a1a1a",
                    border: "1px solid #2a2a2a",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#666", textDecoration: "none",
                    transition: "border-color 0.2s, color 0.2s, background-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#c8171d";
                    e.currentTarget.style.color = "#c8171d";
                    e.currentTarget.style.backgroundColor = "rgba(200,23,29,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#2a2a2a";
                    e.currentTarget.style.color = "#666";
                    e.currentTarget.style.backgroundColor = "#1a1a1a";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* BOTTOM BAR */}
        <div style={{
          borderTop: "1px solid #1e1e1e",
          paddingTop: "1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.75rem",
        }}>
          <p style={{ margin: 0, fontSize: "12.5px", color: "#444" }}>
            © {new Date().getFullYear()} <span style={{ color: "#c8171d" }}>Adnane Mektani</span>. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;