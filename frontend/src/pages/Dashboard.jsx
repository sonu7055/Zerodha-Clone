import React, { useEffect, useState } from 'react';
import { FaChartLine, FaPlus, FaX } from 'react-icons/fa';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [portfolio, setPortfolio] = useState(null);
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    fetchPortfolio();
    fetchStocks();
  }, []);

  const fetchPortfolio = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/portfolio', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        setPortfolio(data);
      }
    } catch (err) {
      console.error('Error fetching portfolio:', err);
    }
  };

  const fetchStocks = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/stocks');
      if (response.ok) {
        const data = await response.json();
        setStocks(data);
      }
    } catch (err) {
      console.error('Error fetching stocks:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Welcome, {user?.name}!</h1>
        <p>Dashboard • Monitor your portfolio and trade stocks</p>
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <h3>Account Balance</h3>
          <p className="balance">₹{user?.accountBalance?.toLocaleString('en-IN')}</p>
        </div>

        <div className="card">
          <h3>Total Invested</h3>
          <p className="balance">₹{portfolio?.totalInvested?.toLocaleString('en-IN') || '0'}</p>
        </div>

        <div className="card">
          <h3>Current Value</h3>
          <p className="balance">₹{portfolio?.totalCurrentValue?.toLocaleString('en-IN') || '0'}</p>
        </div>

        <div className="card">
          <h3>Profit/Loss</h3>
          <p className={`balance ${(portfolio?.totalProfitLoss || 0) >= 0 ? 'positive' : 'negative'}`}>
            ₹{portfolio?.totalProfitLoss?.toLocaleString('en-IN') || '0'}
          </p>
        </div>
      </div>

      <div className="content-grid">
        <div className="section">
          <h2>Your Holdings</h2>
          {portfolio?.holdings?.length > 0 ? (
            <table className="holdings-table">
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Quantity</th>
                  <th>Avg Price</th>
                  <th>Current Price</th>
                  <th>Invested</th>
                  <th>Current Value</th>
                  <th>P&L</th>
                </tr>
              </thead>
              <tbody>
                {portfolio.holdings.map((holding, index) => (
                  <tr key={index}>
                    <td>{holding.symbol}</td>
                    <td>{holding.quantity}</td>
                    <td>₹{holding.averagePrice.toFixed(2)}</td>
                    <td>₹{holding.currentPrice.toFixed(2)}</td>
                    <td>₹{holding.totalInvested.toLocaleString('en-IN')}</td>
                    <td>₹{holding.currentValue.toLocaleString('en-IN')}</td>
                    <td className={holding.profitLoss >= 0 ? 'positive' : 'negative'}>
                      ₹{holding.profitLoss.toFixed(2)} ({holding.profitLossPercentage.toFixed(2)}%)
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="no-holdings">No holdings yet. Start trading to build your portfolio!</p>
          )}
        </div>

        <div className="section">
          <h2>Market Overview</h2>
          <div className="stocks-list">
            {stocks.slice(0, 5).map((stock) => (
              <div key={stock._id} className="stock-item">
                <div className="stock-info">
                  <h4>{stock.symbol}</h4>
                  <p>{stock.name}</p>
                </div>
                <div className="stock-price">
                  <p className="current-price">₹{stock.currentPrice}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
