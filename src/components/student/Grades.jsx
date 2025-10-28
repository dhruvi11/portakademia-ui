import React, { useState } from "react";

const Grades = () => {
  const [filter, setFilter] = useState("current");

  return (
    <section className="section">
      <h2>🎓 Final Grades</h2>

      <label>
        <strong>Filter:</strong>
      </label>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="current">Current Semester</option>
        <option value="past">Past Semesters</option>
      </select>

      {filter === "current" ? (
        <ul>
          <li>Algorithms – A (Approved)</li>
          <li>Database Systems – B+ (Approved)</li>
          <li>Software Engineering – A- (Approved)</li>
          <li>Artificial Intelligence – B (Approved)</li>
        </ul>
      ) : (
        <>
          <h3>Spring 2025</h3>
          <ul>
            <li>Operating Systems – B</li>
            <li>Computer Networks – B+</li>
            <li>Web Development – A</li>
            <li>Discrete Math – A-</li>
          </ul>

          <h3>Fall 2024</h3>
          <ul>
            <li>Data Structures – A</li>
            <li>Linear Algebra – B</li>
            <li>Probability & Statistics – A-</li>
          </ul>
        </>
      )}
    </section>
  );
};

export default Grades;
