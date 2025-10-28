import React from "react";

const Sidebar = ({ active, onSelect }) => {
  const links = [
    { id: "dashboard", label: "Dashboard" },
    { id: "schedule", label: "Weekly Schedule" },
    { id: "subjects", label: "Subjects" },
    { id: "grades", label: "Upload Grades" },
    { id: "homework", label: "Create Homework/Test" },
    { id: "profile", label: "Profile" },
  ];

  return (
    <aside className="sidebar">
      <h2>Staff Portal</h2>
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
