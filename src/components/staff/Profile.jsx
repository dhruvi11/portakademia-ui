import React from "react";

const Profile = () => (
  <section className="section">
    <h2>👤 My Profile</h2>
    <ul>
      <li>Name: Prof. John Smith</li>
      <li>Staff ID: ST1025</li>
      <li>Email: john.smith@university.edu</li>
      <li>Address: 45 Park Lane, Springfield</li>
    </ul>
    <button onClick={() => alert("Profile photo upload opened")}>
      Upload Profile Photo
    </button>
    <button onClick={() => alert("Address update form opened")}>
      Update Address
    </button>
  </section>
);

export default Profile;
