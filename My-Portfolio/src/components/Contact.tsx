import { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID       = "service_ea2pyc5";
const TEMPLATE_NOTIFY  = "template_qzdam44";
const TEMPLATE_CONFIRM = "template_iotm2yn";
const PUBLIC_KEY       = "JA0i_MfWPMxOoWi9i";

interface ContactProps {
  isDark: boolean;
  onClose: () => void;
}

type PreferredContact = "email" | "whatsapp" | "";

const PROJECT_TYPES = [
  "Web App",
  "AI Integration",
  "Automation",
  "DevOps / Deployment",
  "Other",
];

const COUNTRIES = [
  "Afghanistan","Albania","Algeria","Andorra","Angola","Argentina","Armenia","Australia","Austria",
  "Azerbaijan","Bahrain","Bangladesh","Belarus","Belgium","Belize","Benin","Bolivia","Bosnia and Herzegovina",
  "Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada",
  "Chad","Chile","China","Colombia","Congo","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic",
  "Denmark","Dominican Republic","Ecuador","Egypt","El Salvador","Estonia","Ethiopia","Finland",
  "France","Georgia","Germany","Ghana","Greece","Guatemala","Honduras","Hungary","India","Indonesia",
  "Iran","Iraq","Ireland","Israel","Italy","Ivory Coast","Jamaica","Japan","Jordan","Kazakhstan",
  "Kenya","Kuwait","Kyrgyzstan","Latvia","Lebanon","Libya","Lithuania","Luxembourg","Madagascar",
  "Malaysia","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Morocco",
  "Mozambique","Myanmar","Namibia","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria",
  "Norway","Oman","Pakistan","Palestine","Panama","Paraguay","Peru","Philippines","Poland","Portugal",
  "Qatar","Romania","Russia","Rwanda","Saudi Arabia","Senegal","Serbia","Singapore","Slovakia",
  "Slovenia","Somalia","South Africa","South Korea","Spain","Sri Lanka","Sudan","Sweden","Switzerland",
  "Syria","Taiwan","Tajikistan","Tanzania","Thailand","Tunisia","Turkey","Uganda","Ukraine",
  "United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Venezuela",
  "Vietnam","Yemen","Zambia","Zimbabwe",
];

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  country: "",
  company: "",
  projectTypes: [] as string[],
  description: "",
  deadline: "",
  preferredContact: "" as PreferredContact,
};

const Contact = ({ isDark, onClose }: ContactProps) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // ── Design tokens — all isDark-aware ──
  const cardBg       = isDark ? "#141414" : "#ffffff";
  const borderColor  = isDark ? "#242424" : "#e8e8e8";
  const dividerColor = isDark ? "#1e1e1e" : "#f0f0f0";
  const textPrimary  = isDark ? "#f0f0f0"  : "#111111";
  const textSecondary= isDark ? "#888888"  : "#666666";
  const textMuted    = isDark ? "#555555"  : "#aaaaaa";
  const inputBg      = isDark ? "#1a1a1a"  : "#fafafa";
  const inputBorder  = isDark ? "#2a2a2a"  : "#e0e0e0";
  const inputBlur    = (hasError?: boolean) => hasError ? "#c8171d" : inputBorder;
  const sectionLabel = isDark ? "#cccccc"  : "#111111";

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim()) e.lastName = "Required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.country) e.country = "Required";
    if (form.preferredContact === "whatsapp" && !form.phone.trim()) e.phone = "Required for WhatsApp";
    if (!form.preferredContact) e.preferredContact = "Please choose one";
    return e;
  };

  const handleSubmit = async () => {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setErrors({});
    setLoading(true);

    const templateParams = {
      first_name: form.firstName,
      last_name: form.lastName,
      email: form.email,
      phone: form.phone || "Not provided",
      country: form.country,
      company: form.company || "Not provided",
      project_types: form.projectTypes.join(", ") || "Not specified",
      description: form.description || "Not provided",
      deadline: form.deadline || "No deadline",
      preferred_contact: form.preferredContact,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_NOTIFY,  templateParams, PUBLIC_KEY);
      await emailjs.send(SERVICE_ID, TEMPLATE_CONFIRM, templateParams, PUBLIC_KEY);
      setSubmitted(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      alert("Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  };

  const toggleProjectType = (type: string) => {
    setForm((prev) => ({
      ...prev,
      projectTypes: prev.projectTypes.includes(type)
        ? prev.projectTypes.filter((t) => t !== type)
        : [...prev.projectTypes, type],
    }));
  };

  const inputStyle = (hasError?: boolean): React.CSSProperties => ({
    width: "100%",
    height: "44px",
    backgroundColor: inputBg,
    border: `1.5px solid ${hasError ? "#c8171d" : inputBorder}`,
    borderRadius: "8px",
    padding: "0 14px",
    fontSize: "14px",
    color: textPrimary,
    fontFamily: "'DM Sans', sans-serif",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  });

  const labelStyle: React.CSSProperties = {
    fontSize: "12.5px",
    fontWeight: 500,
    color: textSecondary,
    letterSpacing: "0.4px",
    marginBottom: "6px",
    display: "block",
  };

  const fieldGroup = (children: React.ReactNode, error?: string) => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {children}
      {error && <span style={{ fontSize: "11.5px", color: "#c8171d", marginTop: "4px" }}>{error}</span>}
    </div>
  );

  const sectionTitle = (num: string, label: React.ReactNode) => (
    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
      <div style={{ width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "#c8171d", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <span style={{ fontSize: "10px", color: "#fff", fontWeight: 700, fontFamily: "'DM Sans', sans-serif" }}>{num}</span>
      </div>
      <span style={{ fontSize: "13px", fontWeight: 600, color: sectionLabel, fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.3px" }}>
        {label}
      </span>
    </div>
  );

  // ─── SUCCESS ─────────────────────────────────────────────────────
  if (submitted) {
    return (
      <div
        style={{ position: "fixed", inset: 0, zIndex: 2000, backgroundColor: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem", backdropFilter: "blur(4px)" }}
        onClick={onClose}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          style={{ backgroundColor: cardBg, border: `1.5px solid ${borderColor}`, borderRadius: "16px", padding: "3rem 2.5rem", maxWidth: "440px", width: "100%", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.25rem" }}
        >
          <div style={{ width: "64px", height: "64px", borderRadius: "50%", backgroundColor: "rgba(200,23,29,0.1)", border: "2px solid #c8171d", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c8171d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <div style={{ width: "40px", height: "3px", backgroundColor: "#c8171d", borderRadius: "2px" }} />
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 700, color: textPrimary, margin: 0 }}>
            Application Sent!
          </h2>
          <p style={{ fontSize: "14.5px", lineHeight: 1.7, color: textSecondary, margin: 0 }}>
            Your request has been successfully submitted.{" "}
            <span style={{ color: textPrimary, fontWeight: 500 }}>I'll get back to you shortly</span> via{" "}
            <span style={{ color: "#c8171d", fontWeight: 600 }}>
              {form.preferredContact === "email" ? "Email" : "WhatsApp"}
            </span>. Looking forward to building something great together!
          </p>
          <button
            onClick={onClose}
            style={{ marginTop: "0.5rem", padding: "0 2rem", height: "44px", backgroundColor: "#c8171d", border: "none", borderRadius: "8px", color: "#fff", fontSize: "14px", fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  // ─── MAIN FORM ───────────────────────────────────────────────────
  return (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 2000, backgroundColor: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)", display: "flex", flexDirection: "column", overflowY: "auto" }}
      onClick={onClose}
    >
      {/* Red top bar */}
      <div style={{ width: "100%", height: "4px", backgroundColor: "#c8171d", flexShrink: 0 }} />

      <div
        style={{ flex: 1, display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "2rem 1rem 3rem" }}
        onClick={onClose}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          style={{ backgroundColor: cardBg, borderRadius: "16px", width: "100%", maxWidth: "680px", overflow: "hidden", boxShadow: isDark ? "0 24px 80px rgba(0,0,0,0.6)" : "0 24px 80px rgba(0,0,0,0.2)", border: `1px solid ${borderColor}` }}
        >
          {/* Header */}
          <div style={{ padding: "2rem 2.5rem 1.5rem", borderBottom: `1.5px solid ${borderColor}`, display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                <div style={{ width: "28px", height: "3px", backgroundColor: "#c8171d", borderRadius: "2px" }} />
                <span style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "#c8171d", fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>
                  New Inquiry
                </span>
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", fontWeight: 700, color: textPrimary, margin: 0 }}>
                Start Your Project
              </h2>
              <p style={{ fontSize: "13.5px", color: textMuted, margin: "6px 0 0", fontFamily: "'DM Sans', sans-serif" }}>
                Fill in the details below and I'll get back to you quickly.
              </p>
            </div>
            <button
              onClick={onClose}
              style={{ width: "34px", height: "34px", borderRadius: "50%", border: `1.5px solid ${borderColor}`, backgroundColor: isDark ? "#1e1e1e" : "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={isDark ? "#888" : "#666"} strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Form body */}
          <div style={{ padding: "2rem 2.5rem", display: "flex", flexDirection: "column", gap: "2rem", backgroundColor: cardBg }}>

            {/* BLOC 1: Personal Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {sectionTitle("1", "Your Information")}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                {fieldGroup(
                  <>
                    <label style={labelStyle}>First Name <span style={{ color: "#c8171d" }}>*</span></label>
                    <input style={inputStyle(!!errors.firstName)} placeholder="" value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#c8171d")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = inputBlur(!!errors.firstName))}
                    />
                  </>, errors.firstName
                )}
                {fieldGroup(
                  <>
                    <label style={labelStyle}>Last Name <span style={{ color: "#c8171d" }}>*</span></label>
                    <input style={inputStyle(!!errors.lastName)} placeholder="" value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#c8171d")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = inputBlur(!!errors.lastName))}
                    />
                  </>, errors.lastName
                )}
              </div>

              {fieldGroup(
                <>
                  <label style={labelStyle}>Email Address <span style={{ color: "#c8171d" }}>*</span></label>
                  <input type="email" style={inputStyle(!!errors.email)} placeholder="name@company.com" value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#c8171d")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = inputBlur(!!errors.email))}
                  />
                </>, errors.email
              )}

              {fieldGroup(
                <>
                  <label style={labelStyle}>
                    Phone Number <span style={{ color: textMuted, fontWeight: 400, marginLeft: "6px" }}>(optional)</span>
                    {form.preferredContact === "whatsapp" && <span style={{ color: "#c8171d", marginLeft: "4px" }}>*</span>}
                  </label>
                  <input type="tel" style={inputStyle(!!errors.phone)} placeholder="+212 6XX XXX XXX" value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#c8171d")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = inputBlur(!!errors.phone))}
                  />
                </>, errors.phone
              )}

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                {fieldGroup(
                  <>
                    <label style={labelStyle}>Country <span style={{ color: "#c8171d" }}>*</span></label>
                    <div style={{ position: "relative" }}>
                      <select
                        style={{ ...inputStyle(!!errors.country), appearance: "none", paddingRight: "36px", cursor: "pointer", color: form.country ? textPrimary : textMuted }}
                        value={form.country}
                        onChange={(e) => setForm({ ...form, country: e.target.value })}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "#c8171d")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = inputBlur(!!errors.country))}
                      >
                        <option value="" disabled>Select country</option>
                        {COUNTRIES.map((c) => <option key={c} value={c} style={{ backgroundColor: cardBg, color: textPrimary }}>{c}</option>)}
                      </select>
                      <svg style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={isDark ? "#666" : "#888"} strokeWidth="2.5" strokeLinecap="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </>, errors.country
                )}
                {fieldGroup(
                  <>
                    <label style={labelStyle}>Company / Project Name <span style={{ color: textMuted, fontWeight: 400, marginLeft: "6px" }}>(optional)</span></label>
                    <input style={inputStyle()} placeholder="" value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#c8171d")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = inputBorder)}
                    />
                  </>
                )}
              </div>
            </div>

            <div style={{ height: "1px", backgroundColor: dividerColor }} />

            {/* BLOC 2: Project Type */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {sectionTitle("2", "Project Type")}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                {PROJECT_TYPES.map((type) => {
                  const active = form.projectTypes.includes(type);
                  return (
                    <button key={type} onClick={() => toggleProjectType(type)}
                      style={{
                        padding: "8px 16px", borderRadius: "999px",
                        border: `1.5px solid ${active ? "#c8171d" : inputBorder}`,
                        backgroundColor: active ? "rgba(200,23,29,0.1)" : inputBg,
                        color: active ? "#c8171d" : textSecondary,
                        fontSize: "13px", fontWeight: active ? 600 : 400,
                        cursor: "pointer", fontFamily: "'DM Sans', sans-serif", transition: "all 0.15s",
                      }}
                    >
                      {active && <span style={{ marginRight: "5px" }}>✓</span>}
                      {type}
                    </button>
                  );
                })}
              </div>
            </div>

            <div style={{ height: "1px", backgroundColor: dividerColor }} />

            {/* BLOC 3: Project Details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {sectionTitle("3", "Project Details")}

              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={labelStyle}>Project Description</label>
                <textarea
                  style={{ width: "100%", minHeight: "110px", backgroundColor: inputBg, border: `1.5px solid ${inputBorder}`, borderRadius: "8px", padding: "12px 14px", fontSize: "14px", color: textPrimary, fontFamily: "'DM Sans', sans-serif", outline: "none", resize: "vertical", boxSizing: "border-box", transition: "border-color 0.2s", lineHeight: 1.6 }}
                  placeholder="Tell me about your project, goals, and any specific requirements..."
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#c8171d")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = inputBorder)}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={labelStyle}>Deadline <span style={{ color: textMuted, fontWeight: 400, marginLeft: "6px" }}>(optional)</span></label>
                <input type="date" style={{ ...inputStyle(), color: form.deadline ? textPrimary : textMuted, colorScheme: isDark ? "dark" : "light" }}
                  value={form.deadline}
                  onChange={(e) => setForm({ ...form, deadline: e.target.value })}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#c8171d")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = inputBorder)}
                />
              </div>
            </div>

            <div style={{ height: "1px", backgroundColor: dividerColor }} />

            {/* BLOC 4: Preferred Contact */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {sectionTitle("4", <>Preferred Contact Method <span style={{ color: "#c8171d" }}>*</span></>)}

              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                {(["email", "whatsapp"] as PreferredContact[]).map((method) => {
                  const active = form.preferredContact === method;
                  return (
                    <button key={method}
                      onClick={() => { setForm({ ...form, preferredContact: method }); setErrors((prev) => ({ ...prev, preferredContact: "" })); }}
                      style={{
                        display: "flex", alignItems: "center", gap: "0.5rem",
                        padding: "10px 20px", borderRadius: "10px",
                        border: `1.5px solid ${active ? "#c8171d" : inputBorder}`,
                        backgroundColor: active ? "rgba(200,23,29,0.1)" : inputBg,
                        color: active ? "#c8171d" : textSecondary,
                        fontSize: "13.5px", fontWeight: active ? 600 : 400,
                        cursor: "pointer", fontFamily: "'DM Sans', sans-serif", transition: "all 0.15s",
                        flex: 1, justifyContent: "center", minWidth: "140px",
                      }}
                    >
                      {method === "email" ? (
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                        </svg>
                      ) : (
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                        </svg>
                      )}
                      {method === "email" ? "Email" : "WhatsApp"}
                    </button>
                  );
                })}
              </div>
              {errors.preferredContact && <span style={{ fontSize: "11.5px", color: "#c8171d" }}>{errors.preferredContact}</span>}
              {form.preferredContact === "whatsapp" && !form.phone && (
                <p style={{ fontSize: "12px", color: "#c8171d", margin: 0, fontFamily: "'DM Sans', sans-serif" }}>
                  Please fill in your phone number above to use WhatsApp.
                </p>
              )}
            </div>

            {/* ACTION BUTTONS */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "0.5rem", borderTop: `1.5px solid ${dividerColor}`, gap: "1rem" }}>
              <button
                onClick={onClose}
                style={{ display: "flex", alignItems: "center", gap: "0.4rem", padding: "0 1.5rem", height: "46px", backgroundColor: "transparent", border: `1.5px solid ${inputBorder}`, borderRadius: "8px", color: textSecondary, fontSize: "14px", fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", transition: "border-color 0.2s, color 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = isDark ? "#555" : "#bbb"; e.currentTarget.style.color = textPrimary; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = inputBorder; e.currentTarget.style.color = textSecondary; }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
                Back
              </button>

              <button
                onClick={handleSubmit}
                disabled={loading}
                style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0 2rem", height: "46px", backgroundColor: "#c8171d", border: "none", borderRadius: "8px", color: "#fff", fontSize: "14px", fontWeight: 600, cursor: loading ? "not-allowed" : "pointer", fontFamily: "'DM Sans', sans-serif", transition: "background-color 0.2s", letterSpacing: "0.2px", opacity: loading ? 0.75 : 1 }}
                onMouseEnter={(e) => { if (!loading) e.currentTarget.style.backgroundColor = "#a01015"; }}
                onMouseLeave={(e) => { if (!loading) e.currentTarget.style.backgroundColor = "#c8171d"; }}
              >
                {loading ? (
                  <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                      style={{ animation: "spin 0.8s linear infinite" }}>
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Start My Application
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </>
                )}
              </button>
              <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;