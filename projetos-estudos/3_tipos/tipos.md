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

**Propriedades opcionais**

* Nem sempre os objetos *(Ou qualquer dado que precise de parametro)* possuem todas as propriedades que poderiam possuir;
* Por isso temos as *propriedades opcionais*;
* Para ter esse resultado devemos colocar um interrogação: `{nome: string, sobrenome?: string}`.

**Validação de propriedades opcionais**

* Quando a propriedade é opcional, *precisamos criar uma validação*;
* Isso acontece *por que o Typescript não nos ajuda mais*, já que ele deixa de controlar o valor que recebemos;
* Para isto utilizamos uma *condicional if*, e conseguimos resolver a situação.

**Union types**

* O *Union type* é uma alternativa melhor do que o any;
* Onde podemos *determinar dois tipos* para um dado;
* A sintaxe: `tipo1 | tipo2`.
    * Exemplo: `let nomeVariavel: number | string`.

**Avançando com Union Types**

* Podemos utilizar *condionais* para validação do tipo de union types;
* Com isso é possível *trilhar rumos diferentes*, baseado no tipo de dado;
* Para checar o tipo utilizamos `typeof`.

**Type alias**

* *Type alias* é um recurso que permite criar um tipo e determinar o que ele verifica;
* Desta maneira *temos uma maneira mais fácil de chamá-lo* em vez de criar expressões complexas com Union types, por exemplo.
    * Exemplo `type ID = string | number`

**Introdução às interfaces**

* Uma outra maneira de *nomear um tipo de objeto*;
* Podemos *determinar um nome* para o tipo;
* E também escolher *quais as propriedades e seus tipos*.

**Diferença entre type alias e interfaces**

* Na maioria das vezes *podemos optar entre qualquer um dos recursos*;
* A única diferença é que *a interface pode ser alterada ao longo do código*, já o alias não;
* Ou seja, se pretendemos mudar como o tipo de conforma, devemos escolher a interface.

**Literal types**

* *Literal types* é um recurso que permite colocar valores como tipos;
* Isso restringe o uso a não só tipos, *como também os próprios valores*;
* Este recurso é *muito utilizado com Union Types*.

**Non-null Assertion Operator**

* Às vezes o Typescript pode evidenciar um erro,*baseado em um valor que no momento do código ainda não está disponível*;
* Porém se sabermos que este valor será preenchido, podemos evitar o erro;
* Utilizamos o caractere `!`.

**Symbol**

* De forma resumida, o *Symbol* cria uma referência única para um valor;
* Ou seja, mesmo que ele possua o mesmo valor de outra varável *teremos valores sendo considerados diferentes*. 