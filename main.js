// main.js

// Task 4 - Create the Main Application

import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';

// Helper function to update HTML content
function updatePortfolioDisplay() {
    const portfolioValue = calculatePortfolioValue();
    const portfolioAllocation = getPortfolioAllocation();

    // Display portfolio value
    document.getElementById("portfolio-value").textContent = `Portfolio Value: $${portfolioValue}`;

    // Display portfolio allocation
    const allocationText = portfolioAllocation
        .map(asset => `${asset.name}: ${asset.allocation}`)
        .join(', ');
    document.getElementById("portfolio-allocation").textContent = `Portfolio Allocation: ${allocationText}`;
}

// Function to log transactions in the HTML
function logTransaction(transaction, message) {
    const transactionLog = document.getElementById("transaction-log");
    const logMessage = document.createElement("p");
    logMessage.textContent = message;
    transactionLog.appendChild(logMessage);
}

// Initial display of portfolio
updatePortfolioDisplay();

// create transactions 
try { 
    const transaction1 = new Transaction (14, 'buy', 10); // buy apple stock
    logTransaction(transaction1, `Transaction 1: Bought 10 units of Apple`);

    const transaction2 = new Transaction(1016, 'sell', 5); // sell convertible bonds
    logTransaction(transaction2, `Transaction 2: Sold 5 units of Convertible Bond`);

    const transaction3 = new Transaction (1007, 'sell', 9); // attempt to sell more US Bonds than available
   logTransaction(transaction3, `Transaction 3: Attempted to sell 9 units of US Bond`);
} catch(error) {
    logTransaction(null, `Transaction 3: Error: ${error.message}.`);
}

// Update portfolio display after transactions
updatePortfolioDisplay();
