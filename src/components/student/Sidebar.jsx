import React from "react";

const Sidebar = ({ active, onSelect }) => {
  const links = [
    { id: "dashboard", label: "Dashboard" },
    { id: "profile", label: "My Profile" },
    { id: "subjects", label: "Subjects" },
    { id: "exams", label: "Exams" },
    { id: "grades", label: "Grades" },
    { id: "payments", label: "Payments" },
    { id: "transcript", label: "Transcript" },
    { id: "diploma", label: "Diploma" },
    { id: "clearance", label: "Clearance" },
  ];

  return (
    <aside className="sidebar">
      <h2>Student Portal</h2>
      {links.map((link) => (
        <a
          key={link.id}
          className={active === link.id ? "active" : ""}
          onClick={() => onSelect(link.id)}
        >
          {link.label}
        </a>
      ))}
    </aside>
  );
};

export default Sidebar;
