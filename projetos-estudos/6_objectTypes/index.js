"use strict";
function showProductDetails(product) {
    console.log(`Nome do produto é ${product.name} e seu preço é R$${product.price}`);
    if (!product.isAvailable) {
        console.log(`Produto: ${product.name} não está disponivel`);
    }
}
const shirt = {
    name: "Camisa do programador",
    price: 49.99,
    isAvailable: true
};
function showUserDetails(user) {
    console.log(`O email do usuário é ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é ${user.role}`);
    }
}
const user1 = {
    email: "email.teste@teste.com",
    role: "Admin"
};
const user2 = {
    email: "teste@teste.com"
};
const fusca = {
    brand: "WS",
    wheels: 4
};
let coords = {
    x: 10
};
coords.y = 15;
const victor = {
    name: "João Victor",
    age: 19
};
const superV = {
    name: "SuperProgramador",
    age: 1000,
    superpower: ["Programar", "Criar mundos", "Super Inteligencia"]
};
const punisher = {
    name: "The Punisher",
    type: "Pistola",
    caliber: .45
};
//console.log(punisher)
// 7 - ReadOnlyArray
let myArray = ["maça", "laranja", "banana"];
const myNumberArray = [1, 2, 3, 4, 5];
const anotherUser = ["victor", 19];
//console.log(anotherUser[0])
// 9 - Tuplas readonly
function showNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
