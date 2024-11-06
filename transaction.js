// transaction.js

// Task 3 - Create the Transaction Module

// import array and function 
import { assets, getAssetById } from './asset.js';

export class Transaction{
    constructor(assetId, type, quantity){

        /**
     * @param {number} assetId -  ID of the asset involved in the transaction.
     * @param {string} type - type of transaction, either "buy" or "sell".
     * @param {number} quantity -  quantity of the asset to be transacted.
     */

        this.assetId = assetId;
        this.type = type;
        this.quantity = quantity;
        // Retrieve the asset object based on assetId
        this.asset = getAssetById(assetId);

        // check if the asset exists, throw an error if not found
        if (! this.asset) {
            throw new Error('Asset not found.');
        }

        this.executeTransaction();
    }


    /**
     * Method to execute the transaction based on the type.
     * If 'buy', increase the asset quantity.
     * If 'sell', check if enough quantity is available; if so, decrease the quantity.
     */
    executeTransaction(){
        if (this.type === 'buy'){ //add the quantity to the asset's current quantity
            this.asset.quantity += this.quantity;
        } else if (this.type === 'sell'){
            if (this.asset.quantity < this.quantity) { //check if the asset has sufficient quantity
                throw new Error(`Insufficient quantity for sale of ${this.asset.name}`);
            }// Throw an error if there is not enough quantity to sell
            this.asset.quantity -= this.quantity; // Reduce the asset quantity for a valid sell transaction
        } else{
            throw new Error('Invalid transaction type.');
        }  // If the transaction type is invalid, throw an error
    }
};

