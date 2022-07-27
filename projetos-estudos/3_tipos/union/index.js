"use strict";
function showBalance(balance) {
    console.log(`O saldo é de R$ ${balance}`);
}
showBalance(500);
showBalance('1000');
//Union type avançado
function showUserRole(role) {
    if (typeof (role) === 'boolean') {
        return "Usuário não aprovado!";
    }
    return `A função do usuário é ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
