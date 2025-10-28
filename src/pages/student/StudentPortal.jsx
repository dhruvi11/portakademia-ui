import React, { useState } from "react";
import "../../styles/StudentPortal.css";
import Sidebar from "../../components/student/Sidebar";
import Dashboard from "../../components/student/Dashboard";
import Profile from "../../components/student/Profile";
import Subjects from "../../components/student/Subjects";
import Exams from "../../components/student/Exams";
import Grades from "../../components/student/Grades";
import Payments from "../../components/student/Payments";
import Transcript from "../../components/student/Transcript";
import Diploma from "../../components/student/Diploma";
import Clearance from "../../components/student/Clearance";



const StudentPortal = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderSection = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "profile":
        return <Profile />;
      case "subjects":
        return <Subjects />;
      case "exams":
        return <Exams />;
      case "grades":
        return <Grades />;
      case "payments":
        return <Payments />;
      case "transcript":
        return <Transcript />;
      case "diploma":
        return <Diploma />;
      case "clearance":
        return <Clearance />;
      default:
        return <Dashboard />;
    }
  };

  const handleLogout = () => {
    alert("You have been logged out successfully!");
    window.location.href = "/login";
  };

  return (
    <div className="student-portal-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>🎓 Portakademia</h2>
          <p className="sidebar-subtitle">Student Portal</p>
        </div>

        <ul className="sidebar-menu">
          {[
            ["dashboard", "🏠 Dashboard"],
            ["profile", "👤 My Profile"],
            ["subjects", "📘 Subjects"],
            ["exams", "🧮 Exams"],
            ["grades", "📊 Grades"],
            ["payments", "💳 Payments"],
            ["transcript", "📑 Transcript"],
            ["diploma", "🎖️ Diploma"],
            ["clearance", "✅ Clearance"],
          ].map(([key, label]) => (
            <li
              key={key}
              className={activeTab === key ? "active" : ""}
              onClick={() => setActiveTab(key)}
            >
              {label}
            </li>
          ))}
        </ul>

        <button className="logout-btn" onClick={handleLogout}>
          🚪 Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="portal-content">
        <header className="portal-header">
          <div>
            <h1>Welcome, Alex Johnson 👋</h1>
            <p>B.Sc. Computer Science – Year 3</p>
          </div>
        </header>

        <div className="portal-body">{renderSection()}</div>

        <footer className="portal-footer">
          © 2025 <b>Portakademia</b> | Empowering Future Innovators 🌟
        </footer>
      </main>
    </div>
  );
};

export default StudentPortal;
