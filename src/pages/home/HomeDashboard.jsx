import React from "react";
import "./HomeDashboard.css";
import heroImg from "../../assets/heroImg.png";
import student1 from "../../assets/student1.png";
import student2 from "../../assets/student2.png";
import student3 from "../../assets/student3.png";
import { FaBook, FaGlobe, FaChalkboardTeacher, FaMedal } from "react-icons/fa";

const HomeDashboard = () => {
  return (
    <div className="home-container">
      {/* 🏠 HERO SECTION */}
      <section className="hero">
        <div className="hero-left">
          <h1>
            <span className="accent">Discover</span> <br />
            Knowledge <br />
            <span className="highlight">Shape the Future</span>
          </h1>
          <p>
            Welcome to <b>Portakademia</b> — a global learning platform empowering
            students and professionals through world-class education, innovation,
            and collaboration.
          </p>
          <button className="cta-btn">Explore Programs →</button>
        </div>

        <div className="hero-right">
          <div className="image-frame">
            <img src={heroImg} alt="Learning Illustration" />
          </div>
        </div>
      </section>

      {/* 🎓 FEATURE HIGHLIGHTS */}
      <section className="features">
        <div className="feature-card">
          <FaBook className="icon" />
          <h3>50+ Programs</h3>
          <p>Diverse academic paths designed for creativity and innovation.</p>
        </div>
        <div className="feature-card">
          <FaGlobe className="icon" />
          <h3>Global Exposure</h3>
          <p>Join learners from across 25+ countries in collaborative growth.</p>
        </div>
        <div className="feature-card">
          <FaChalkboardTeacher className="icon" />
          <h3>Expert Faculty</h3>
          <p>Guided by industry leaders and top-tier educators worldwide.</p>
        </div>
        <div className="feature-card">
          <FaMedal className="icon" />
          <h3>Award-Winning</h3>
          <p>Recognized globally for innovation and quality learning.</p>
        </div>
      </section>

      {/* 🌍 WHY CHOOSE US */}
      <section className="why-choose">
        <h2>Why Choose Portakademia?</h2>
        <div className="why-grid">
          <div className="why-card">
            <h4>Flexible Learning</h4>
            <p>Learn anytime, anywhere, at your own pace — on any device.</p>
          </div>
          <div className="why-card">
            <h4>Career-Ready Skills</h4>
            <p>Practical and project-based courses tailored for real success.</p>
          </div>
          <div className="why-card">
            <h4>Global Recognition</h4>
            <p>Earn certificates and degrees recognized around the world.</p>
          </div>
        </div>
      </section>

      {/* 👩‍🎓 STUDENT SUCCESS */}
      <section className="students">
        <h2>Meet Our Achievers</h2>
        <div className="student-grid">
          {[student1, student2, student3].map((img, i) => (
            <div className="student-card" key={i}>
              <img src={img} alt={`Student ${i + 1}`} />
              <h4>{["Dhruvika Chauhan", "James Anderson", "Amelia Smith"][i]}</h4>
              <p>{["UX Design", "AI & Data Science", "Business Strategy"][i]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 💬 TESTIMONIALS / STATS */}
      <section className="stats">
        <div className="stat-card">
          <h2>10K+</h2>
          <p>Active Learners</p>
        </div>
        <div className="stat-card">
          <h2>500+</h2>
          <p>Expert Instructors</p>
        </div>
        <div className="stat-card">
          <h2>95%</h2>
          <p>Graduate Success Rate</p>
        </div>
      </section>

      {/* 🚀 CTA SECTION */}
      <section className="cta">
        <h2>Start Your Journey Today</h2>
        <p>
          Unlock your potential with Portakademia — the platform for future leaders.
        </p>
        <button className="cta-btn-large">Join Now →</button>
      </section>
    </div>
  );
};

export default HomeDashboard;
