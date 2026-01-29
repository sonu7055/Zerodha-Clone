import React, { useEffect, useState } from 'react';
import { FaSearch, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import '../styles/Markets.css';

const Markets = () => {
  const [stocks, setStocks] = useState([]);
  const [filteredStocks, setFilteredStocks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStocks();
  }, []);

  const fetchStocks = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/stocks');
      if (response.ok) {
        const data = await response.json();
        setStocks(data);
        setFilteredStocks(data);
      }
    } catch (err) {
      console.error('Error fetching stocks:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = stocks.filter(stock =>
      stock.symbol.toLowerCase().includes(query) ||
      stock.name.toLowerCase().includes(query)
    );
    setFilteredStocks(filtered);
  };

  if (loading) return <div className="loading">Loading markets...</div>;

  return (
    <div className="markets">
      <div className="markets-header">
        <h1>Stock Markets</h1>
        <p>Explore and trade stocks</p>
      </div>

      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search by symbol or name..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      <div className="stocks-grid">
        {filteredStocks.map((stock) => {
          const changePercent = ((stock.currentPrice - stock.openPrice) / stock.openPrice * 100).toFixed(2);
          const isPositive = changePercent >= 0;

          return (
            <div key={stock._id} className="stock-card">
              <div className="stock-header">
                <h3>{stock.symbol}</h3>
                <span className={`change ${isPositive ? 'positive' : 'negative'}`}>
                  {isPositive ? <FaArrowUp /> : <FaArrowDown />}
                  {Math.abs(changePercent)}%
                </span>
              </div>

              <p className="stock-name">{stock.name}</p>

              <div className="stock-price">
                <span className="current">₹{stock.currentPrice.toFixed(2)}</span>
              </div>

              <div className="stock-details">
                <div className="detail">
                  <label>Open</label>
                  <span>₹{stock.openPrice.toFixed(2)}</span>
                </div>
                <div className="detail">
                  <label>High</label>
                  <span>₹{stock.highPrice.toFixed(2)}</span>
                </div>
                <div className="detail">
                  <label>Low</label>
                  <span>₹{stock.lowPrice.toFixed(2)}</span>
                </div>
                <div className="detail">
                  <label>Volume</label>
                  <span>{(stock.volume / 1000000).toFixed(2)}M</span>
                </div>
              </div>

              <button className="btn btn-primary">Buy</button>
            </div>
          );
        })}
      </div>

      {filteredStocks.length === 0 && (
        <div className="no-results">
          <p>No stocks found matching your search</p>
        </div>
      )}
    </div>
  );
};

export default Markets;
