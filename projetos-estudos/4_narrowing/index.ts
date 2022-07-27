// 1 - type guard

/*
type SN =  number | string
function somaDados(a:SN, b:SN){
    if(typeof a === 'string' && typeof b === 'string'){
        console.log(parseFloat(a) + parseFloat(b))
    }else if(typeof a === 'string' && typeof b === 'number'){
        console.log(parseFloat(a) + b)
    }else if(typeof a === 'number' && typeof b === 'string'){
        console.log(a + parseFloat(b))
    }else if(typeof a === 'number' && typeof b === 'number'){
        console.log(a + b)
    }
}

somaDados("15", "25")
somaDados("20", 5)
somaDados(5, "100")
somaDados(25, 25)
*/

// 2 - Checando se valor existe

/*
function operations(arr: number[], operations?: string | undefined){
    if(operations){
        if(operations === 'soma'){
            let res = arr.reduce((inicial, atual)=>inicial+atual)
            return res
        }else if(operations === 'multiplicação'){
            let res = arr.reduce((inicial, atual)=>inicial*atual)
            return res
        }else if(operations === 'divisão'){
            let res = arr.reduce((inicial, atual)=>inicial/atual)
            return res
        }
    }else{
        console.log("Defina uma operação")
    }
}
console.log(operations([100, 3],"divisão"))
*/

// 3 - Instance of

/*
class User{
    name
    constructor(name:string){
        this.name = name
    }
}
class SuperUser extends User{
    constructor(name: string){
        super(name)
    }
}
const victor = new SuperUser("Victor")
const joao = new User('joão')

function userGreeting(user: object){
    if(user instanceof SuperUser){
        console.log(`Olá, seja bem-vindo, sr.${user.name}`)
    }else if(user instanceof User){
        console.log(`oi, ${user.name}`)
    }
}

userGreeting(victor)
userGreeting(joao)
*/

//4 - Operador in

class Dog{
    name
    breed
    constructor(name:string, breed?:string){
        this.name = name
        if(breed){
            this.breed = breed
        }
    }
}

const bela = new Dog("Bela", "Rottweiler")
const aurora = new Dog("Aurora")

function showDog(dog: Dog){
    if('breed' in dog){
        console.log(`O cachorro se chama ${dog.name} e é da raça ${dog.breed}`)
    }else{
        console.log(`O cachorro se chama ${dog.name} e é um SRD`)
    }
}

showDog(bela)
showDog(aurora)