import { useState } from "react";

function Feedback() {
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!rating || !comment) {
      setError("⚠️ Please provide both rating and feedback");
      setSubmitted(false);
      return;
    }

    setError("");
    setSubmitted(true);

    // Clear form after submission
    setRating("");
    setComment("");
  };

  return (
    <div style={styles.container}>
      <h2>Student Feedback Form</h2>

      {error && <p style={styles.error}>{error}</p>}
      {submitted && <p style={styles.success}>✅ Feedback submitted successfully!</p>}

      <form onSubmit={handleSubmit}>
        <label>Rating:</label>
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          style={styles.input}
        >
          <option value="">Select Rating</option>
          <option value="1">1 - Very Poor</option>
          <option value="2">2 - Poor</option>
          <option value="3">3 - Average</option>
          <option value="4">4 - Good</option>
          <option value="5">5 - Excellent</option>
        </select>

        <label>Comments:</label>
        <textarea
          placeholder="Enter your feedback..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          style={styles.textarea}
        ></textarea>

        <button type="submit" style={styles.button}>
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    width: "350px",
    margin: "80px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "8px",
    margin: "8px 0",
  },
  textarea: {
    width: "100%",
    height: "80px",
    padding: "8px",
    margin: "8px 0",
  },
  button: {
    width: "100%",
    padding: "10px",
    cursor: "pointer",
  },
  error: {
    color: "red",
  },
  success: {
    color: "green",
  },
};

export default Feedback;
