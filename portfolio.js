// portfolio.js

// Task 2 - Create the Portfolio Module

// importanting the assets array 
import {assets} from './asset.js';

// calculate total portfolio value by summing (price * quantity) of each asset
export function calculatePortfolioValue(){
    return assets.reduce((total,asset)=>total + (asset.price * asset.quantity), 0);
}

// calculate the percentage allocation of each asset in the portfolio
export function getPortfolioAllocation(){
    const totalValue = calculatePortfolioValue();
    return assets.map(asset => ({
        name: asset.name,
        allocation: ((asset.price * asset.quantity) / totalValue * 100).toFixed(2) + '%'
    }));
}