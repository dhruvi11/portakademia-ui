import '../../styles/theme.css';
import React, { useState } from "react";
import "../../styles/AdminPortal.css";

const AdminPortal = () => {
  const [programs, setPrograms] = useState([
    { name: "Computer Science", duration: 3 },
    { name: "Information Technology", duration: 4 },
  ]);
  const [subjects, setSubjects] = useState([
    { program: "Computer Science", year: 1, subject: "Intro to CS", teacher: "Alice Johnson" },
    { program: "Computer Science", year: 2, subject: "Algorithms", teacher: "David Lee" },
    { program: "Information Technology", year: 1, subject: "Networking Basics", teacher: "Grace Kim" },
  ]);
  const [students, setStudents] = useState([
    { name: "Alice Student", program: "Computer Science", enrollmentNumber: "ENR1001" },
    { name: "Bob Student", program: "Information Technology", enrollmentNumber: "ENR1002" },
  ]);

  const [programName, setProgramName] = useState("");
  const [duration, setDuration] = useState("");
  const [subjectData, setSubjectData] = useState({ program: "", name: "", year: "", teacher: "" });
  const [studentData, setStudentData] = useState({ name: "", program: "" });
  const [filter, setFilter] = useState("");
  const [msgVisible, setMsgVisible] = useState(false);

  let enrollmentCounter = 1003;

  const createProgram = () => {
    if (!programName || !duration) return;
    const newProgram = { name: programName, duration };
    setPrograms([...programs, newProgram]);
    setProgramName("");
    setDuration("");
    setMsgVisible(true);
    setTimeout(() => setMsgVisible(false), 2000);
  };

  const addSubject = () => {
    const { program, name, year, teacher } = subjectData;
    if (!program || !name || !year || !teacher) return;
    setSubjects([...subjects, { program, subject: name, year, teacher }]);
    setSubjectData({ program: "", name: "", year: "", teacher: "" });
  };

  const enrollStudent = () => {
    if (!studentData.name || !studentData.program) return;
    const newStudent = {
      name: studentData.name,
      program: studentData.program,
      enrollmentNumber: "ENR" + enrollmentCounter++,
    };
    setStudents([...students, newStudent]);
    setStudentData({ name: "", program: "" });
  };

  const getSubjectsByProgram = (programName) => {
    const filtered = subjects.filter((s) => s.program === programName);
    const grouped = {};
    filtered.forEach((s) => {
      if (!grouped[s.year]) grouped[s.year] = [];
      grouped[s.year].push(`${s.subject} (${s.teacher})`);
    });
    return grouped;
  };

  const filteredStudents = filter
    ? students.filter((s) => s.program === filter)
    : students;

  return (
    <div className="main">
      <h1>Admin Portal - Program & Subject Management</h1>

      {/* 1️⃣ Create Program */}
      <h2>1️⃣ Create Program</h2>
      <label>Program Name</label>
      <input
        type="text"
        placeholder="e.g., 3-Year Computer Science"
        value={programName}
        onChange={(e) => setProgramName(e.target.value)}
      />

      <label>Duration (Years)</label>
      <select value={duration} onChange={(e) => setDuration(e.target.value)}>
        <option value="">-- Select Duration --</option>
        <option value="3">3 Years</option>
        <option value="4">4 Years</option>
      </select>

      <button onClick={createProgram}>Create Program</button>
      {msgVisible && <div className="success">Program created successfully!</div>}

      {/* 2️⃣ Add Subjects */}
      <h2>2️⃣ Add Subjects to Program</h2>
      <label>Select Program</label>
      <select
        value={subjectData.program}
        onChange={(e) => setSubjectData({ ...subjectData, program: e.target.value })}
      >
        <option value="">-- Select Program --</option>
        {programs.map((p, i) => (
          <option key={i} value={p.name}>
            {p.name}
          </option>
        ))}
      </select>

      <label>Subject Name</label>
      <input
        type="text"
        placeholder="e.g., Algorithms"
        value={subjectData.name}
        onChange={(e) => setSubjectData({ ...subjectData, name: e.target.value })}
      />

      <label>Year of Study</label>
      <select
        value={subjectData.year}
        onChange={(e) => setSubjectData({ ...subjectData, year: e.target.value })}
      >
        <option value="">-- Select Year --</option>
        <option value="1">1st Year</option>
        <option value="2">2nd Year</option>
        <option value="3">3rd Year</option>
        <option value="4">4th Year</option>
      </select>

      <label>Assign Teacher</label>
      <input
        type="text"
        placeholder="Teacher Name"
        value={subjectData.teacher}
        onChange={(e) => setSubjectData({ ...subjectData, teacher: e.target.value })}
      />
      <button onClick={addSubject}>Add Subject</button>

      <table>
        <thead>
          <tr>
            <th>Program</th>
            <th>Year</th>
            <th>Subject</th>
            <th>Teacher</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((s, i) => (
            <tr key={i}>
              <td>{s.program}</td>
              <td>{s.year}</td>
              <td>{s.subject}</td>
              <td>{s.teacher}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 3️⃣ Enroll Students */}
      <h2>3️⃣ Enroll Students to Program</h2>
      <label>Student Name</label>
      <input
        type="text"
        placeholder="Student Name"
        value={studentData.name}
        onChange={(e) => setStudentData({ ...studentData, name: e.target.value })}
      />

      <label>Select Program</label>
      <select
        value={studentData.program}
        onChange={(e) => setStudentData({ ...studentData, program: e.target.value })}
      >
        <option value="">-- Select Program --</option>
        {programs.map((p, i) => (
          <option key={i} value={p.name}>
            {p.name}
          </option>
        ))}
      </select>

      <button onClick={enrollStudent}>Enroll Student</button>

      {/* 4️⃣ Student List */}
      <h2>4️⃣ Student List (Filter by Program)</h2>
      <label>Filter Program</label>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="">-- All Programs --</option>
        {programs.map((p, i) => (
          <option key={i} value={p.name}>
            {p.name}
          </option>
        ))}
      </select>

      <table>
        <thead>
          <tr>
            <th>Enrollment #</th>
            <th>Student</th>
            <th>Program</th>
            <th>Subjects (All Years)</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((s, i) => {
            const grouped = getSubjectsByProgram(s.program);
            const allSubjects = Object.keys(grouped)
              .map((y) => `Year ${y}: ${grouped[y].join(", ")}`)
              .join(" | ");
            return (
              <tr key={i}>
                <td>{s.enrollmentNumber}</td>
                <td>{s.name}</td>
                <td>{s.program}</td>
                <td>{allSubjects}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPortal;
