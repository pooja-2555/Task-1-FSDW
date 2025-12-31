import { useState } from "react";

function Authentication() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Mock credentials
  const VALID_USERNAME = "admin";
  const VALID_PASSWORD = "1234";

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("⚠️ Please fill in all fields");
      setSuccess(false);
      return;
    }

    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      setSuccess(true);
      setError("");
    } else {
      setError("❌ Invalid username or password");
      setSuccess(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Authentication System</h2>

      {error && <div style={styles.error}>{error}</div>}
      {success && <div style={styles.success}>✅ Login Successful!</div>}

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    width: "300px",
    margin: "100px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    textAlign: "center",
  },
  input: {
    width: "90%",
    padding: "8px",
    margin: "8px 0",
  },
  button: {
    width: "100%",
    padding: "8px",
    marginTop: "10px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginBottom: "10px",
  },
  success: {
    color: "green",
    marginBottom: "10px",
  },
};

export default Authentication;
