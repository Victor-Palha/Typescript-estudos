"use strict";
//Deve ser evitado pela tipagem fraca
const arr1 = [1, "teste", true, { nome: "joão" }, []];
arr1.push({ idade: 19 });
console.log(arr1);
console.log(typeof (arr1));
