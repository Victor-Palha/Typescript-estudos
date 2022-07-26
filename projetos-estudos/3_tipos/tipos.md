# TIPOS NO TYPESCRIPT
***
**Arrays**

* Podemos especificar um *array* como um tipo;
* Se temos um array de números: `number[]`;
* Se é um array de strinf: `string[]`;
* Isso acontece pois *geralmente os arrays possuem apenas um tipo* de dados entre seus itens;
* Os tipos de array possuem duas sintaxes.
    * *Obs*: a vista anteriormente é a mais utilizada;
    * Podemos também fazer desta maneira: `Array<number>`.

**Tipo any**

* O *any* trasmite ao TS que qualquer tipo satisfaz a variável;
* Devemos *evitar ao máximo esse tipo*, pois vai contra os princípios do Typescript;
* *Dois casos de uso:* o tipo do dado realmente não importa e arrays com dados de múltiplos tipos.

**Tipos de parâmetro de funções**

* Podemos *definir o tipo de cada parâmetro de uma função*;
* Assim condicionamos o seu uso correto;
* A sintaxe é: `function nomeFuncao(parametro:tipo){}`
    * `function setNome(nome: string){}`
        * Agora podemos passar o parâmetro nome, *apenas como uma string*

**Tipo de retorno de funções**

* Os *retornos* também podem ser definidos por nós;
* Para isso utilizamos a sintaxe: `function nomefuncao(): tipo{}`.
    * Exemplo: `function getNumber(): number{}`.
        * Esta função *retorna um número*.

**Funções anônimas em Typescript**

* O Typescript consegue nos *ajudar também em funcções anônimas*;
* *Fazendo uma validação do código digitado*, nos fornecendo dicas de possíveis problemas;
* Exemplo: métodos não existentes;

**Tipos de objetos**

* Podemos determinar tipos para objetos também;
* A sintaxe é: `{atributo:tipo, atributo2:tipo2, atributo3:tipo3}`
* Ou seja, estamos determinando quais tipos as *propriedades que um objeto possuem*;