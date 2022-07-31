// 3 - generics com interface
interface MyObject<T,U,Q>{
    name: string
    wheels: T,
    engine: U,
    color: Q
}

type Pen = MyObject<boolean,boolean,string>

const myPen: Pen = {
    name: "Caneta",
    wheels: false,
    engine: false,
    color: "Black"
}
//console.table(myPen)
// 5 - keyof type operator
//Representa todas as chaves de um objetos
type Charact = {name: string, age: number, hasDriverLicense: boolean}

type C = keyof Charact

function showCharLicense(obj: Charact, key:C):string{
    return `${obj[key]}`
}

const myChar: Charact = {
    name: "João Victor",
    age: 19,
    hasDriverLicense: false
}

//console.log(showCharLicense(myChar, 'hasDriverLicense'))


// 6 - Typeof type operator

const username: string = 'João'
const username2: typeof username = "Victor"
type x = typeof username
const username3: x = "Palha"

//7 - indexed access type
//Representa uma chave expecifica
type Truck = {km:number, kg:number, description:string}

type Km = Truck['km']

const newTruck: Truck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga"
}

function showKm(km: Km){
    console.log(`O Km do caminhão é de ${km}`)
}

showKm(newTruck.km)

//8 - Conditional expressions type
//Criar tipos com base em condições
interface A {}
interface B extends A{}
interface Teste{
    showName(): string
}

type myType = B extends A ? number : string

const someVar:myType = 15

type myTypeB = Teste extends {showName(): string} ? string : boolean

// 9 - Template Literals Type
type TesteA = 'text'

type CustomType = `Some ${TesteA}`

const testing: CustomType = 'Some text'