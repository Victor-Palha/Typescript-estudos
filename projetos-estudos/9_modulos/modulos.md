# Trabalhando com Módulos
***

**Introdução aos módulos**
* Os módulos são a forma que temos para importar código em arquivos;
* Podemos exportar código com *export default*;
* E importar com *import*;
* *Criaremos os arquivos com .ts*, mas importaremos como .js;
* Isso nos dá mais flexibilidade, podendo separar as responsabilidades em
arquivos;
* Utilizaremos o *Node.js* para executar os arquivos com módulos;

**Importando arquivos**
* Para começar *vamos criar um arquivo simples e importar seu conteúdo*;
* Basta criar um *arquivo .ts*, desenvolver o código e exportar;
* Depois no arquivo principal vamos importar o arquivo anterior, com a `extensão. js`;
```
// 1 - Exportação de arquivos - arquivo name: greet.js
function importGreet(){
    console.log("Essa função foi exportada!")
}
//Primeiro tipo de exportação
export default importGreet
//Ou...
/*  Colocar o export default antes da função/obj/classe/etc...
export default function importGreet(){
    console.log("Essa função doi exportada!")
}
*/

// 1 - importação de arquivos Arquivo name: index.js
import importGreet from "./greet";
importGreet()

```

**Importando variáveis**
* Podemos *exportar e importar variáveis* também;
* A sintaxe é um pouco mais simples, vamos utilizar *apenas o `export`*;
* No arquivo de importação vamos importar os valores com `destructuring`;
```
// Arquivo name: variable.js - Exportando variavel
export const variavel: string = "Variavel de importação"

//2 - import de variaveis - Arquivo name: index.js

import { variavel } from "./variable";
console.log(variavel)

```

**Múltiplas importações**
* Podemos *exportar múltiplas variáveis e funções*;
* Isso pode ser realizado no *mesmo arquivo*;
* Para esta modalidade utilizamos *export para todos os dados*;
* E todos devem ser importados com `destructuring`;
```
// Arquivo name: multiple.js
export const p:number = 10
export const i:string = "Hello World"
export function oneFunction<T>(x:T){
    console.log(x)
}

// 3 - multiplas importações - arquivo Name: index.js
import {p, i, oneFunction } from "./multiple"
oneFunction(i)
```

**Alias para importações**
* Podemos criar um *alias* para importações;
* Ou seja, *mudar o nome* do que foi importado;
* Podendo tornar este novo nome, uma *forma mais simples de chamar o recurso*;
```
//Arquivo Name: changeName.js
export const someName = "Está mudou de nome"

//4 - Alias - arquivo Name: index.js
import { someName as Sn } from "./changeName";
oneFunction(Sn)
```

**Importando tudo**
* Podemos *importar tudo que está em um arquivo* com apenas um símbolo;
* Utilizamos o `*` para isso;
    * Porém, temos que usar um *alias* para instanciar o modulo importado
        * Exemplo: `import * as myVaribles from './number'`
* Os dados virão em um *objeto*;
```
// Arquivo name: number.js
const n1:number = 10
const n2:number  = 20
const n3:number  = 30
function funcTeste():void{
    console.log("Testando função importada")
}
export {n1, n2, n3, funcTeste}

//5 - import all - arquivo name: index.js
import * as myVaribles from './number'
console.log(myVaribles)
myVaribles.funcTeste()
```

**Importando tipos**
* Importar *tipos ou interfaces* também é possível;
* Vamos exportar como se fossem *variáveis*;
* E no arquivo que os recebe, utilizamos *destructuring*;
* Depois podemos implementar no projeto;
```
// Arquivo name: myType.js

interface Human{
    name:string,
    age:number
    aliv:boolean
}
export {Human}

//6 - Importando tipos - Arquivo name: index.js

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
```