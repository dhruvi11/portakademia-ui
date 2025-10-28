// src/components/Header.jsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Header.css";

const Header = ({ title }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <header className="login-header">
      <div className="login-header-title">{title}</div>
      <select
        value={language}
        onChange={handleLanguageChange}
        className="login-header-select"
      >
        <option value="en">English</option>
        <option value="pl">Polski</option>
        <option value="fr">Français</option>
      </select>
    </header>
  );
};

export default Header;
