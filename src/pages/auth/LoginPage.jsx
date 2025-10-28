import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/login/LoginForm";
import "../../styles/LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
