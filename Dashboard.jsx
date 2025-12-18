import React, { Component } from "react";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskInput: "",
      tasks: []
    };
  }

  handleChange = (e) => {
    this.setState({ taskInput: e.target.value });
  };

  addTask = () => {
    const { taskInput, tasks } = this.state;
    if (taskInput.trim() === "") return;

    this.setState({
      tasks: [...tasks, taskInput],
      taskInput: ""
    });
  };

  removeTask = (index) => {
    const updatedTasks = this.state.tasks.filter((_, i) => i !== index);
    this.setState({ tasks: updatedTasks });
  };

  render() {
    return (
      <div style={styles.container}>
        <h2>🗂 Task Dashboard</h2>

        <div style={styles.inputContainer}>
          <input
            type="text"
            placeholder="Enter a task"
            value={this.state.taskInput}
            onChange={this.handleChange}
            style={styles.input}
          />
          <button onClick={this.addTask} style={styles.addBtn}>
            Add
          </button>
        </div>

        <ul style={styles.list}>
          {this.state.tasks.map((task, index) => (
            <li key={index} style={styles.listItem}>
              {task}
              <button
                onClick={() => this.removeTask(index)}
                style={styles.deleteBtn}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    borderRadius: "8px",
    background: "#f4f6f8",
    textAlign: "center"
  },
  inputContainer: {
    display: "flex",
    gap: "10px"
  },
  input: {
    flex: 1,
    padding: "8px"
  },
  addBtn: {
    padding: "8px 12px",
    cursor: "pointer"
  },
  list: {
    listStyle: "none",
    padding: 0,
    marginTop: "20px"
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px",
    background: "#fff",
    marginBottom: "8px",
    borderRadius: "4px"
  },
  deleteBtn: {
    border: "none",
    background: "transparent",
    cursor: "pointer"
  }
};

export default Dashboard;
