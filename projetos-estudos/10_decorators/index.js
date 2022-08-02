"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log("------------------- 1 - Exemplo de decorator -------------------");
// 1 - Exemplo de decorator
function myDecorator() {
    console.log("iniciando decorator");
    return function (target, propertKey, descriptor) {
        console.log("Executando decorator!");
        console.log(`Target: ${target}`);
        console.log(`PropertKey: ${propertKey}`);
        console.log(`Descriptor: ${descriptor}`);
    };
}
class OneClass {
    testing() {
        console.log("Terminando execução do método");
    }
}
__decorate([
    myDecorator()
], OneClass.prototype, "testing", null);
//const OneObj = new OneClass
//OneObj.testing()
console.log("------------------- 2-Múltiplos decorators -------------------");
//2-Múltiplos decorators
function v() {
    return function (target, propertKey, descriptor) {
        console.log("Executou decorator V");
    };
}
function o() {
    return function (target, propertKey, descriptor) {
        console.log("Executou decorator O");
    };
}
function i() {
    return function (target, propertKey, descriptor) {
        console.log("Executou decorator I");
    };
}
function d() {
    return function (target, propertKey, descriptor) {
        console.log("Executou decorator D");
    };
}
class MultipleDecorator {
    testing() {
        console.log("Terminando Execução");
    }
}
__decorate([
    v(),
    o(),
    i(),
    d()
], MultipleDecorator.prototype, "testing", null);
//const oneInstance = new MultipleDecorator
//oneInstance.testing()
console.log("------------------- 3 - Decorator de classe -------------------");
// 3 - Decorator de classe
//Quando criamos os classDescorator, precisamos passar o método constructor como parametro
function classDec(constructor) {
    console.log(constructor);
    if (constructor.name === "UserClass") {
        console.log("Criando usuário");
    }
}
let UserClass = class UserClass {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
};
UserClass = __decorate([
    classDec
], UserClass);
const joao = new UserClass("Victor");
console.log(joao);
console.log("------------------- 4 - Decorator de método -------------------");
// 4 - Decorator de método
function enumerable(value) {
    return function (target, propertKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machines {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    showName() {
        console.log(this);
        return console.log("O nome da máquina é: " + this.name);
    }
}
__decorate([
    enumerable(true)
], Machines.prototype, "showName", null);
const truck = new Machines("Trator");
truck.showName();
// 5 - Accessor decorator
console.log("------------------- 5 - Accessor decorator -------------------");
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `O nome do monstro é ${this.name}`;
    }
    get showAge() {
        return `A idade do monstro é ${this.age}`;
    }
}
__decorate([
    enumerable(true)
], Monster.prototype, "showName", null);
__decorate([
    enumerable(false)
], Monster.prototype, "showAge", null);
const goblin = new Monster("Goblin", 21);
console.log(goblin);
// 6 - Property decorator
console.log("------------------- 6 - Property decorator -------------------");
function formatNumber() {
    return function (target, propertKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newValue) {
            value = newValue.padStart(5, "0");
        };
        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter
        });
    };
}
class Id {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber()
], Id.prototype, "id", void 0);
const newId = new Id('2');
console.log(newId.id);
// 7 - Exemplo real com class decorator
function createDate(created) {
    created.prototype.createdAt = new Date();
}
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createDate
], Book);
let Pencil = class Pencil {
    constructor(id) {
        this.id = id;
    }
};
Pencil = __decorate([
    createDate
], Pencil);
const newBook = new Book(12);
const newPencil = new Pencil(15);
console.log(newBook.createdAt);
console.log(newPencil);
// 8 - Exemplo real com Method Decorator
function chackUserPosted() {
    return function (target, key, descriptor) {
        const chilFunction = descriptor.value;
        console.log(chilFunction);
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log("O Usuário já postou");
                return null;
            }
            else {
                return chilFunction.apply(this, args);
            }
        };
        return descriptor;
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log("Post do usuário: " + content);
    }
}
__decorate([
    chackUserPosted()
], Post.prototype, "post", null);
const newPost = new Post();
newPost.post("Meu primeiro Post ", newPost.alreadyPosted);
newPost.post("Meu Segundo Post ", newPost.alreadyPosted);
// 9 - Exemplo real com Property Decorator
function Max(limit) {
    return function (target, propertKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            if (newVal.length > limit) {
                console.log(`O valor máximo de caracteres deve ser de ${limit}`);
                return null;
            }
            else {
                value = newVal;
                console.log("Usuário admin criado");
            }
        };
        Object.defineProperty(target, propertKey, {
            get: getter,
            set: setter
        });
    };
}
class Admin {
    constructor(username) {
        this.username = username;
    }
}
__decorate([
    Max(10)
], Admin.prototype, "username", void 0);
const newAdmin = new Admin("1234567891");
