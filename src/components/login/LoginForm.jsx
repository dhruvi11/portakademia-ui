import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import COLORS from "../../utils/colors";
import SIZES from "../../utils/sizes";
import FONTS from "../../utils/fonts";
import loginImg from "../../assets/loginImg.png";

import "./loginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "test@demo.com" && password === "12345") {
      navigate("/dashboard");
    } else {
      alert("Invalid credentials (use test@demo.com / 12345)");
    }
  };

  return (
    <div className="login-wrapper">
      {/* Left Panel */}
      <div className="login-left">
        <div className="login-box">
          <h1 className="login-title" style={{ color: COLORS.TEXT_DARK, fontFamily: FONTS.HEADING }}>
            Welcome to <span style={{ color: COLORS.PRIMARY }}>Portakademia</span>
          </h1>
          <p
            className="login-subtitle"
            style={{
              color: COLORS.TEXT_MUTED,
              fontSize: SIZES.FONT_MEDIUM,
              marginBottom: SIZES.SPACING_LARGE,
              fontFamily: FONTS.PRIMARY,
            }}
          >
            Sign in to your account
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                border: `1px solid ${COLORS.BORDER}`,
                borderRadius: SIZES.RADIUS,
                padding: SIZES.SPACING_MEDIUM,
                fontSize: SIZES.FONT_MEDIUM,
                fontFamily: FONTS.PRIMARY,
              }}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                border: `1px solid ${COLORS.BORDER}`,
                borderRadius: SIZES.RADIUS,
                padding: SIZES.SPACING_MEDIUM,
                fontSize: SIZES.FONT_MEDIUM,
                fontFamily: FONTS.PRIMARY,
                marginTop: SIZES.SPACING_SMALL,
              }}
            />

            <button
              type="submit"
              className="login-btn"
              style={{
                backgroundColor: COLORS.PRIMARY,
                color: COLORS.WHITE,
                borderRadius: SIZES.RADIUS,
                padding: SIZES.SPACING_MEDIUM,
                fontWeight: 600,
                fontSize: SIZES.FONT_MEDIUM,
                fontFamily: FONTS.PRIMARY,
                marginTop: SIZES.SPACING_LARGE,
              }}
            >
              Log In
            </button>
          </form>

          <p
            className="forgot-password"
            style={{
              color: COLORS.PRIMARY,
              marginTop: SIZES.SPACING_SMALL,
              fontSize: SIZES.FONT_SMALL,
              cursor: "pointer",
              textAlign: "right",
            }}
          >
            Forgot password?
          </p>
           <p className="login-text">
        Don’t have an account?{" "}
        <span className="login-link" onClick={() => navigate("/signup")}>
          Signup
        </span>
      </p>
        </div>
        
      </div>

      {/* Right Panel */}
      <div
        className="login-right"
        style={{
          // background: `linear-gradient(135deg, ${COLORS.PRIMARY}, #0057b8)`,
        }}
      >
        <img src={loginImg} alt="Login Illustration" className="login-image" />
      </div>
    </div>
  );
};

export default LoginForm;
