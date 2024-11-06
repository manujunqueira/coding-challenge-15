// assets.js

// Task 1 - Create the Asset Module

// create an assets array 
const assets = [ 
    {id: 1007, name:"US Bond", type: "Bond", price: 1000, quantity: 7},
    {id: 14, name:"Apple", type: "Stock", price: 200, quantity: 40},
    {id: 26, name:"Tesla Inc", type: "Stock", price: 700, quantity: 23},
    {id: 1016, name:"Convertible Bond", type: "Bond", price: 1100, quantity: 15}
];

// create getAssetById(id) function
function getAssetById(id){
    return assets.find(asset => asset.id === id);
}

// export assets array and the function 
export function getAssetById(id) {
    return assets.find(asset => asset.id === id);
}


