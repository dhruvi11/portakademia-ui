import React, { useState } from "react";

const Homework = () => {
  const [assignments, setAssignments] = useState([]);
  const [form, setForm] = useState({
    program: "",
    subject: "",
    name: "",
    deadline: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleCreate = () => {
    const { program, subject, name, deadline } = form;
    if (!program || !subject || !name || !deadline) {
      alert("Please fill all fields");
      return;
    }
    const deadlineDate = new Date(deadline);
    setAssignments([
      ...assignments,
      `${name} for ${program} (${subject}) – Deadline: ${deadlineDate.toLocaleString()}`,
    ]);
    setForm({ program: "", subject: "", name: "", deadline: "" });
  };

  return (
    <section className="section">
      <h2>📝 Create Homework/Test</h2>

      <label>Select Program/Class:</label>
      <select id="program" value={form.program} onChange={handleChange}>
        <option value="">-- Choose Program --</option>
        <option value="CS-301">CS-301</option>
        <option value="CS-302">CS-302</option>
      </select>

      <label>Select Subject:</label>
      <select id="subject" value={form.subject} onChange={handleChange}>
        <option value="">-- Choose Subject --</option>
        <option value="Algorithms">Algorithms</option>
        <option value="Database Systems">Database Systems</option>
      </select>

      <label>Homework/Test Name:</label>
      <input
        type="text"
        id="name"
        placeholder="Enter name"
        value={form.name}
        onChange={handleChange}
      />

      <label>Deadline:</label>
      <input
        type="datetime-local"
        id="deadline"
        value={form.deadline}
        onChange={handleChange}
      />

      <button onClick={handleCreate}>Create Homework/Test</button>

      <div id="hwList" style={{ marginTop: "1rem" }}>
        <h3>Created Assignments</h3>
        <ul>
          {assignments.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Homework;
