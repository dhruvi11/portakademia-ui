import React, { useState } from "react";
import "../../styles/StaffPortal.css";
import Sidebar from "../../components/staff/Sidebar";
import Dashboard from "../../components/staff/Dashboard";
import Schedule from "../../components/staff/Schedule";
import Subjects from "../../components/staff/Subjects";
import Grades from "../../components/staff/Grades";
import Homework from "../../components/staff/Homework";
import Profile from "../../components/staff/Profile";

const StaffPortal = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const renderSection = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />;
      case "schedule":
        return <Schedule />;
      case "subjects":
        return <Subjects />;
      case "grades":
        return <Grades />;
      case "homework":
        return <Homework />;
      case "profile":
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="portal-container">
      <Sidebar active={activeSection} onSelect={setActiveSection} />
      <main className="main">
        <header>
          <h1>Welcome, Prof. John Smith</h1>
          <p>Department of Computer Science</p>
        </header>
        {renderSection()}
        <footer>&copy; 2025 Staff Portal. All Rights Reserved.</footer>
      </main>
    </div>
  );
};

export default StaffPortal;
