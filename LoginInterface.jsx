import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      role: "",
      error: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      error: "",
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, role } = this.state;

    if (!username || !role) {
      this.setState({ error: "All fields are required" });
      return;
    }

    this.props.onLogin(role, username);
  };

  render() {
    const { username, role, error } = this.state;

    return (
      <div style={{ maxWidth: "300px", margin: "auto" }}>
        <h2>Login</h2>

        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>Role</label>
            <select name="role" value={role} onChange={this.handleChange}>
              <option value="">Select role</option>
              <option value="admin">Admin</option>
              <option value="student">Student</option>
              <option value="instructor">Instructor</option>
            </select>
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
