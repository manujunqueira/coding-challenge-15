// main.js

// Task 4 - Create the Main Application

import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';

// display initial portfolio details
console.log("Initial Portfolio Value:", calculatePortfolioValue());
console.log("Initial Portfolio Allocation:", getPortfolioAllocation());

// create transactions 
try { 
    const transaction1 = new Transaction (14, 'buy', 10); // buy apple stock
    console.log("Transaction 1:", transaction1);

    const transaction2 = new Transaction(1016, 'sell', 5); // sell convertible bonds
    console.log("Transaction 2:", transaction2);

    const transaction3 = new Transaction (1007, 'sell', 9); // attempt to sell more US Bonds than available
    console.log("Transaction3 3:", transaction3);
} catch(error) {
    console.error(error.message);
}

// Display updated portfolio details
console.log("Updated Portfolio Value:", calculatePortfolioValue());
console.log("updated Portfolio Allocation:", getPortfolioAllocation());
