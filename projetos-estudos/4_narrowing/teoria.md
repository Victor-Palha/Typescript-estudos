# Narrowing
***

**O que é narrowing**

* *Narrowing* é um recurso de TS para identificar tipos de dados;
* Dando assim uma direção diferente a execução do programa, *baseada no tipo que foi identificado*;
* Há situações em que *os tipos podem ser imprevisíveis*, e queremos executar algo para cada uma das possibilidades;
* Isso é fundamental também para *evitar erros do compilador*, identificando e resolvendo os possíveis erros na hora do desenvolvimento;

**Typeof type guard**

* O *type guard* é basicamente uma validação do tipo utilizando o typeof;
* Desta maneira podemos *comparar o retorno do operador* com um possível tipo;
* *Todos os dados vem como string*;
    * Exemplo: `"string", "number", "boolean"`.
* E a partir disso realizamos as bifurcações.

**Checando se valor existe**

* Em javascript podemos *colocar uma variável em um if*, e se houver algum valor recebemos um `true`;
* Quando não há um valor recebemos um `false`;
* *Desta maneira conseguimos realizar o narrowing também*, é uma outra estratégia bem utilizada.

**Operador instanceof**

* Para além dos tipos primitivos, podemos trabalhar com *instanceof*;
* Checando se um dado pertence a uma determinada classe;
* E ele vai servir até para as *nossas próprias classes*.

**Operador in**

* O operador `in` é utilizado para *checar se existe uma propriedade no objeto*;
* Outro recurso interessante para o narrowing;
* Pois propriedades também podem ser *opcionais*.