# Sample Stock Data Initialization Script

import os
import sys
sys.path.insert(0, os.path.dirname(__file__))

sample_stocks = [
    {
        "symbol": "RELIANCE",
        "name": "Reliance Industries Limited",
        "currentPrice": 2850.50,
        "openPrice": 2820.00,
        "highPrice": 2890.75,
        "lowPrice": 2810.00,
        "closePrice": 2850.50,
        "volume": 2500000,
        "marketCap": "18.5 Lakh Cr",
        "peRatio": 21.5,
        "dividendYield": 1.2,
        "industryType": "Petrochemicals",
        "description": "India's leading energy and materials company"
    },
    {
        "symbol": "TCS",
        "name": "Tata Consultancy Services Limited",
        "currentPrice": 3850.25,
        "openPrice": 3820.00,
        "highPrice": 3890.50,
        "lowPrice": 3810.00,
        "closePrice": 3850.25,
        "volume": 1800000,
        "marketCap": "12.8 Lakh Cr",
        "peRatio": 24.2,
        "dividendYield": 1.5,
        "industryType": "IT Services",
        "description": "Leading IT services and consulting company"
    },
    {
        "symbol": "INFY",
        "name": "Infosys Limited",
        "currentPrice": 1750.75,
        "openPrice": 1720.00,
        "highPrice": 1780.25,
        "lowPrice": 1710.00,
        "closePrice": 1750.75,
        "volume": 3200000,
        "marketCap": "7.3 Lakh Cr",
        "peRatio": 19.8,
        "dividendYield": 2.1,
        "industryType": "IT Services",
        "description": "Global IT services and consulting company"
    },
    {
        "symbol": "HDFC",
        "name": "Housing Development Finance Corporation",
        "currentPrice": 2500.50,
        "openPrice": 2480.00,
        "highPrice": 2550.75,
        "lowPrice": 2470.00,
        "closePrice": 2500.50,
        "volume": 1500000,
        "marketCap": "5.8 Lakh Cr",
        "peRatio": 22.3,
        "dividendYield": 2.5,
        "industryType": "Banking & Finance",
        "description": "India's premier housing finance company"
    },
    {
        "symbol": "ICICIBANK",
        "name": "ICICI Bank Limited",
        "currentPrice": 950.25,
        "openPrice": 940.00,
        "highPrice": 970.50,
        "lowPrice": 935.00,
        "closePrice": 950.25,
        "volume": 2800000,
        "marketCap": "6.2 Lakh Cr",
        "peRatio": 18.5,
        "dividendYield": 2.2,
        "industryType": "Banking & Finance",
        "description": "Leading private sector bank"
    }
]

if __name__ == "__main__":
    print("Sample stocks for initialization:")
    for stock in sample_stocks:
        print(f"\n{stock['symbol']}: {stock['name']}")
        print(f"Price: ₹{stock['currentPrice']}")
        print(f"Volume: {stock['volume']}")
