import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [signups, setSignups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Use the correct plural endpoint to match backend
  const API_URL = "http://localhost:8080/api/signup";

  useEffect(() => {
    fetchSignups();
  }, []);

  const fetchSignups = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Failed to fetch signups");
      const data = await response.json();
      setSignups(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Luna Wellness Signups</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && (
        <table
          border="1"
          cellPadding="10"
          style={{ borderCollapse: "collapse", width: "100%" }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Class Type</th>
            </tr>
          </thead>
          <tbody>
            {signups.map((signup) => (
              <tr key={signup.id}>
                <td>{signup.id}</td>
                <td>{signup.name}</td>
                <td>{signup.email}</td>
                <td>{signup.classType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <button
        onClick={fetchSignups}
        style={{ marginTop: "20px", padding: "10px 15px", cursor: "pointer" }}
      >
        Refresh
      </button>
    </div>
  );
};

export default Dashboard;
