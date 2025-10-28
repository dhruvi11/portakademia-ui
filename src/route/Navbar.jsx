import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      {isLoggedIn ? (
        <>
          <Link to="/student" className="nav-link">Dashboard</Link>
          <button onClick={handleLogoutClick} className="logout-btn">Logout</button>
        </>
      ) : (
        <Link to="/login" className="login-btn">Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
