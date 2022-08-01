"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1 - Exportação de arquivos
function importGreet() {
    console.log("Essa função foi exportada!");
}
//Primeiro tipo de exportação
exports.default = importGreet;
//Ou...
/*  Colocar o export default antes da função/obj/classe/etc...
export default function importGreet(){
    console.log("Essa função doi exportada!")
}
*/ 
