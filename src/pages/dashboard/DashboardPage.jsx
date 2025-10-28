import React, { useState } from "react";
import "./DashboardPage.css";
import StudentPortal from "../student/StudentPortal";
import StaffPortal from "../staff/StaffPortal";
import AdminPortal from "../admin/AdminPortal";
import HomeDashboard from "../home/HomeDashboard";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.png"; // replace with your real logo

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("home");
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    sessionStorage.clear();
    window.location.href = "/login";
  };

  // --- Render section dynamically ---
  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <section className="home-section">
            <div className="hero-left">
              <HomeDashboard/>
            </div>
          </section>
        );

      case "news":
        return <div className="dashboard-card">📰 Latest News Section</div>;
      case "student":
        return <div className="dashboard-card"><StudentPortal /></div>;
      case "staff":
        return <div className="dashboard-card"><StaffPortal /></div>;
      case "admin":
        return <div className="dashboard-card"><AdminPortal /></div>;
      default:
        return <div className="dashboard-card">Welcome to Portakademia</div>;
    }
  };

  return (
    <div className="dashboard-wrapper">
      {/* HEADER */}
      <header className="dashboard-header">
        <div className="dashboard-logo">
          <img src={logo} alt="Portakademia Logo" />
          <h2>Portakademia</h2>
        </div>

        <nav className="dashboard-nav">
          <button
            className={activeTab === "home" ? "nav-btn active" : "nav-btn"}
            onClick={() => setActiveTab("home")}
          >
            Home
          </button>
          <button
            className={activeTab === "news" ? "nav-btn active" : "nav-btn"}
            onClick={() => setActiveTab("news")}
          >
            News
          </button>
          <button
            className={activeTab === "student" ? "nav-btn active" : "nav-btn"}
            onClick={() => setActiveTab("student")}
          >
            Student
          </button>
          <button
            className={activeTab === "staff" ? "nav-btn active" : "nav-btn"}
            onClick={() => setActiveTab("staff")}
          >
            Staff
          </button>
          <button
            className={activeTab === "admin" ? "nav-btn active" : "nav-btn"}
            onClick={() => setActiveTab("admin")}
          >
            Admin
          </button>
          <button className="nav-btn logout" onClick={handleLogout}>
            Logout
          </button>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main className="dashboard-content">{renderContent()}</main>
    </div>
  );
};

export default DashboardPage;
