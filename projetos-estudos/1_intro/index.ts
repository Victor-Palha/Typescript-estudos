const firstname = "Victor"
const anotherName = 1
const boo = true

function greeting(name: string){
    console.log(`Hello ${name}`)
}

greeting(firstname)
//greeting(anotherName)
//greeting(x)

//Desafio 

const number1 = 10
const number2 = 5

function soma(num: number, num2: number){
    console.log(num+num2)
}
soma(number1, number2)

//tsc indes.ts - compilar