"use strict";
// 1 - Funções que não retornam nada VOID
/*
function withoutReturn():void{
    console.log("No return")
    // return 1
}
withoutReturn()
*/
// 2 - Callbacks
/*
function greeting(name: string){
    return `Olá ${name}`
}
function preGreeting(func: (name: string)=>string, userName:string){
    console.log("Preparando function")
    const greet = func(userName)
    console.log(greet)
}
preGreeting(greeting, "Victor")
*/
// 3 - Generic Functions
/*
function firsElement<T>(arr: T[]){
    return arr[0]
}
console.log(firsElement([1,2,3]))
console.log(firsElement([true, false]))
console.log(firsElement(["a","b","c"]))
console.log(firsElement([false, 1, "a"]))

function mergeObjects<T,U>(obj1: T, obj2:U){
    return{
        ...obj1,
        ...obj2
    }
}

const newObject = mergeObjects({nome:"Victor"}, {age:1, job:"Programmer"})
console.log(newObject)
*/
// 4 - Generic Functions com constraints
/*
function biggestNumber<T, U extends number | string>(a:T, b:U):T|U{
    let biggest: T | U
    if(+a > +b){
        biggest = a
    }else{
        biggest = b
    }
    return biggest
}
console.log(biggestNumber('66',50))
*/
// 5 - especificar tipo de argumento
/*
function mergeArrays<T>(arr1: T[], arr2:T[]){
    return arr1.concat(arr2)
}
console.log(mergeArrays<string | number>([1,2,3], ['teste', 'testando']))
*/
// 6 - Parâmetros opcionais
/*
function moderGreenting(nome: string, greet?: string){
    if(greet){
        return `Olá, ${greet}. ${nome}`
    }else{
        return `Olá, ${nome}`
    }
}
console.log(moderGreenting("joão", "Sr"))
*/
// 7 - Parâmetros default
/*
function somaDeafult(n:number,m=0):number{
    return n+m
}
console.log(somaDeafult(15, 25))
*/
// 8 - Tipo unknown
/*
function doSomething(x: unknown){
    if(Array.isArray(x)){
        console.log("X é uma array!")
    }else if(typeof x === 'number'){
        console.log("X é um número!")
    }else if(typeof x === 'string'){
        console.log("X é uma string!")
    }else if(typeof x === 'boolean'){
        console.log("X é um boolean!")
    }
}

doSomething(false)
*/
// 9 - Tipo never
/*
function showError(msg: string): never{
    throw new Error(msg)
}
showError("Algum erro")
*/
// 10 - Rest parameters
/*
type A = number[]

function sumAll(...n:A):A{
    //return n.reduce((number, sum)=> sum+number)
    return n
}
let restParame = sumAll(1,2,3,4)
restParame.push(20)
console.log(restParame)
*/
// 11 - Destructuring como parametro
/*
function showProductDetails({name, price}: {name:string, price:number}): string{
    return `O nome do produto é ${name} e ele custa R$${price}`
}

const shirt = {name: "Camisa da união flasco", price: 49.99}
console.log(showProductDetails(shirt))
*/ 
