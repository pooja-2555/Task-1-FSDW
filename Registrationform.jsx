import React, { Component } from "react";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      workshop: "",
      experience: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration Submitted!");
  };

  render() {
    const { name, email, workshop, experience } = this.state;

    return (
      <div style={{ display: "flex", gap: "40px", padding: "20px" }}>
        {/* Registration Form */}
        <form onSubmit={this.handleSubmit} style={{ width: "300px" }}>
          <h2>Workshop Registration</h2>

          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>Workshop</label>
            <select
              name="workshop"
              value={workshop}
              onChange={this.handleChange}
            >
              <option value="">Select</option>
              <option value="React Basics">React Basics</option>
              <option value="Advanced JavaScript">Advanced JavaScript</option>
              <option value="UI/UX Design">UI/UX Design</option>
            </select>
          </div>

          <div>
            <label>Experience Level</label>
            <select
              name="experience"
              value={experience}
              onChange={this.handleChange}
            >
              <option value="">Select</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          <button type="submit">Register</button>
        </form>

        {/* Live Preview */}
        <div style={{ width: "300px" }}>
          <h2>Live Preview</h2>
          <p><strong>Name:</strong> {name || "—"}</p>
          <p><strong>Email:</strong> {email || "—"}</p>
          <p><strong>Workshop:</strong> {workshop || "—"}</p>
          <p><strong>Experience:</strong> {experience || "—"}</p>
        </div>
      </div>
    );
  }
}

export default RegistrationForm;
