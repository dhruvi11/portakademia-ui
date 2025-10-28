import React, { useState } from "react";
import "../../styles/AdmissionForm.css";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    degreeType: "",
    program: "",
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    phone: "",
    address: "",
    profilePicture: null,
    diploma: null,
    transcript: null,
    birthCertificate: null,
    idDocument: null,
    goodConduct: null,
    physicalFitness: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Application submitted successfully!");
  };

  return (
    <div className="form-container">
      <h2>University Admission Form - Kinshasa</h2>
      <form onSubmit={handleSubmit}>
        {/* Degree Section */}
        <label>
          Degree Type <span className="required">*</span>
        </label>
        <select
          name="degreeType"
          value={formData.degreeType}
          onChange={handleChange}
          required
        >
          <option value="">-- Select Degree Type --</option>
          <option>Bachelor</option>
          <option>Master</option>
          <option>PhD</option>
        </select>

        <label>
          Program <span className="required">*</span>
        </label>
        <select
          name="program"
          value={formData.program}
          onChange={handleChange}
          required
        >
          <option value="">-- Select Program --</option>
          <option>Computer Science</option>
          <option>Business Administration</option>
          <option>Engineering</option>
        </select>

        {/* Personal Info */}
        <div className="section-title">Personal Information</div>

        <label>
          First Name <span className="required">*</span>
        </label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <label>
          Last Name <span className="required">*</span>
        </label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        <label>
          Date of Birth <span className="required">*</span>
        </label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />

        <label>
          Email <span className="required">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>
          Phone Number <span className="required">*</span>
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label>
          Address <span className="required">*</span>
        </label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          rows="2"
          required
        ></textarea>

        <label>Profile Picture</label>
        <input type="file" name="profilePicture" onChange={handleChange} />

        {/* Required Docs */}
        <div className="section-title">Required Documents</div>

        <label>
          High School Diploma <span className="required">*</span>
        </label>
        <input type="file" name="diploma" onChange={handleChange} />

        <label>High School Transcript</label>
        <input type="file" name="transcript" onChange={handleChange} />

        <label>Birth Certificate</label>
        <input type="file" name="birthCertificate" onChange={handleChange} />

        <label>Identification Document</label>
        <input type="file" name="idDocument" onChange={handleChange} />

        <label>Certificate of Good Conduct</label>
        <input type="file" name="goodConduct" onChange={handleChange} />

        <label>
          Certificate of Physical Fitness <span className="required">*</span>
        </label>
        <input type="file" name="physicalFitness" onChange={handleChange} />

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default AdmissionForm;
