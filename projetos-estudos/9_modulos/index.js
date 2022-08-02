"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 1 - importação de arquivos
const greet_1 = __importDefault(require("./greet"));
(0, greet_1.default)();
//2 - import de variaveis
const variable_1 = require("./variable");
console.log(variable_1.variavel);
// 3 - multiplas importações
const multiple_1 = require("./multiple");
(0, multiple_1.oneFunction)(multiple_1.i);
//4 - Alias
const changeName_1 = require("./changeName");
(0, multiple_1.oneFunction)(changeName_1.someName);
//5 - import all
const myVaribles = __importStar(require("./number"));
console.log(myVaribles);
myVaribles.funcTeste();
class HumanBeing {
    constructor(name, age, aliv) {
        this.name = name;
        this.age = age;
        this.aliv = aliv;
        this.name = name;
        this.age = age;
        this.aliv = aliv;
    }
}
const Victor = new HumanBeing("Victor", 19, true);
console.log(Victor);
