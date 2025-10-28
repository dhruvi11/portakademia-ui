import React from "react";
import "../styles/Drawer.css"

const Drawer = ({ open, toggleDrawer }) => {
  return (
    <div className={`drawer ${open ? "open" : ""}`}>
      <button className="drawer-close" onClick={toggleDrawer}>✖</button>
      <ul>
        <li>Profile</li>
        <li>Messages</li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default Drawer;
