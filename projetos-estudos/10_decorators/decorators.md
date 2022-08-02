# Decorators
***

**O que são os decorators?**
* Decorators podem *adicionar funcionalidades extras* a classes e
funções;
* Basicamente criamos novas funções, que são adicionadas a partir de um
`@nome`;
* Esta função será chamada assim que o item que foi definido o decorator
*for executado*;
* Para habilitar precisamos adicionar uma configuração no **tsconfig.json**;
    * `"experimentalDecorators": true`

**Primeiro decorator**
* Vamos criar um decorator como uma *function*;
* Ele pode trabalhar com argumentos especiais que são: `target`,
`propertyKey` e `descriptor`;
* Estes são os *grandes trunfos* do decorator, pois nos dão informação do
local em que ele foi executado;
    * `PropertyKey`: Define o objeto a qual o decorator está atrelado
```
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

const OneObj = new OneClass
OneObj.testing()
```

**Múltiplos decorators**
* Podemos utilizar *múltiplos decorators* em TS;
* O primeiro a ser executado é o que está **mais a baixo do código**;
* Desta maneira é possível criar operações mais complexas;
```
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

const oneInstance = new MultipleDecorator
oneInstance.testing()
```

**Decorator de classe**
* O decorator de classe está ligado ao *constructor*;
* Ou seja, sempre que este for executado, *teremos a execução do decorator*;
* Isso nos permite acrescentar algo a criação de classes;
* Quando criamos o class Descorator, precisamos *passar o método constructor como parametro* do decorator.
```
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
```

**Decorator de método**
* Com este decorator podemos *modificar a execução de métodos*;
* Precisamos inserir o decorator *antes da declaração do método*;
* Ele é executado antes do método;
```
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
```

**Accessor decorator**
* Semelhante ao decorator de método;
* Porém este serve apenas para os *getters e setters*;
* Podemos alterar a execução antes de um set ou get;
```
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
```

**Property decorator**
* O *property decorator* é utilizado nas propriedades de uma classe;
* Ou seja, na hora da definição da mesma podemos *ativar uma função*;
* Isso nos ajuda a modificar ou validar algum valor;
```
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
```

**Exemplo real: Class Decorator**
* Com *Class Decorator* podemos influenciar o constructor;
* Neste exemplo vamos criar uma função para inserir *data de criação dos objetos*;
```
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

```
**Exemplo real: Method Decorator**
* Com *Method Decorator* podemos alterar a execução dos métodos;
* Neste exemplo vamos *verificar se um usuário pode ou não fazer uma alteração* no sistema;
* A alteração seria o método a ser executado;
```
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
```

**Exemplo real: Property Decorator**
* Com o *Property Decorator* conseguimos verificar uma propriedade de um
objeto;
* Vamos criar uma *validação de número máximo de caracteres* com
decorators;
```
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
```
