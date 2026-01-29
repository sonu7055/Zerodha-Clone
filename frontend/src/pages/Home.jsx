import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaChartLine, FaLock, FaMobile } from 'react-icons/fa';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>The Stock Market Portal</h1>
          <p>Trading platform inspired by Zerodha. Reference: <a href="https://zerodha.com/" target="_blank" rel="noopener noreferrer">https://zerodha.com/</a></p>
          <p className="hero-subtext">Trade stocks, track portfolio, and grow your wealth</p>
          <div className="hero-buttons">
            <Link to="/signup" className="btn btn-primary">
              Start Trading <FaArrowRight />
            </Link>
            <Link to="/login" className="btn btn-secondary">
              Login
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose Our Platform?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <FaChartLine className="feature-icon" />
            <h3>Real-Time Trading</h3>
            <p>Trade stocks in real-time with live price updates</p>
          </div>
          <div className="feature-card">
            <FaLock className="feature-icon" />
            <h3>Secure & Safe</h3>
            <p>Bank-grade security with encrypted transactions</p>
          </div>
          <div className="feature-card">
            <FaMobile className="feature-icon" />
            <h3>Easy to Use</h3>
            <p>Intuitive interface for both beginners and experts</p>
          </div>
        </div>
      </section>

      <section className="stats">
        <h2>Our Platform Stats</h2>
        <div className="stats-grid">
          <div className="stat">
            <h3>5000+</h3>
            <p>Active Traders</p>
          </div>
          <div className="stat">
            <h3>₹500Cr+</h3>
            <p>Trading Volume</p>
          </div>
          <div className="stat">
            <h3>100%</h3>
            <p>Secure Transactions</p>
          </div>
          <div className="stat">
            <h3>24/7</h3>
            <p>Support Available</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
