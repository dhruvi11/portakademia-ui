import React from "react";
import "../../styles/StaffPortal.css";

const StaffDashboard = () => {
  return (
    <div className="staff-portal">
      <h2 className="page-title">👨‍🏫 Staff Dashboard</h2>

      <div className="page-grid">
        <div className="card">
          <h3 className="card-title">📅 Weekly Schedule</h3>
          <p>View and filter classes by week.</p>
          <button className="btn-secondary">Previous Week</button>
          <button className="btn-secondary">Next Week</button>
        </div>

        <div className="card">
          <h3 className="card-title">📚 Assigned Subjects</h3>
          <ul>
            <li>Math - Group A</li>
            <li>Physics - Group B</li>
          </ul>
        </div>

        <div className="card">
          <h3 className="card-title">📊 Upload Grades</h3>
          <p>Select subject & student → enter grade</p>
          <button className="btn-primary">Upload Grades</button>
        </div>

        <div className="card">
          <h3 className="card-title">📝 Create Exams/Tests</h3>
          <p>Schedule tests with deadlines.</p>
          <button className="btn-primary">New Exam</button>
        </div>

        <div className="card">
          <h3 className="card-title">👤 Profile</h3>
          <button className="btn-secondary">Upload Photo</button>
          <button className="btn-secondary">Update Address</button>
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;
