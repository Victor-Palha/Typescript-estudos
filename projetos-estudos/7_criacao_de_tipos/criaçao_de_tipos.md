# Criação de Tipos
***
**Sobre a criação de novos tipos**
* Há a possibilidade de gerar novos tipos em TypeScript, já vimos isso
com Generics (vamos nos aprofundar neste recurso também);
* Porém existem outros operadores que visam facilitar nossa vida neste
assunto;
* A ideia deste recurso é deixar a manutenção do projeto mais simples;
* Ou seja, gastar mais tempo na estruturação dos tipos e menos na busca
de possíveis bugs depois;

**Generics**
* Utilizamos Generics quando uma função pode aceitar mais de um tipo;
* É uma prática mais interessante do que o any, que teria um efeito
semelhante;
* Porém com Generics

**Constraint em Generics**
* As constraints nos ajudam a limitar os tipos aceitos;
* Como em Generic podemos ter tipos livres, elas vão filtrar os tipos
aceitos;
* Adicionando organização quando queremos aproveitar a liberdade dos
Generics;

**Interfaces com Generics**
* Com Interfaces podemos criar tipos complexos para objetos;
* Adicionando Generics podemos deixá-los mais brandos;
* Aceitando tipos diferentes em ocasiões diferentes;

**Type parameters**
* Type parameters é um recurso de Generics;
* Utilizado para dizer que algum parâmetro de uma função, por exemplo,
é a chave de um objeto, que também é parâmetro;
* Desta maneira conseguimos criar uma ligação entre o tipo genérico e
sua chave

**keyof Type Operator**
* Com o keyof Type Operator podemos criar um novo tipo;
* Ele aceita dados do tipo objeto, como object literals e arrays;
* E pode criar o tipo baseado nas chaves do objeto passado como
parâmetro;

**typeof Type Operator**
* Com o typeof Type Operator podemos criar um novo tipo;
* Este tipo é será baseado no tipo de algum dado;
* Ou seja, é interessante para quando queremos criar uma variável com o
mesmo tipo da outra, por exemplo;

**Indexed Access types**
* A abordagem Indexed Access types pode criar um tipo baseado em uma
chave de objeto;
* Ou seja, conseguimos reaproveitar o tipo da chave para outros locais,
como funções;

**Conditional Expressions Type**
* O tipo por condição permite criar um novo tipo com base em um if/else;
* Mas não são aceitas expressões tão amplas;
* Utilizamos a sintaxe de if ternário;

**Template Literals Type**
* Podemos criar tipos com Template literals;
* É uma forma de customizar tipos de maneiras infinitas;
* Pois o texto que formamos pode depender de variáveis;
