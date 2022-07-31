"use strict";
const myPen = {
    name: "Caneta",
    wheels: false,
    engine: false,
    color: "Black"
};
function showCharLicense(obj, key) {
    return `${obj[key]}`;
}
const myChar = {
    name: "João Victor",
    age: 19,
    hasDriverLicense: false
};
//console.log(showCharLicense(myChar, 'hasDriverLicense'))
// 6 - Typeof type operator
const username = 'João';
const username2 = "Victor";
const username3 = "Palha";
const newTruck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga"
};
function showKm(km) {
    console.log(`O Km do caminhão é de ${km}`);
}
showKm(newTruck.km);
const someVar = 15;
const testing = 'Some text';
