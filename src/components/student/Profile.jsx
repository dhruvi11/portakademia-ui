import React from "react";

const Profile = () => (
  <section className="section">
    <h2>👤 My Profile</h2>
    <ul>
      <li>Name: Alex Johnson</li>
      <li>Student ID: CS2025001</li>
      <li>Email: alex.johnson@example.com</li>
      <li>Address: 123 Main St, Springfield</li>
    </ul>
    <button onClick={() => alert("Upload photo dialog opened")}>
      Upload Profile Photo
    </button>
    <button onClick={() => alert("Address update form opened")}>
      Update Address
    </button>
  </section>
);

export default Profile;
