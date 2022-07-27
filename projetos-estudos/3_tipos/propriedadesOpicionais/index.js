"use strict";
//Propriedade opcional sem validação
function showNumber(a, b, c) {
    console.log(`A: ${a}`);
    console.log(`B: ${b}`);
    console.log(`C: ${c}`);
}
showNumber(1, 2);
//Propriedade opcional com validação
function advancedGreeting(firtname, lastname) {
    if (lastname != undefined && typeof (lastname) == 'string') {
        console.log(`Olá, ${firtname} ${lastname}`);
    }
    else {
        console.log(`Olá, ${firtname}`);
    }
}
advancedGreeting('João');
