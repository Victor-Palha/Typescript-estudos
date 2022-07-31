# Classes
***
**Campos em classes**
* Em TS podemos adicionar novos campos a uma classe, ou seja, iniciar
a classe com campos para os futuros dados dos objetos;
* Que serão as propriedades dos objetos instanciados;
* Estes campos podem ser tipados também;
* Note que um campo sem valor inicial, deve ser declarado com `!`;
    ´´´
    class User{
    name!: string
    age!: number
    }

    const matheus = new User()
    matheus.name = "Matheus"
    matheus.age = 19
    console.log(matheus)
    ´´´

**Constructor**
* *Constructor* é uma função que nos dá a possibilidade de iniciar um objeto
com valores nos seus campos;
* Isso faz com que *não precisemos mais da* `!`;
* Provavelmente *todos os campos serão preenchidos* na hora de
instanciar um objeto;
    ```
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
    ```

**Campos readonly**
* Podemos iniciar o campo com valor e torná-lo *readonly*;
* Ou seja, será um *valor só para consulta*;
* Não poderemos alterar este valor ao longo do programa;
    ```
    class Car{
        name
        readonly wheels2 = 4

        constructor(name:string){
            this.name = name
        }
    }

    const newCar = new Car("Fusca")
    console.log(newCar)
    ```

**Herança e super**
* Para gerar uma herança utilizamos a palavra reservada `extends`;
* Depois vamos *precisar passar as propriedades da classe pai para ela*,
quando instanciamos um objeto;
* Isso será feito com a *função `super`*;
    ```
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
    ```

**Métodos**
* *Métodos* são como funções da classe;
* *Podemos criá-los junto das classes* e os objetos podem utilizá-los;
* É uma maneira de *adicionar funcionalidades* as classes;
    ```
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
    ```

**O this**
* A palavra reservada this serve para *nos referirmos ao objeto em si*;
* Ou seja, conseguimos *acessar as suas propriedades*;
* Esta funcionalidade funciona da mesma forma que em JavaScript;
    ```
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
    ```

**Utilizando getters**
* Os *getters* são uma forma de retornar propriedades do objeto;
* Porém *podemos modificá-las neste retorno*, isso é muito interessante;
* Ou seja, é um método para ler propriedades;
    ```
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
    ```

**Utilizando setters**
* Os getters leem propriedades, os *setters* as modificam/atribuem;
* Logo, *podemos fazer validações antes de inserir* uma propriedade;
* Os setters também *funcionam como métodos*;
    ```
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
    ```

**Herança de interfaces**
* Podemos herdar de interfaces também com a instrução *implements*;
* A ideia é bem *parecida de extends*;
* Porém esta forma é mais utilizada para *criar os métodos que várias classes terão em comum*;
    ```
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
    ```

**Override de métodos**
* O *override* é uma técnica utilizada para substituir um método de uma
classe que herdamos algo;
* Basta *criar o método com o mesmo nome* na classe filha;
* Isso caracteriza o override;
    ```
    
    ```
   
**Visibilidade**
* Visibilidade é o conceito de expor nossos métodos de classes;
* *public*: visibilidade default, pode ser acessado em qualquer lugar;
* *protected*: acessível apenas a subclasses da classe do método, para
acessar uma propriedade precisamos de um método;
* *private*: apenas a classe que declarou o método pode utilizar;
* Veremos exemplos de todos eles a seguir!


**Visibilidade: public**
* O *public* é o modo de visibilidade default;
* Ou seja, *já está implícito* e não precisamos declarar;
* Basicamente *qualquer método ou propriedade* de classe pai, estará
acessível na classe filha;
    ```
    class Z {
        public x = 10
    }
    class Y extends Z{}

    const ZInstance = new Y
    console.log(ZInstance.x)
    ```
   
**Visibilidade: protecte**
* Os itens *protected* podem ser utilizados apenas em subclasses;
* Uma propriedade *só pode ser acessada por um método*, por exemplo;
* O mesmo acontece com métodos;
* Adicionando uma camada de segurança ao código criado em uma classe;
    ```
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
    ``` 

**Visibilidade: private**
* Os itens *private*, propriedades e objetos, só podem ser acessados na
classe que os definiu;
* E ainda *precisam de métodos* para serem acessados;
* Esta é a *maior proteção* para propriedades e métodos;
    ```
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
    ```
   
**Static members**
* Podemos criar propriedades e métodos *estáticos* em classes;
* Isso faz com que o acesso ou a utilização *não dependam de objetos*;
* Podemos utilizá-los a partir da *própria classe*;
    ```
    //a Palavra chave static dá acesso as propriedades da classe sem precisar instanciar objetos
    class StaticMembers {
        static prop = "teste static"
        static staticMethod(){
            console.log("Este é um método estático!")
        }
    }

    console.log(StaticMembers.prop)
    StaticMembers.staticMethod()
    ```
   
**Generic class**
* Podemos criar classes com *tipos genéricos* também;
* Ou seja, as propriedades dos argumentos podem ter os tipos definidos *na hora da criação da instância*;
* Isso nos permite *maior flexibilidade* em uma classe;
    ```
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
    ```
  
**Parameters properties**
* *Parameters properties* é um recurso para definir a privacidade, nome e
tipo das propriedades no constructor;
* Isso *resume um pouco a sintaxe* das nossas classes;
    ```
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
    ```

**Class Expressions**
* *Class Expressions* é um recurso para criar uma classe anônima;
* Podemos também utilizar *generics* junto deste recurso;
* Vamos encapsular a classe em uma *variável*;
    ```
    const myClass = class<T>{
        constructor(public name:T){
            this.name = name
        }
    }

    const pessoa = new myClass("Victor")
    console.log(pessoa.name)
    ```
   
**Abstract class**
* *Abstract Class* é um recurso para servir como molde de outra classe;
* *Todos os métodos dela devem ser implementados* nas classes que a
herdam;
* E também *não podemos instanciar objetos* a partir destas classes;
    ```
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
    ```
   
**Relações entre classes**
* Podemos criar um *objeto com base em outra classe*;
* *Quando as classes são idênticas* o TS não reclama sobre esta ação;
* Precisamos que as duas sejam exatamente iguais;
    ```
    class Horse{
        name!: string
    }
    class Cat {
        name!: string
    }
    /*Na instancia do objeto a tipagem do objeto é dada por uma classe onde tem os EXATOS mesmos atributos da classe que está sendo instanciada, por isso não ocorre problema*/
    const vacalo: Horse = new Cat()
    ```
   