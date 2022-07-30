# Aprofundamento em funções
***

**Funções que não retornam nada**

* Podemos ter gunções que não retornam valores;
* Qual seria o *tipo de dado* indicado para essa situação?
    * Neste caso utilizamos o `void`!
```
function withoutReturn():void{
    console.log("No return")
}
```
* Ele vai dizer ao TS que *não temos um valor de retorno*.

**Callback como argumento**

* Podemos inserir uma *função de callback* como argumento de uma função;
* Nela conseguimos *definir o tipo de argumento aceito pelo callback*;
* E também o *tipo de retorno* da mesma.

**Generic functions**

* É uma estratégia para quando *o tipo de retorno é relacionado ao tipo do argumento*
* Por exemplo: um item de um array, pode ser string, boolean ou number;
* Normalmente são utilizadas *letras como T ou U* para definir os generics, é uma convenção.

**Constraints nas Generic Functions**

* As Generic Functions podem ter seu *escopo reduzido por constraints*;
* Basicamente *limitando os tipos que podem ser utilizados* no Generic;
* Isso faz com que nosso escopo seja menos abrangente.

**Definindo tipo de parâmetros**

* Em Generic functions *temos que utilizar parâmetros de tipos semelhantes*, se não recebemos um erro;
* Porém há a possibilidade de *determinar o tipo tembém dos parâmetros aceitos*, com uma sintaxe especial;
* Isso faz com que a validação do TS aceite os tipos escolhidos.

**Parâmetros opcionais**

* Nem sempre utilizamos *todos os paâmetros* de uma função;
* Mas se ele for opcional, precisamos *declarar isso para o Ts*;
* E ainda deixer ele no *fim da lista* de parâmetros.

**Parâmetros default**

* Os *parâmetros default* são os que já possuem um valor definido;
* Se não passarmos para a função um parâmetro, ela utiliza o *default*
* Para este recurso, *a aplicação em TS é igual ao JS*.
    * O parâmetro default também serve como tipagem por innference

**Tipo unknown**

* O *tipo unknown* é utilizado de forma semelhante ao any, ele aceita qualquer tipo de dado;
* Porém a diferença é que ele *não deixa algo ser executado* se não houver validação de tipo
* Ou seja, adiciona uma *trava de segurança*.

**Tipo never**

* O *never* é um tipo de retorno semelhante ao void;
* Porém é utilizado quando a função *não retorna nada*
    * Exemplo: *retorno de erros*

**Rest parameters**

* Em JavaScript ES6 podemos utilizar o *Rest Operator*;
* Para aplicá-lo em parâmetros em TS é fácil, basta *definiar o tipo de dado com a sintaxe de Rest*(...).

**Destructuring em parâmetros**

* O *Destructuring*, outro recurso do ES6, também pode ser aplicado com TS;
* Precisamos apenas *determinar o tipo de cada dado que será desestruturado*;
* Desta maneira o TS valida o Destructuring.
    *Exemplo: 
    ```
    function showProductDetails({name, price}: {name:string, price:number}): string{
    return `O nome do produto é ${name} e ele custa R$${price}`
    }
    ```
    