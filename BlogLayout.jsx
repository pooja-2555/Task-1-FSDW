import { useState } from "react";

function BlogLayout() {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const addComment = (e) => {
    e.preventDefault();

    if (!name || !text) return;

    const newComment = {
      id: Date.now(),
      name,
      text,
    };

    setComments([newComment, ...comments]);
    setName("");
    setText("");
  };

  return (
    <div style={styles.container}>
      {/* Blog Section */}
      <div style={styles.blog}>
        <h1>🌍 My Tech Blog</h1>
        <p style={styles.date}>Posted on Sept 2025</p>
        <p>
          React makes it easy to build interactive UIs. This blog demonstrates
          a responsive layout with real-time comments using React state.
        </p>
      </div>

      {/* Comment Section */}
      <div style={styles.comments}>
        <h3>💬 Comments</h3>

        <form onSubmit={addComment} style={styles.form}>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
          <textarea
            placeholder="Write a comment..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={styles.textarea}
          ></textarea>
          <button type="submit" style={styles.button}>
            Post Comment
          </button>
        </form>

        {comments.length === 0 ? (
          <p>No comments yet. Be the first!</p>
        ) : (
          comments.map((c) => (
            <div key={c.id} style={styles.commentBox}>
              <strong>{c.name}</strong>
              <p>{c.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "900px",
    margin: "auto",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },
  blog: {
    background: "#f9f9f9",
    padding: "20px",
    borderRadius: "8px",
  },
  date: {
    fontSize: "14px",
    color: "gray",
  },
  comments: {
    background: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
    border: "1px solid #ddd",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    padding: "8px",
  },
  textarea: {
    padding: "8px",
    height: "70px",
  },
  button: {
    padding: "10px",
    cursor: "pointer",
  },
  commentBox: {
    background: "#f1f1f1",
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "10px",
  },
};

export default BlogLayout;
