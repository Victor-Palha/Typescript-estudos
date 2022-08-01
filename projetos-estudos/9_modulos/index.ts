// 1 - importação de arquivos
import importGreet from "./greet";

importGreet()

//2 - import de variaveis

import { variavel } from "./variable";
console.log(variavel)

// 3 - multiplas importações
import {p, i, oneFunction } from "./multiple"
oneFunction(i)

//4 - Alias
import { someName as Sn } from "./changeName";
oneFunction(Sn)

//5 - import all
import * as myVaribles from './number'
console.log(myVaribles)
myVaribles.funcTeste()

//6 - Importando tipos

import {Human} from './myType'

class HumanBeing implements Human{
    constructor(public name:string, public age:number, public aliv:boolean){
        this.name = name
        this.age = age
        this.aliv = aliv
    }
}

const Victor = new HumanBeing("Victor", 19, true)
console.log(Victor)