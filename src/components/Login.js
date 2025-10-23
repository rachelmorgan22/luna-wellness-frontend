import React, { useState } from "react";



export default function Login({ onLogin }) {
    const [password, setPassword] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (password === "angel134") {
        onLogin();
      } else {
        alert("Incorrect password!");
      }
    };
  
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Login</h1>
        <form
          onSubmit={handleSubmit}
          style={{ display: "inline-block", marginTop: "20px" }}
        >
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: "10px", margin: "5px", fontSize: "16px" }}
            className="password-input"
          />
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>
      </div>
    );
  }
  
