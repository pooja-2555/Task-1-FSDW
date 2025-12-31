import { useState } from "react";

function Notification() {
  const [notifications, setNotifications] = useState([]);
  const [count, setCount] = useState(1);

  const addNotification = () => {
    const newNotification = {
      id: count,
      message: `New notification ${count}`,
    };

    setNotifications([newNotification, ...notifications]);
    setCount(count + 1);
  };

  const clearNotifications = () => {
    setNotifications([]);
    setCount(1);
  };

  return (
    <div style={styles.container}>
      <h2>Dashboard Notifications</h2>

      <div style={styles.actions}>
        <button onClick={addNotification} style={styles.button}>
          Add Notification
        </button>
        <button onClick={clearNotifications} style={styles.clearButton}>
          Clear All
        </button>
      </div>

      <div style={styles.list}>
        {notifications.length === 0 ? (
          <p>No new notifications</p>
        ) : (
          notifications.map((note) => (
            <div key={note.id} style={styles.notification}>
              🔔 {note.message}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "400px",
    margin: "60px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "15px",
  },
  button: {
    padding: "8px 12px",
    cursor: "pointer",
  },
  clearButton: {
    padding: "8px 12px",
    cursor: "pointer",
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
  },
  list: {
    marginTop: "10px",
  },
  notification: {
    padding: "8px",
    marginBottom: "8px",
    backgroundColor: "#f1f1f1",
    borderRadius: "4px",
  },
};

export default Notification;
