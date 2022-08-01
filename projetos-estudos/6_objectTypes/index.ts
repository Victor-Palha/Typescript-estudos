// 1 - Tipo de objeto para função com interface
interface Product{
    name: string
    price: number
    isAvailable: boolean
}

function showProductDetails(product: Product){
    console.log(`Nome do produto é ${product.name} e seu preço é R$${product.price}`)
    if(!product.isAvailable){
        console.log(`Produto: ${product.name} não está disponivel`)
    }
}

const shirt: Product = {
    name: "Camisa do programador",
    price: 49.99,
    isAvailable: true
}
//showProductDetails(shirt)

// 2 - propriedade opcional em interface

interface User{
    email: string,
    role?: string
}

function showUserDetails(user: User){
    console.log(`O email do usuário é ${user.email}`)
    if(user.role){
        console.log(`A função do usuário é ${user.role}`)
    }
}
/*
const user1: User ={
    email: "email.teste@teste.com",
    role: "Admin"
}
const user2: User ={
    email: "teste@teste.com"
}
//showUserDetails(user1)
//showUserDetails(user2)

// 3 -Propriedades readonly
interface Car {
    brand: string,
    readonly wheels: number
}
*/
/*
const fusca: Car = {
    brand: "WS",
    wheels: 4
}
*/
//console.log(fusca)
//ERRO
//fusca.wheels = 5

// 4 - Index Signature
interface CoordObject{
    [index:string]: number
}

let coords:CoordObject = {
    x:10
}
coords.y = 15
//console.log(coords)

// 5 - Extending Types

interface Human{
    name: string,
    age: number
}

interface SuperHuman extends Human{
    superpower: string[]
}

const victor: Human = {
    name: "João Victor",
    age: 19
}
const superV: SuperHuman = {
    name: "SuperProgramador",
    age: 1000,
    superpower: ["Programar", "Criar mundos", "Super Inteligencia"]
}
//console.log(victor)
//console.log(superV)

// 6 - Intersection Types

interface Character {
    name: string
}
interface Gun {
    type: string,
    caliber: number
}

type HumanWithGun = Character & Gun

const punisher: HumanWithGun = {
    name: "The Punisher",
    type: "Pistola",
    caliber: .45
}
//console.log(punisher)

// 7 - ReadOnlyArray

let myArray: ReadonlyArray<string> = ["maça", "laranja", "banana"]

//myArray[3]="maracujar"
//console.log(myArray)

// 8 - Tuplas
type fiveNumber = [number, number, number, number, number]

const myNumberArray: fiveNumber = [1,2,3,4,5]
// const myNumberArray2: fiveNumber = [6,5,4,3,2,1]

type nameAge = [string, number]
const anotherUser: nameAge = ["victor", 19]
//console.log(anotherUser[0])

// 9 - Tuplas readonly

function showNumbers(numbers: readonly [number, number]){
    console.log(numbers[0])
    console.log(numbers[1])
}
showNumbers([1,2])