# Object Types
***

**O que são Object Types?**
* São os dados que tem como o tipo objeto, por exemplo: *object literals* e *arrays*;
* Temos *diversos recursos* para explorar sobre estes tipos;
* Como: *Interfaces, readonly, tupla* e outros;
* Isso nos dá possibilidades a mais para o JavaScript;
* Nesta seção focaremos nestes detalhes que são *super importantes para o TypeScript*;

**De tipo para Interface**

* Um caso de uso para interfaces é *simplificar os parâmetros de objeto* e funções;
* Ou seja, em vez de passar parâmetros de um objeto longo para n funções, *passamos apenas a interface*.

**Propriedades opcionais em interfaces**

* As interfaces podem conter *propriedades de objeto opcionais*;
* Basta adicionar a *interrogação* no nome da propriedade.
    * Exemplo: `nome?: string`.

**Propriedades readonly**

* As propriedades *readonly* podem ser alteradas apenas uma vez, na
criação do novo dado;
* É uma forma de criar um *valor constante* em um objeto;
* Podemos adicionar as *interfaces*. 
    * Exemplo: 
    ```
    interface Car {
        brand: string,
        readonly wheels: number
    }
    ```

**Index Signature**

* Utilizamos o *Index Signature* quando não sabemos o nome das chaves, *mas já sabemos quais os tipos de um objeto ou array*;
* Isso *restringe* a tipos que não devem ser utilizados;
* Uma barreira de segurança a mais na nossa variável.

**Extending Types**

* Utilizamos *Extending Types* como uma herança para criar tipos mais complexos por meio de uma interface;
* Ou seja, uma interface pode *herdar as propriedades e tipos já definidos* de outra;
* Isso acontece por meio da instrução *extends*.

**Intersection Types**

* *Intersection Types* são utilizados para criar tipos mais complexos a partir de duas interfaces, por exemplo;
* Podemos concatenar os tipos com *&*.
    * Exemplo:
    ```
    interface Character {
    name: string
    }
    interface Gun {
        type: string,
        caliber: number
    }

    type HumanWithGun = Character & Gun

    const punisher: HumanWithGun = {
        name: "The Punisher",
        type: "Pistola",
        caliber: .40
    }
    console.log(punisher)
    ```

**ReadOnlyArray**

* O *ReadOnlyArray* é um tipo para arrays, que deixa os itens como readonly;
* Podemos *aplicar um tipo para os itens do array*, além desta propriedade especial;
* *A modificação de itens pode ser feita através de método*, mas não podemos aumentar o array, por exemplo;

**Tuplas**

* *Tupla é um tipo de array*, porém definimos a quantidade e o tipo de elementos;
* Basicamente *criamos um novo type*, e nele *inserimos um array com os tipos necessários*;
* Cada tipo conta também como um elemento.

**Tuplas com readonly**

* Podemos criar *tuplas com a propriedade de readonly*;
* É um tipo de dado *super restrito* pois:
* Limita quantos itens teremos, qual o tipo de cada um e também não são
modificáveis;
    * Exemplo:
    ```
    function showNumbers(numbers: readonly [number, number]){
        console.log(numbers[0])
        console.log(numbers[1])
    }
    showNumbers([1,2])
    ```