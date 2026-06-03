import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #CFF7F0, #D8ECFF)",
        color: "#16313A",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
        }}
      >
        <h2 style={{ color: "#0F766E" }}>PlacePilot AI</h2>

        <div style={{ display: "flex", gap: "24px" }}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#16313A",
            }}
          >
            Home
          </Link>

          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#14B8A6",
            }}
          >
            Features
          </Link>

          <Link
            to="/login"
            style={{
              textDecoration: "none",
              color: "#16313A",
            }}
          >
            Login
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          paddingTop: "100px",
          paddingInline: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "58px",
            marginBottom: "12px",
            color: "#0F766E",
          }}
        >
          PlacePilot AI
        </h1>

        <p
          style={{
            fontSize: "20px",
            maxWidth: "700px",
            lineHeight: "1.6",
          }}
        >
          Your AI-powered placement preparation platform for coding practice,
          interview readiness, resume analysis, and personalized learning
          roadmaps.
        </p>

        <button
          onClick={() => alert("Welcome to PlacePilot AI")}
          style={{
            marginTop: "30px",
            padding: "14px 32px",
            fontSize: "18px",
            borderRadius: "14px",
            border: "none",
            backgroundColor: "#23b3a2",
            color: "white",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Get Started
        </button>
      </div>

      {/* Feature Cards */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "24px",
          flexWrap: "wrap",
          padding: "80px 20px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "25px",
            borderRadius: "18px",
            width: "260px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          }}
        >
          <h3>AI Resume Analyzer</h3>
          <p>
            Upload your resume and receive instant improvement suggestions.
          </p>
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: "25px",
            borderRadius: "18px",
            width: "260px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          }}
        >
          <h3>Interview Generator</h3>
          <p>
            Practice personalized technical and HR interview questions.
          </p>
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: "25px",
            borderRadius: "18px",
            width: "260px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          }}
        >
          <h3>Coding Tracker</h3>
          <p>
            Track progress, streaks, solved problems, and preparation goals.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;