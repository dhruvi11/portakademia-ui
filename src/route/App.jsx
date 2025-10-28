import ThemeProvider from '../components/ThemeProvider.jsx';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import "../i18n/i18n.js"; 
import LoginPage from '../pages/auth/LoginPage.jsx';
import DashboardPage from '../pages/dashboard/DashboardPage.jsx';
import SignupPage from '../pages/auth/SignupPage.jsx';
import HomeDashboard from '../pages/home/HomeDashboard.jsx';


function App() {
  return (
    <Provider store={store}>
      <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/home" element={<HomeDashboard />} />
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
