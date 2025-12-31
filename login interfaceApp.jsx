import React, { Component } from "react";
import Login from "./Fullstack/Sample/Logininterface";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      role: "",
      username: "",
    };
  }

  handleLogin = (role, username) => {
    this.setState({
      isLoggedIn: true,
      role,
      username,
    });
  };

  renderDashboard() {
    const { role, username } = this.state;

    if (role === "admin") {
      return <h2>Welcome Admin {username}</h2>;
    }
    if (role === "student") {
      return <h2>Welcome Student {username}</h2>;
    }
    if (role === "instructor") {
      return <h2>Welcome Instructor {username}</h2>;
    }
    return null;
  }

  render() {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        {this.state.isLoggedIn ? (
          this.renderDashboard()
        ) : (
          <Login onLogin={this.handleLogin} />
        )}
      </div>
    );
  }
}

export default App;
