// transaction.js

// Task 3 - Create the Transaction Module

// import array and function 
import { assets, getAssetById } from './asset.js';

export class Transaction{
    constructor(assetId, type, quantity){
        this.assetId = assetId;
        this.type = type;
        this.quantity = quantity;
        this.asset = getAssetById(assetId);

        if (! this.asset) {
            throw new Error('Asset not found.');
        }

        this.executeTransaction();
    }

    executeTransaction(){
        if (this.type === 'buy'){
            this.asset.quantity += this.quantity;
        } else if (this.type === 'sell'){
            if (this.asset.quantity < this.quantity) {
                throw new Error('Insufficient quantity for sale of ${this.asset.name}');
            }
            this.asset.quantity -= this.quantity;
        } else{
            throw new Error('Invalid transaction type.');
        }
    }
};

