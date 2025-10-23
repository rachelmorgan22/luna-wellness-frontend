import { useState } from "react";

export default function ProtectedRoute({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [input, setInput] = useState("");

  const password = "angel134"; // change this to whatever you want

  if (isAuth) {
    return children; // show Dashboard if authenticated
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Enter Password</h2>
      <input
        type="password"
        placeholder="Password"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setIsAuth(input === password)}>Submit</button>
      {input && input !== password && <p style={{ color: "red" }}>Wrong password</p>}
    </div>
  );
}
