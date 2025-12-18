import { useState } from "react";

export default function Attendance() {
  const [students, setStudents] = useState([
    { id: 1, name: "Arun", present: false },
    { id: 2, name: "Priya", present: false },
    { id: 3, name: "Karthik", present: false },
  ]);

  const toggleAttendance = (id) => {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, present: !s.present } : s
      )
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Attendance Tracker</h2>

      {students.map((s) => (
        <div key={s.id} style={{ marginBottom: "10px" }}>
          <strong>{s.name}</strong> :{" "}
          {s.present ? "Present" : "Absent"}
          <button
            onClick={() => toggleAttendance(s.id)}
            style={{ marginLeft: "10px" }}
          >
            Toggle
          </button>
        </div>
      ))}

      <p>
        Present: {students.filter((s) => s.present).length} | Absent:{" "}
        {students.filter((s) => !s.present).length}
      </p>
    </div>
  );
}

