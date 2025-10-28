import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/StudentPortal.css";

const StudentDrawer = ({ onLogout }) => {
  return (
    <div className="student-drawer">
      <h3 className="drawer-title">Student Portal</h3>
      <ul className="drawer-list">
        <li><NavLink to="/student/dashboard">🏠 Dashboard</NavLink></li>
        <li><NavLink to="/student/profile">👤 My Profile</NavLink></li>
        <li><NavLink to="/student/subjects">📘 Subjects</NavLink></li>
        <li><NavLink to="/student/exams">📝 Exams</NavLink></li>
        <li><NavLink to="/student/grades">🎓 Grades</NavLink></li>
        <li><NavLink to="/student/payments">💳 Payments</NavLink></li>
        <li><NavLink to="/student/transcript">📄 Transcript</NavLink></li>
        <li><NavLink to="/student/diploma">🏅 Diploma</NavLink></li>
        <li><NavLink to="/student/clearance">📂 Clearance</NavLink></li>
      </ul>
      <button className="logout-btn" onClick={onLogout}>🚪 Logout</button>
    </div>
  );
};

export default StudentDrawer;
