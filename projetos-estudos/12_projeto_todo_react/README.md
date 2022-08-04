# Getting Started with Create React App with TypeScript
***

**Início do projeto**
Criaremos dentro da página **_src_** uma pasta chamada de *components* que irá servir para guardar os componentes que criarmos!
* Crie também um arquivo chamado de `Global.d.ts` dentro da pasta *src*, esse arquivo irá guardar configurações globais para o TypeScript
    * Dentro do `Global.d.ts` vamos configurar para ele aceitar arquivos css como modulos de exportação, assim criaremos arquivos css com escopo para nossos componentes
        * Exemplo de nome para arquivo CSS `Header.module.css` (O .module.css é para o TypeScript identificar esses arquivos como modulos)
        * Configuração Global do TypeScript
        ```ts
        declare module "*.module.css"
        ```
    * Quando formos adicionar uma **Classe ou ID** em uma tag do HTML utilizando o React, vamos chamar o modulo CSS e atribuir a classe ou id para ela.
    ```js
    import React from 'react'
    import styles from "./Header.module.css"

    const Header = () => {
        return (
            <header className={styles.header}>
                <h1>React + TS Todo</h1>
            </header>
        )
    }

    export default Header
    ```
* Vamos adicionar a biblioteca do Bootstrap icons dentro do arquivo HTML na pasta **public**, podemos instalar via npm ou podemos pegar o link direto do [site](https://icons.getbootstrap.com/#install)


* Após estilizar o nosso componente do formulário, precisaremos criar a *interface* que utilizaremos para nosso projeto. A interface irá ficar dentro da pasta *interface* e o arquivo vai receber o nome de *Task*
```
export interface ITask{
    id: number,
    title: string,
    difficulty: number
}
```
Depois de criar a interface, vamos importar para nossos componentes *App.tsx* e *TaskForm.tsx*.
    * Dentro do componente onde está nosso formulário, vamos importar algumas funções do próprio React, sendo elas: `useState, ChangeEvent, FormEvent, useEffect`
        * `import React,{useState, ChangeEvent, FormEvent, useEffect} from 'react'`

**Configurando formulário**
```js
import React,{useState, ChangeEvent, FormEvent, useEffect} from 'react'
//CSS
import styles from "./TaskForm.module.css"
//Interfaces
import { ITask } from "../interfaces/Task";

type Props = {
    btnText:string
}

const TaskForm = ({btnText}: Props) => {

    const [id, setId] = useState<number>(0)
    const [title, setTitle] = useState<string>('')
    const [difficulty, setDifficulty] = useState<number>(0)

    const addTaskHandler = () => {

    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if(event.target.name === 'title'){
            setTitle(event.target.value)
        }else{
           setDifficulty(parseInt(event.target.value)) 
        }
        console.log(title)
        console.log(difficulty)
    }
    return (
        <form onSubmit={addTaskHandler} className={styles.form}>
            <div className={styles.conteiner}>
                <label htmlFor="title">Título:</label>
                <input type="text" name="title" placeholder='Título da tarefa' onChange={handleChange}/>
            </div>
            <div className={styles.conteiner}>
                <label htmlFor="difficulty">Dificudade:</label>
                <input type="text" name="difficulty" placeholder='Dificuldade da tarefa' onChange={handleChange}/>
            </div>
            <input type="submit" value={btnText} />
        </form>
    )
}

export default TaskForm
```
* Vamos utilizar as funções que foram importadas anteriormente para utiliza-las no projeto, a primeira coisa a se fazer é criar os useStates para os valores serem alterados conforme os Inputs são mudados.
* Depois vamos criar a função `addTaskHandler` e atribuir ela a tag *form* do HTML atráves da função `onSubmit`. Assim quando houver um submit a função vai ser realizada.
* Agora criaremos a função `handleChange` que vai alterar os valores dos `useStates` quando o usuário digitar e atribuiremos a cada input a função `onChange={handleChange}`

**Adicionando Tarefas**

* Dentro do arquivo `App.tsx` vamos importar o `useState` e dentro da função `App()` vamos criar um useState que vai ser um *Array* e utilizaremos a nossa *interface*.
    * `const [taskList, setTaskList] = useState<ITask[]>([])`

* Agora voltaremos no arquivo *TaskForm* e criaremos uma props com no nome de taskList e atribuiremos essa props no componente.
```js
import { ITask } from "../interfaces/Task";

type Props = {
    btnText:string
    taskList: ITask[]
}

const TaskForm = ({btnText, taskList}: Props) => {
    //Code...
}
```

* Depois que fizermos isso, vamos voltar para o arquivo *App.tsx* e vamos adicionar o parâmetro da props quando chamamos o componente e atribuiremos a ela a nossa `useState` criada anteriormente, `taskList`. 
Então o código fica dessa forma>
```js
import React, {useState}from "react";

//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

// CSS
import styles from "./App.module.css"

//Interface
import { ITask } from "./interfaces/Task";

function App() {

//UseState
  const [taskList, setTaskList] = useState<ITask[]>([])

  return (
    <div>
      <Header/>
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm btnText="Criar Tarefa" taskList={taskList}/>
        </div>
        <div>
          <h2>Suas Tarefas:</h2>
          <TaskList/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
```

* Voltaremos para o arquivo `TaskForm.tsx` pra configurar a função `addTaskHandler` onde ela vai adiconar as tarefas dentro do nosso useState. Essa parte vai ficar um pouco mais complicada, então leia com atenção o passo a passo.

    * Primeramente vamos adicionar mais uma `props` no nosso arquivo e adicionar no nosso componente.
    ```ts
    type Props = {
        btnText:string
        taskList: ITask[];
        //Nova props
        setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
    }
    const TaskForm = ({btnText, taskList, setTaskList}: Props) => {
        //Nossos useStates
        const [id, setId] = useState<number>(0)
        const [title, setTitle] = useState<string>('')
        const [difficulty, setDifficulty] = useState<number>(0)
        //Função que vamos configurar
        const addTaskHandler = () => {
            //code...
        }
    }
    ```
    * Com nossas props criadas, vamos começar a confugurar a função, primeiro adicionaremos um aparametro `event` e linkaremos ele quando houver um evento de *formulário*, já que anteriormente já linkamos a tag *form* com essa função.
    ```ts
        const addTaskHandler = (event: FormEvent<HTMLFormElement>) => {
        }
    ```
    Agora com o parâmetro definido, vamos chamar o evento do parâmetro e atribuir a ele o metódo `preventDefault();`, com isso vamos impedir o comprtamento padrão do formulário, ou seja, vamos impedir que a tela seja recarregada quando clicarmos no *submit*.
    ```ts
        const addTaskHandler = (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault()
        }
    ```
    Aproveitaremos para criar uma variável para guardamos o id, esse id vai ser gerado aleatóriamente por meio da *classe `Math`*
    ```ts
        const addTaskHandler = (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault()
            const id = Math.floor(Math.random() * 1000)
        }
    ```
    Agora com o Id já gerado e os dados dos inputs já sendo guardado no *useState* pela função `handleChange()` que criamos anteriormente, vamos criar um *objeto* para guardamos a informção no input atual e salvar esse objeto na nossa lista.
    Para fazer isso o objeto criado vai ser colocado na props `setTaskList` que criamos anteriormente e ela vai receber o parametro que é um `useState` para setar itens na nossa lista no arquivo `App.tsx`. Depois disso vamos resetar os valores do nosso `useState` do *titulo* e *dificuldade*, para que assim, o usuário possa escrever novamente.
    ```ts
    const addTaskHandler = (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const id = Math.floor(Math.random() * 1000) //Gerando id

        const newTask: ITask = {id, title, difficulty} //Criando objeto com as informações

        setTaskList!([...taskList, newTask]) // Juntando lista atual com o objeto criado

        setTitle("") //Resetando valores do nossos inputs
        setDifficulty(0)

        console.log(taskList)
    }
    ```
    Com a função pronta, basta ir no componente em si o HTML e setar os valores dos inputs para o atual do `useState`
    ```js
    import React,{useState, ChangeEvent, FormEvent, useEffect} from 'react'
    //CSS
    import styles from "./TaskForm.module.css"
    //Interfaces
    import { ITask } from "../interfaces/Task";

    type Props = {
        btnText:string
        taskList: ITask[];
        setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
    }

    const TaskForm = ({btnText, taskList, setTaskList}: Props) => {

        const [id, setId] = useState<number>(0)
        const [title, setTitle] = useState<string>('')
        const [difficulty, setDifficulty] = useState<number>(0)

        const addTaskHandler = (event: FormEvent<HTMLFormElement>) => {

            event.preventDefault();

            const id = Math.floor(Math.random() * 1000)

            const newTask: ITask = {id, title, difficulty}

            setTaskList!([...taskList, newTask])

            setTitle("")
            setDifficulty(0)

            console.log(taskList)
        }

        const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
            if(event.target.name === 'title'){
                setTitle(event.target.value)
            }else{
            setDifficulty(parseInt(event.target.value)) 
            }
        }
        return (
            <form onSubmit={addTaskHandler} className={styles.form}>
                <div className={styles.conteiner}>
                    <label htmlFor="title">Título:</label>
                    <input 
                    type="text"
                    name="title" 
                    placeholder='Título da tarefa' 
                    onChange={handleChange}
                    value={title}/>
                </div>
                <div className={styles.conteiner}>
                    <label htmlFor="difficulty">Dificudade:</label>
                    <input
                    type="text"
                    name="difficulty"
                    placeholder='Dificuldade da tarefa'
                    onChange={handleChange}
                    value={difficulty}/>
                </div>
                <input type="submit" value={btnText} />
            </form>
        )
    }

    export default TaskForm
    ```
    Com toda a configuração dessa parte pronta, vamos ir para o `App.tsx` e setar nossas props.
    ```js
    import React, {useState}from "react";
    //Components
    import Header from "./components/Header";
    import Footer from "./components/Footer";
    import TaskForm from "./components/TaskForm";
    import TaskList from "./components/TaskList";
    // CSS
    import styles from "./App.module.css"

    //Interface
    import { ITask } from "./interfaces/Task";

    function App() {

    const [taskList, setTaskList] = useState<ITask[]>([])

    return (
        <div>
        <Header/>
        <main className={styles.main}>
            <div>
            <h2>O que você vai fazer?</h2>
            //Setando props
            <TaskForm btnText="Criar Tarefa" taskList={taskList} setTaskList={setTaskList}/>
            </div>
            <div>
            <h2>Suas Tarefas:</h2>
            <TaskList/>
            </div>
        </main>
        <Footer/>
        </div>
    );
    }

    export default App;
    ```
    
