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
* Podemos exportar e importar variáveis também;
* A sintaxe é um pouco mais simples, vamos utilizar apenas o export;
* No arquivo de importação vamos importar os valores com destructuring;

**Múltiplas importações**
* Podemos exportar múltiplas variáveis e funções;
* Isso pode ser realizado no mesmo arquivo;
* Para esta modalidade utilizamos export para todos os dados;
* E todos devem ser importados com destructuring;

**Alias para importações**
* Podemos criar um alias para importações;
* Ou seja, mudar o nome do que foi importado;
* Podendo tornar este novo nome, uma forma mais simples de chamar o
recurso;

**Importando tudo**
* Podemos importar tudo que está em um arquivo com apenas um
símbolo;
* Utilizamos o * para isso;
* Os dados virão em um objeto;

**Importando tipos**
* Importar tipos ou interfaces também é possível;
* Vamos exportar como se fossem variáveis;
* E no arquivo que os recebe, utilizamos destructuring;
* Depois podemos implementar no projeto;