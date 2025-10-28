import React, { useState } from "react";

const Schedule = () => {
  const [week, setWeek] = useState("week1");

  return (
    <section className="section">
      <h2>📅 Weekly Class Schedule</h2>

      <label>Select Week:</label>
      <select value={week} onChange={(e) => setWeek(e.target.value)}>
        <option value="week1">Week 1 (Sep 29 - Oct 5)</option>
        <option value="week2">Week 2 (Oct 6 - Oct 12)</option>
      </select>

      {week === "week1" ? (
        <ul>
          <li>Mon: Algorithms (CS-301) 9:00-11:00</li>
          <li>Wed: Database Systems (CS-302) 10:00-12:00</li>
          <li>Fri: Algorithms (CS-302) 14:00-16:00</li>
        </ul>
      ) : (
        <ul>
          <li>Tue: Algorithms (CS-301) 11:00-13:00</li>
          <li>Thu: Database Systems (CS-302) 9:00-11:00</li>
          <li>Fri: Project Lab (CS-301) 13:00-15:00</li>
        </ul>
      )}
    </section>
  );
};

export default Schedule;
