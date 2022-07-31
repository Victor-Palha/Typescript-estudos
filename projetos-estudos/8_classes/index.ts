// 1 - campos em classe
//Iniciando classe sem valores pré-definidos
class User{
    name!: string
    age!: number
}

const matheus = new User()
matheus.name = "Matheus"
matheus.age = 19
console.log(matheus)

// 2 - Constructor
// Iniciar um objeto com valores

class NewUser{
    //Innference
    name
    age
    constructor(name:string, age:number){
        this.name = name
        this.age = age
    }
}

const Victor = new NewUser('Victor', 19)
console.log(Victor)

// 3 - camp readOnly
//Inicializando a classe com um valor readonly, ela não é possível de ser alterada

class Car{
    name
    readonly wheels2 = 4

    constructor(name:string){
        this.name = name
    }
}

const newCar = new Car("Fusca")
console.log(newCar)

// 4 - Herança e Super
//Classe Pai
class Machine {
    name
    constructor(name:string){
        this.name = name
    }
}
//Instancia da classe pai
const trator = new Machine("trator")

//Classe filha
class KillerMachine extends Machine{
    guns
    constructor(name:string, guns:string){
        //A função super é para enviar as propriedades que são do elemento pai
        super(name)
        this.guns = guns
    }
}
//instancia da classe filha
const destroyer = new KillerMachine("DESTROYER", "Shotgun")

console.log(trator)
console.log(destroyer)

// 5 - Métodos
class Elf{
    name
    constructor(name:string){
        this.name = name
    }
    //Metodo
    greeting(){
        console.log(`Hey Stranger!`)
    }
}

const legolas = new Elf("Legolas")
const galadriel  = new Elf("Galadriel")
//Chamando metodo da classe por meio do objeto instanciado!
legolas.greeting()
galadriel.greeting()

// 6 - This
class Dwarf{
    name
    age
    constructor(name:string, age:number){
        this.name = name
        this.age = age
    }
    greeting(){
        return `Hello Stranger! my name is ${this.name} The Dwarf! I live here half of my life, ${(this.age/2)} years to be more specific`
    }
}
const thorin = new Dwarf("Thorin", 250)
const balin = new Dwarf("Balin", 550)
console.log(thorin.greeting())
console.log(balin.greeting())

// 7 - Getters
class Person {
    name
    surname

    constructor(name:string, surname:string){
        this.name = name  
        this.surname = surname
    }
    //Metodo GETTER | Ele precisa de um retorno `return`
    get fullname(){
        return this.name + ' ' + this.surname
    }
}

const frodo = new Person("Frodo", "Baggins")
//Obs importante: Quando chamamos um metodo Getter, ele não é uma função, então não precisa dos parenteses para invocar-la
console.log(frodo.fullname)

// 8 - Setters
class Coords{
    x!:number
    y!:number

    //Metodos setters
    set fillx(x: number){
        if(x === 0 || typeof x != 'number'){
            return
        }
        this.x = x
    }
    set filly(y: number){
        if(y === 0 || typeof y != 'number'){
            return
        }
        this.y = y
    }
}
const map = new Coords()
//Setando valores atráves dos métodos setters
map.fillx = 15
map.filly = 30
console.log(map)

// 9 - Herança de interfaces

interface showTitle{
    itemTitle(): string
}

class BlogPost implements showTitle{
    title
    constructor(title: string){
        this.title = title
    }
    itemTitle(): string{
        return `O titulo do post é: ${this.title}`
    }
}

const myPost = new BlogPost('Como aprender TypeScript')
console.log(myPost.itemTitle())

// 10 - override de métodos
//Classe pai
class Base{
    someMehod(){
        console.log("Alguma coisa")
    }
}
//classe filha
class Nova extends Base{
    //Sobrescrevendo método da classe pai
    someMehod(){
        console.log("Alguma outra coisa")
    }
}
const object = new Nova()
object.someMehod()

// 11 - Visibilidades - public

class Z {
    public x = 10
}
class Y extends Z{}

const ZInstance = new Y
console.log(ZInstance.x)

// 12 - Visibilidades - protected

class E{
    protected x = 15
    protected protectedMethod(){
        console.log("Esse método é protegido!")
    }
}

class F extends E{
    get showX(){
        return this.x
    }
    get showProtectedMethod(){
        return this.protectedMethod()
    }
}
const fInstance = new F()

console.log(fInstance.showX)
fInstance.showProtectedMethod

// 13 - Visibilidades - private
//Classe pai com os atributos privados e protegidos
class PrivateClass{
    private name = "private"
    protected get showName(){
        return this.name
    }
}
//Classe filha com metodo publico que acessa o método protegido e por sua vez acessa o metodo privado
class ChildClass extends PrivateClass{
    public get getName(){
        return this.showName
    }
}
const pObject = new PrivateClass()
//console.log(pObject.showName)

const pObj = new ChildClass()
console.log(pObj.getName)

//14 - Static members
//a Palavra chave static dá acesso as propriedades da classe sem precisar instanciar objetos
class StaticMembers {
    static prop = "teste static"
    static staticMethod(){
        console.log("Este é um método estático!")
    }
}

console.log(StaticMembers.prop)
StaticMembers.staticMethod()

// 15 - generic class
class Item<T,U>{
    first
    second

    constructor(first: T, second:U){
        this.first = first
        this.second = second
    }
}

const newItem = new Item("caixinha", false)
console.log(newItem)

//16 - Parameters properties
class ParametersPropeties{
    constructor(public name: string, private qty: number, private price: number){
        this.name = name
        this.qty = qty
        this.price = price
    }

    get showQty(){
        return this.qty
    }
    get showPrice(){
        return this.price
    }
}

const newShirt = new ParametersPropeties("camisa", 5, 19.99)
//console.table(newShirt)
// console.log(newShirt.qty)
console.log(newShirt.showQty)
console.log(newShirt.showPrice)

//17- Class Expressions

const myClass = class<T>{
    constructor(public name:T){
        this.name = name
    }
}

const pessoa = new myClass("Victor")
console.log(pessoa.name)

//18 - Abstract class
abstract class AbstractClass{
    abstract showName(): void
}

//const newObj = new AbstractClass() | Não se pode instanciar uma classe abstrata
class AbstractExemple extends AbstractClass{
    constructor(public name: string){
        super()
        this.name = name
    }
    showName():void {
        console.log(this.name)
    }
}
const newAbstractObject = new AbstractExemple("Jhonny")
newAbstractObject.showName()

// 19 - Relações entre classes
class Horse{
    name!: string
}
class Cat {
    name!: string
}
/*Na instancia do objeto a tipagem do objeto é dada por uma classe onde tem os EXATOS mesmos atributos da classe que está sendo instanciada, por isso não ocorre problema*/
const vacalo: Horse = new Cat()