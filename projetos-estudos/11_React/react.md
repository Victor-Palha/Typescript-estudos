# TypeScript com React
***

**React com TS**
* Adicionar *TypeScript ao React* nos dá mais possibilidades;
* Seguindo a mesma linha de que em JS, *temos uma forma mais padronizada* para programar;
* Como *tipos para componentes* ou mapeamento de *props por meio de interface*;
* Isso dá mais *confiabilidade* ao projeto e está sendo cada vez mais
utilizado hoje em dia;

**Instalando React com TS**
* Para instalar o *TS junto do React* é simples;
* Vamos começar com `create-react-app` e adicionar a flag `-–template` com o
valor de typescript;
* *Um novo projeto é criado*, agora com arquivos **.tsx**;
* Podemos inicializá-lo normalmente;
`npx create-react-app nome_projeto --template typescript`

**Estrutura de React com TS**
* A estrutura de React quando adicionamos TS *não muda muito*;
* Temos as pastas clássicas como: *node_modules, src e public*;
* Em src que as coisas ficam diferentes, temos a criação de *arquivos .tsx*;
* *Que são arquivos jsx* porém com a possibilidade de aplicação das funcionalidades de TS;
* Podemos executar o projeto com *npm run start*;

**Criação de variáveis em componentes**
* Podemos *criar variáveis* dentro dos componentes;
* E elas podem receber os tipos que já vimos até este momento do curso;
* Isso nos permite *trabalhar com JSX* com apoio destas variáveis e seus tipos;

**Criação de funções em componentes**
* Podemos também criar *funções em componentes*;
* Estas funções recebem *parâmetros*, que *podem ser tipados*;
* E o seu retorno também;
* Ou seja, podemos aplicar os mesmos conceitos que já vimos de TS;

**Criação de novos componentes**
* Geralmente criamos os componentes em uma pasta chamada
components;
* O arquivo deve ser .tsx;
* E um retorno comum utilizado é o JSX.Element;
* O resto fica semelhante ao React sem TS;

**Extensão para React com TS**
* A extensão que vamos utilizar é a *TypeScript React code snippets* e *ES7+ React/Redux/React-Native snippets*;
* Ela nos ajuda com *atalhos* para programar mais rápido;
* Como o `tsrafce`, que cria um componente funcional;
* Isso torna o nosso dia a dia mais simples;

**Importando componentes**
* A importação de componente *funciona da mesma forma que sem TypeScript*;
* Porém temos que nos atentar aos *valores e tipos das props* de cada
componente;
* O TS interage de forma mais sucinta na parte da importação;

**Destructuring nas props**
* O *destructuring* é um recurso de ES6, que p*ermite separar um array ou objeto* em várias variáveis;
* Aplicamos esta técnica nas *props*, para não precisa repetir o nome do
objeto sempre;
* Podemos fazer desta maneira em TS também;

**O hook useState**
* o *useState* é um hook muito utilizado em React;
* Serve para *consultar e alterar o estado* de algum dado;
* *Atrelamos uma função set a um evento*, como mudança de dado em
input e alteramos o valor da variável base;
* Podemos adaptar este recurso para TS também;
```
// Compónente com useState
import React, {useState, ChangeEvent} from 'react'


const State = () => {
    //useState
    const [text, setText] = useState<string | null>("Testando o Hook")

    // ChangeEvent<HTMLInputElement> - é o tipo especifico para mudanças em html do typescript com react
    const handleChange = (event: ChangeEvent<HTMLInputElement>)=>{
        setText(event.target.value)
    }
    return (
        <div>
            <p>O texto é: {text}</p>
            <input type="text" name="" id="" onChange={handleChange}/>
        </div>
    )
}

export default State
```

**Enum**
* O *Enum* é uma forma interessante de formatar um objeto com chaves e
valores;
* Onde podemos *utilizar como props*;
* Passando a chave pela prop, imprimimos o valor dela no componente;
```
type Props = {
    title: string,
    content: string,
    commentsQty: number,
    tags: string[]
    //8 - enum
    category: Category
}
//Precisa ser importado no arquivo onde o componente é chamado
export enum Category{
  JS = "JavaScript",
  TS = "TypeScript",
  P = "Python"
}
```

**Types**
* Além das interfaces, podemos criar estruturas de tipos com o *type*;
* Isso nos permite criar dados com *tipos de dados fixos*;
* Ou até tipos customizados, como quando utilizamos o *operador `|`*

**Context API**
* A *Context API*, é uma forma de transmitir dados entre componentes no
React;
* A ideia principal é que podemos *determinar quais componentes recebem estes dados*;
* Ou seja, fazem parte do *contexto*;
* Podemos aplicar TS a esta funcionalidade também;
```
//Importar função do react
import { createContext } from "react"

//Criar interface
interface IAppContext {
  language: string,
  freamework: string,
  projects: number
}

//Ultilizar função para criar contexto, tipar com base na interface criada e depois exportar
export const AppContext = createContext<IAppContext | null>(null)

//Dentro do componente crie um objeto para receber os valores da interface
const contextValue: IAppContext = {
    language: "JavaScript",
    freamework: "React",
    projects: 1
}

//Dentro do return do componente, chame a função exportada anteriormente e coloque todo o código dentro
<AppContext.Provider>
    #Seu código
</AppContext.Provider>

//Coloque o valor dentro do componente como um atributo, o valor é o objeto criado anteriormente
<AppContext.Provider value={contextValue}>
    #Seu código
</AppContext.Provider>

```

**Utilizando o dado de contexto**
* Para utilizar os dados do contexto vamos precisar de um *hook*;
* Que é o *useContext*;
* A partir dele conseguimos *extrair os dados* e utilizar em um componente;
```
//Criando componente Context

import React, {useContext} from 'react'
import { AppContext } from '../App'


const Context = () => {
    const details = useContext(AppContext)
  return (
    <>
    {details && (
        <div>
            <h2>Linguagem: {details.language}</h2>
            <p>Freamework: {details.freamework}</p>
            <p>Quantidade: {details.projects}</p>
        </div>
    )}
    </>
  )
}

export default Context

//Voltando para o componente principal, podemos importar o componente Context

import Context from "./components/Context"

//Com o componente importado, vamos adicionar ele!

import { createContext } from "react"

import Context from "./components/Context"

interface IAppContext {
  language: string,
  freamework: string,
  projects: number
}

export const AppContext = createContext<IAppContext | null>(null)

function App() {
  const contextValue: IAppContext = {
    language: "JavaScript",
    freamework: "React",
    projects: 1
  }

  return (
    <AppContext.Provider value={contextValue}>
      <Context/>
    </AppContext.Provider>
  );
}

export default App;
```
