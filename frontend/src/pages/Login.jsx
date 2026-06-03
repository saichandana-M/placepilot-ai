function Login() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #CFF7F0, #D8ECFF)",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "18px",
          width: "350px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        }}
      >
        <h2
  style={{
    color: "#14B8A6",
    textAlign: "center",
    marginBottom: "20px",
  }}
>
  Login
</h2>

        <input
          type="email"
          placeholder="Enter email"
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "15px",
            borderRadius: "10px",
          }}
        />

        <input
          type="password"
          placeholder="Enter password"
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "15px",
            borderRadius: "10px",
          }}
        />

        <button
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
            border: "none",
            borderRadius: "10px",
            backgroundColor: "#14B8A6",
            color: "white",
            cursor: "pointer",
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Login;