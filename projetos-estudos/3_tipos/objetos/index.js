"use strict";
/* Typescript com classe, me adiante e resolvi testar, apenas ignore
class pessoa{
    nome:string
    idade:number
    cargo: string
    constructor(nome:string, idade:number, cargo:string){
        this.nome = nome
        this.idade = idade
        this.cargo = cargo
    }
    getNome() {
        console.log(this.nome)
    }

}

const victor = new pessoa("Victor", 19, "Programador")

victor.getNome()
*/
function getAtributos(pessoa) {
    console.log(`Nome é: ${pessoa.nome}`);
    console.log(`Idade é: ${pessoa.idade}`);
}
const alguem = { nome: "joão", idade: 19 }; //Declaração por Inference
getAtributos(alguem);
