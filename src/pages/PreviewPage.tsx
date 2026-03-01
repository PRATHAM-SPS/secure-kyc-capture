import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import type { CaptureData } from "../types/capture";
import logoLight from "../assets/logo-light.svg";
import logoDark from "../assets/logo.svg";

export default function PreviewPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state as CaptureData | undefined;

  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDark);
    }
  }, []);

  // Persist theme
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const theme = darkMode ? darkTheme : lightTheme;
  const currentLogo = darkMode ? logoLight : logoDark;

  if (!data) {
    return (
      <div style={{ ...styles.center, backgroundColor: theme.background }}>
        <h2>No image captured</h2>
        <button style={theme.button} onClick={() => navigate("/")}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div style={{ ...styles.page, backgroundColor: theme.background, color: theme.text }}>
      
      {/* NAVBAR */}
      <div style={{ ...styles.navbar, backgroundColor: theme.navbar, borderBottom: theme.border }}>
        <img src={currentLogo} alt="Secure KYC Capture" style={styles.logo} />

        <button
          onClick={() => setDarkMode(!darkMode)}
          style={styles.toggleButton}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>

      {/* HERO */}
      <div style={styles.hero}>
        <h1 style={styles.title}>Secure KYC Capture</h1>
        <p style={{ ...styles.subtitle, color: theme.subtitle }}>
          Intelligent Auto-Capture & AI Powered Document Detection
        </p>
      </div>

      {/* RESULT CARD */}
      <div style={{ ...styles.card, backgroundColor: theme.card }}>
        <h2 style={{ marginBottom: 20 }}>Captured Document</h2>

        <img src={data.image} alt="Captured" style={styles.image} />

        <div style={{ ...styles.meta, color: theme.meta }}>
          <p><strong>Type:</strong> {data.docType}</p>
          <p>
            <strong>Confidence:</strong>{" "}
            {(data.confidence * 100).toFixed(2)}%
          </p>
        </div>

        <button style={theme.button} onClick={() => navigate("/")}>
          Retake
        </button>
      </div>

      {/* FOOTER */}
      <div style={{ ...styles.footer, color: theme.footer }}>
        <p>
          secure-kyc-capture is a privacy-first React component for automatic
          document detection in the browser.
        </p>

        <p style={{ marginTop: 20, opacity: 0.7 }}>
          Made with ❤️ by <strong>Pratham Ingawale</strong>
          <br />
          GitHub: PRATHAM-SPS
        </p>
      </div>
    </div>
  );
}

/* ---------------- THEMES ---------------- */

const lightTheme = {
  background: "#F8FAFC",
  navbar: "#FFFFFF",
  card: "#FFFFFF",
  text: "#0F172A",
  subtitle: "#64748B",
  meta: "#334155",
  footer: "#64748B",
  border: "1px solid #E5E7EB",
  button: {
    padding: "12px 28px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#22C55E",
    color: "#fff",
    fontWeight: 600,
    cursor: "pointer",
    fontSize: "15px"
  }
};

const darkTheme = {
  background: "#0B1220",
  navbar: "#111827",
  card: "#1F2937",
  text: "#F9FAFB",
  subtitle: "#9CA3AF",
  meta: "#D1D5DB",
  footer: "#9CA3AF",
  border: "1px solid rgba(255,255,255,0.05)",
  button: {
    padding: "12px 28px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#22C55E",
    color: "#fff",
    fontWeight: 600,
    cursor: "pointer",
    fontSize: "15px"
  }
};

/* ---------------- SHARED STYLES ---------------- */

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    width: "100%",
    minHeight: "100vh",
    fontFamily: "Inter, sans-serif",
    display: "flex",
    flexDirection: "column",
    transition: "background 0.3s ease"
  },

  navbar: {
    width: "100%",
    padding: "16px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  logo: {
    height: "70px",
    width: "auto"
  },

  toggleButton: {
    padding: "8px 16px",
    borderRadius: "8px",
    border: "1px solid #CBD5E1",
    background: "transparent",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: 600
  },

  hero: {
    textAlign: "center",
    marginTop: "40px",
    marginBottom: "40px"
  },

  title: {
    fontSize: "36px",
    marginBottom: "8px",
    fontWeight: 700
  },

  subtitle: {
    fontSize: "16px"
  },

  card: {
    width: "100%",
    maxWidth: "760px",
    margin: "0 auto",
    borderRadius: "20px",
    padding: "32px",
    textAlign: "center",
    boxShadow: "0 15px 40px rgba(0,0,0,0.08)"
  },

  image: {
    width: "100%",
    borderRadius: "14px",
    marginBottom: "20px"
  },

  meta: {
    marginBottom: "20px",
    fontSize: "15px"
  },

  footer: {
    marginTop: "50px",
    textAlign: "center",
    paddingBottom: "40px",
    maxWidth: "800px",
    marginLeft: "auto",
    marginRight: "auto"
  },

  center: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  }
};