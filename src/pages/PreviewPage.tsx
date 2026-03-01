import { useLocation, useNavigate } from "react-router-dom";
import type { CaptureData } from "../types/capture";
import logo from "../assets/logo.svg";

export default function PreviewPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state as CaptureData | undefined;

  if (!data) {
    return (
      <div style={styles.center}>
        <h2>No image captured</h2>
        <button style={styles.button} onClick={() => navigate("/")}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      
      {/* NAVBAR */}
      <div style={styles.navbar}>
        <img src={logo} alt="Secure KYC Capture" style={styles.logo} />
      </div>

      {/* HERO */}
      <div style={styles.hero}>
        <h1 style={styles.title}>Secure KYC Capture</h1>
        <p style={styles.subtitle}>
          Intelligent Auto-Capture & AI Powered Document Detection
        </p>
      </div>

      {/* RESULT CARD */}
      <div style={styles.card}>
        <h2 style={{ marginBottom: 20 }}>Captured Document</h2>

        <img src={data.image} alt="Captured" style={styles.image} />

        <div style={styles.meta}>
          <p><strong>Type:</strong> {data.docType}</p>
          <p>
            <strong>Confidence:</strong>{" "}
            {(data.confidence * 100).toFixed(2)}%
          </p>
        </div>

        <button style={styles.button} onClick={() => navigate("/")}>
          Retake
        </button>
      </div>

      {/* FOOTER */}
      <div style={styles.footer}>
        <p>
          secure-kyc-capture is a privacy-first React component for automatic
          document detection in the browser.
        </p>

        <p style={{ marginTop: 20, opacity: 0.6 }}>
          Made with ❤️ by <strong>Pratham Ingawale</strong>  
          <br />
          GitHub: PRATHAM-SPS
        </p>
      </div>

    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#F8FAFC",
    fontFamily: "Inter, sans-serif",
    color: "#0F172A",
    display: "flex",
    flexDirection: "column"
  },

  navbar: {
    width: "100%",
    padding: "16px 40px", // reduced
    backgroundColor: "#FFFFFF",
    borderBottom: "1px solid #E5E7EB"
  },

  logo: {
    height: "70px", // slightly reduced
    width: "auto"
  },

  hero: {
    textAlign: "center",
    marginTop: "40px",   // reduced from 70+
    marginBottom: "40px" // reduced from 80+
  },

  title: {
    fontSize: "36px", // slightly reduced
    marginBottom: "8px",
    fontWeight: 700
  },

  subtitle: {
    color: "#64748B",
    fontSize: "16px"
  },

  card: {
    width: "100%",
    maxWidth: "760px",
    margin: "0 auto",
    backgroundColor: "#FFFFFF",
    borderRadius: "20px",
    padding: "32px", // reduced from 50
    textAlign: "center",
    boxShadow: "0 15px 40px rgba(0,0,0,0.06)"
  },

  image: {
    width: "100%",
    borderRadius: "14px",
    marginBottom: "20px"
  },

  meta: {
    marginBottom: "20px",
    fontSize: "15px",
    color: "#334155"
  },

  button: {
    padding: "12px 28px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#22C55E",
    color: "#fff",
    fontWeight: 600,
    cursor: "pointer",
    fontSize: "15px"
  },

  footer: {
    marginTop: "50px", // reduced from 100
    textAlign: "center",
    paddingBottom: "40px",
    maxWidth: "800px",
    marginLeft: "auto",
    marginRight: "auto",
    color: "#64748B"
  },

  center: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  }
};