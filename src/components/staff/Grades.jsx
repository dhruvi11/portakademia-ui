import React, { useState } from "react";

const Grades = () => {
  const [program, setProgram] = useState("");
  const [subject, setSubject] = useState("");
  const [grades, setGrades] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const studentsData = {
    "CS-301": [
      { name: "Alice Johnson", id: "CS301-01" },
      { name: "Bob Williams", id: "CS301-02" },
      { name: "Charlie Brown", id: "CS301-03" },
    ],
    "CS-302": [
      { name: "David Lee", id: "CS302-01" },
      { name: "Eva Green", id: "CS302-02" },
      { name: "Frank Harris", id: "CS302-03" },
    ],
  };

  const handleGradeChange = (id, grade) => {
    setGrades((prev) => ({ ...prev, [id]: grade }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section">
      <h2>📝 Upload Grades</h2>

      <label>Select Program/Class:</label>
      <select value={program} onChange={(e) => setProgram(e.target.value)}>
        <option value="">-- Choose Program --</option>
        <option value="CS-301">CS-301</option>
        <option value="CS-302">CS-302</option>
      </select>

      <label>Select Subject:</label>
      <select value={subject} onChange={(e) => setSubject(e.target.value)}>
        <option value="">-- Choose Subject --</option>
        <option value="Algorithms">Algorithms</option>
        <option value="Database Systems">Database Systems</option>
      </select>

      {program && subject && (
        <form onSubmit={handleSubmit}>
          <h3>👩‍🎓 Students List</h3>
          <table>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Student ID</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {studentsData[program].map((s) => (
                <tr key={s.id}>
                  <td>{s.name}</td>
                  <td>{s.id}</td>
                  <td>
                    <input
                      type="text"
                      value={grades[s.id] || ""}
                      onChange={(e) => handleGradeChange(s.id, e.target.value)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type="submit">Submit Grades</button>
        </form>
      )}

      {submitted && (
        <div className="success">
          ✅ Grades submitted successfully! Students can now view them.
        </div>
      )}
    </section>
  );
};

export default Grades;
