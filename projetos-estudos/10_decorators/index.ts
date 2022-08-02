console.log("------------------- 1 - Exemplo de decorator -------------------")
// 1 - Exemplo de decorator
function myDecorator(){
    console.log("iniciando decorator")
    return function(target: any, propertKey: string, descriptor: PropertyDescriptor){

        console.log("Executando decorator!")
        console.log(`Target: ${target}`)
        console.log(`PropertKey: ${propertKey}`)
        console.log(`Descriptor: ${descriptor}`)

    }
}
class OneClass{
    @myDecorator()
    testing(){
        console.log("Terminando execução do método")
    }
}

//const OneObj = new OneClass
//OneObj.testing()

console.log("------------------- 2-Múltiplos decorators -------------------")
//2-Múltiplos decorators
function v(){
    return function(target: any, propertKey: string, descriptor: PropertyDescriptor){
        console.log("Executou decorator V")
    }
}
function o(){
    return function(target: any, propertKey: string, descriptor: PropertyDescriptor){
        console.log("Executou decorator O")
    }
}
function i(){
    return function(target: any, propertKey: string, descriptor: PropertyDescriptor){
        console.log("Executou decorator I")
    }
}
function d(){
    return function(target: any, propertKey: string, descriptor: PropertyDescriptor){
        console.log("Executou decorator D")
    }
}
class MultipleDecorator{
    @v()
    @o()
    @i()
    @d()
    testing(){
        console.log("Terminando Execução")
    }
}

//const oneInstance = new MultipleDecorator
//oneInstance.testing()

console.log("------------------- 3 - Decorator de classe -------------------")
// 3 - Decorator de classe
//Quando criamos os classDescorator, precisamos passar o método constructor como parametro
function classDec(constructor: Function){
    console.log(constructor)
    if(constructor.name === "UserClass"){
        console.log("Criando usuário")
    }

}
@classDec
class UserClass{
    constructor(public name: string){
        this.name = name
    }
}

const joao = new UserClass("Victor")

console.log(joao)

console.log("------------------- 4 - Decorator de método -------------------")
// 4 - Decorator de método

function enumerable(value: boolean){
    return function(target:any, propertKey: string, descriptor: PropertyDescriptor){
        descriptor.enumerable = value
    }
}
class Machines{
    constructor(public name: string){
        this.name = name
    }
    
    @enumerable(true)
    showName():void{
        console.log(this)
        return console.log("O nome da máquina é: "+ this.name)
    }
}

const truck = new Machines("Trator")
truck.showName()

// 5 - Accessor decorator
console.log("------------------- 5 - Accessor decorator -------------------")

class Monster{
    constructor(public name?:string, public age?: number){
        this.name = name
        this.age = age
    }

    @enumerable(true)
    get showName(){
        return `O nome do monstro é ${this.name}`
    }
    @enumerable(false)
    get showAge(){
        return `A idade do monstro é ${this.age}`
    }
}

const goblin = new Monster("Goblin", 21)

console.log(goblin)

// 6 - Property decorator
console.log("------------------- 6 - Property decorator -------------------")

function formatNumber(){
    return function(target:Object, propertKey: string){

        let value: string

        const getter = function(){
            return value
        }
        const setter = function(newValue:string){
            value = newValue.padStart(5, "0")
        }

        Object.defineProperty(target, propertKey,{
            set: setter,
            get: getter
        })
    }
}

class Id{
    @formatNumber()
    public id

    constructor(id:string){
        this.id = id
    }
}
const newId = new Id('2')
console.log(newId.id)

// 7 - Exemplo real com class decorator
function createDate(created: Function){
    created.prototype.createdAt = new Date()
}

@createDate
class Book{
    id
    createdAt?: Date
    constructor(id: number){
        this.id = id
    }
}

@createDate
class Pencil{
    id
    constructor(id: number){
        this.id = id
    }
}

const newBook = new Book(12)
const newPencil = new Pencil(15)

console.log(newBook.createdAt)
console.log(newPencil)


// 8 - Exemplo real com Method Decorator
function chackUserPosted(){
    return function(target: Object, key: string | Symbol, descriptor: PropertyDescriptor){
        const chilFunction = descriptor.value
        console.log(chilFunction)
        descriptor.value = function(...args: any[]){
            if(args[1] === true){
                console.log("O Usuário já postou")
                return null
            }else{
                return chilFunction.apply(this, args)
            }
        }
        return descriptor
    }
}
class Post {
    alreadyPosted = false
    @chackUserPosted()
    post(content: string, alreadyPosted: boolean){
        this.alreadyPosted = true
        console.log("Post do usuário: "+ content)
    }
}

const newPost = new Post()
newPost.post("Meu primeiro Post ", newPost.alreadyPosted)
newPost.post("Meu Segundo Post ", newPost.alreadyPosted)

// 9 - Exemplo real com Property Decorator
function Max(limit: number){
    return function(target: Object, propertKey: string){
        let value:string

        const getter = function(){
            return value
        }
        const setter = function(newVal: string){
            if(newVal.length > limit){
                console.log(`O valor máximo de caracteres deve ser de ${limit}`)
                return null
            }else{
                value = newVal
                console.log("Usuário admin criado")
            }
        }
        Object.defineProperty(target, propertKey,{
            get: getter,
            set: setter
        })
    }
}
class Admin{
    @Max(10)
    username
    constructor(username: string){
        this.username = username
    }
}

const newAdmin = new Admin("1234567891")