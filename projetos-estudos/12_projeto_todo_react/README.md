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
    
***
*Exibindo lista de Tarefa*
***
* Com a lista de tarefa criada, agora temos que exibir ela para o usuário.
Primeiramente vamos no arquivo `TaskList.tsx` e vamos importar nossa *interface* e nosso *CSS*.
```ts
//Inteface
import {ITask} from '../interfaces/Task'
//Css
import styles from './TaskList.module.css'

```
(Observação importante: até o momento não tinhamos criado o CSS para TaskList, então na pasta *components* vamos criar o arquivo `TaskList.module.css`)

* Agora vamos criar uma *props* que vai ser um Array de ITask!
```ts
type Props = {
  taskList: ITask[]
}
```
Então desestruturaremos nossa *props* no componente para chamarmos a `taskList`
```ts
const TaskList = ({taskList}: Props) => {
  return (
    <div>
        <p>Lista de tafera</p>
    </div>
  )
}
```
Com as *props* devidamente configuradas, o arquivo `App.tsx` vai reclamar de um problema. Isso porquê não estamos passando o parametro da *props* quando chamamos o componente. Então no arquivo `App.tsx` vamos passar o parametro da props.
`<TaskList taskList={taskList}/>`

* Dentro do componente do arquivo `TaskList.tsx` vamos configurar uma validação para caso exista tarefas cadastradas dentro do Array. Lembrando que a estrutura está funcionando da seguinte maneira:
    * No componente princial `App.tsx`, iniciamos um useState onde existem 2 parâmetros, sendo o primeiro o Array onde vai ficar guardado todas nossas tarefas realizada e o outro é onde nós adicionaremos uma nova tarefa. Esses parâmetros são passadas como props para o componente `TaskForm.tsx`, onde recebemos o Array atual de tarefas e o metódo para adicionar novas tarefas, então dentro do componente TaskForm criamos um objeto com base no input do do usuário que é passado por um formulário, então devolvemos para o Array atualizado. Com o array atualizado passamos para o componente `TaskList.tsx` que recebe o Array atualizado e vai validar se existem informações ali dentro, se sim, ele vai agir de um jeito, se não, ele vai agir de outro...

* Validando informações `TaskList.tsx`
```ts
const TaskList = ({taskList}: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        <p>Tem tarefas cadastradas</p>
      ): (
        <p>Não há tarefas cadastradas</p>
      )}
    </>
  )
}
``` 
* Agora que as informações já foram validadas, queremos que mostra para o usuário as tarefas cadastradas, correto? Então seguindo a mesma lógica, vamos usar o método `map()` para mapear o array que recebemos.
```ts
const TaskList = ({taskList}: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((item)=>(
          <div key={item.id}>
            <p>{item.title}</p>
          </div>
        ))
      ): (
        <p>Não há tarefas cadastradas</p>
      )}
    </>
  )
}
``` 
(Observação importante: Para identificarmos qual item ta sendo exibido pelo map, temos que ter um identificador, no caso a chamada `key`. Então dentro da div que vai ser criada a cada nova tarefa exibida, vamos colocar esse identificador e atribuir ele ao `id` da tarefa. Lembrando que o id é gerado automáticamente na criação da tarefa no arquivo `TaskForm.tsx`)

***
**Configurando HTML da Lista**
***

* Com a lógica **QUASE** concluída, vamos criar um HTML e estilizar ele. Nesse ponto não tem muito o que eu comentar para vocês, já que o princípal intuíto desse projeto é aplicar REACT com TypeScript, então eu suponho que vocês já tenham conhecimento de HTML e CSS. Porém tem algumas observações a respeito dos icones do Bootstrap que adicionamos bem começo do projeto, vulgo linha 28 dessa documentação!
```ts
const TaskList = ({taskList}: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((item)=>(
          <div key={item.id} className={styles.task}>
            <div className={styles.details}>
              <h4>{item.title}</h4>
              <p>Dificuldade: {item.difficulty}</p>
            </div>
            <div className={styles.actions}>
              <i className='bi bi-pencil'></i>
              <i className='bi bi-trash'></i>
            </div>
          </div>
        ))
      ): (
        <p>Não há tarefas cadastradas</p>
      )}
    </>
  )
}
```
(As tags `i` representão as classes do bootstrap para icones, vocês podem olhar a documentação do [Bootstrap](https://getbootstrap.com/) para vizualizar todas as possibilidades)

* Com o HTML pronto, vamos configurar o CSS, arquivo `TaskList.module.css`
```css
.task {
    display: flex;
    justify-content: space-between;
    max-width:  400px;
    margin: 0 auto;
    border-bottom: 1px solid #ccc;
    padding: 1em;
}

.details{
    text-align: left;
}
.details h4{
    font-size: 1.2em;
    margin-bottom: 1em;
}

.actions{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.actions i {
    margin-bottom: .5em;
    font-size: 1.2em;
    cursor: pointer;
    background-color: #282c34;
    color: white;
    padding: .4em;
    transition: 0.5s;
}
.actions i:hover{
    color: #61dafb;
}
```

***
**Removendo tarefas**
***

* No arquivo `App.tsx`, vamos criar a função onde vai deletar as tarefas, essa função vai estar ligada ao componente `TaskList.tsx` e vai ser passada como *props* para ela.
```ts
  const deleteTask = (id: number)=>{
    setTaskList(
        taskList.filter((task) =>{
        return task.id !== id;
      })
    )
  }
    return (
        //Code...
    <div>
      <h2>Suas Tarefas:</h2>
      <TaskList
      taskList={taskList}
      handleDelete={deleteTask}/>
    </div>
    //code..
  );
}
```
* Agora no arquivo `TaskList.tsx` vamos criar uma nova *props* para ela
```ts
type Props = {
  taskList: ITask[]
  handleDelete(id:number):void
}
```
Essa *props* vai receber um id que é referente a tarefa em questão, agora temos que linkar com o icone do Bootstrap para quando ele for clicado chamar essa *props* e consequentemente chamar a função `deleteTask` que criamos no arquivo `App.jsx`.
```ts
const TaskList = ({taskList, handleDelete}: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((item)=>(
          <div key={item.id} className={styles.task}>
            <div className={styles.details}>
              <h4>{item.title}</h4>
              <p>Dificuldade: {item.difficulty}</p>
            </div>
            <div className={styles.actions}>
              <i className='bi bi-pencil'></i>
              <i className='bi bi-trash' onClick={()=> {
                handleDelete(item.id)}
                }></i>
            </div>
          </div>
        ))
      ): (
        <p>Não há tarefas cadastradas</p>
      )}
    </>
  )
}
```
Agora toda vez que clicarmos no icone, ele vai deletar a Tarefa.
***
**Criando Modal para edição**
***
* Vamos criar um novo componente chamado de `Modal.tsx` e criar o CSS para ele, chamaremos de `Modal.module.css`. Com isso importaremos o CSS para o Arquivo `Modal.tsx` e depois importaremos o Modal para o `App.tsx`.
```ts
import React from 'react'
//CSS
import styles from "./Modal.module.css"

type Props = {}

const Modal = (props: Props) => {
  return (
    <div id="modal">
        <div className={styles.fade}>

        </div>
        <div className={styles.modal}>
            <h2>Texto Modal</h2>
        </div>
    </div>
  )
}

export default Modal
```
* Com o Modal criado, vamos estilizar ele com o arquivo CSS que criamos.
```css
.fade{
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #000;
    opacity: 0.3;
}
.modal{
    position: absolute;
    top: 10%;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 500px;
    height: 400px;
    z-index: 1;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center ;
    text-align: center;
}
.modal h2{
    margin-bottom: 1em;
}
.modal form{
    width: 90%;
}
```

* Com a estilização pronta, agora temos que trazer o componente do formulário para dentro do Modal, para que assim possamos reutilizar o formulário já criado para editar!
  * Dentro do componente do modal vamos passar uma props que vai receber o componente e para isso utilizaremos uma propriedade do React para ceitar componentes como *props*: `React.ReactNode`. Ai chamaremos essa props dentro da *DIV modal*
  ```ts
  import React from 'react'
  //CSS
  import styles from "./Modal.module.css"

  type Props = {
      children: React.ReactNode
  }

  const Modal = ({children}: Props) => {
    return (
      <div id="modal">
          <div className={styles.fade}></div>
          <div className={styles.modal}>
              <h2>Texto Modal</h2>
              {children}
          </div>
      </div>
    )
  }

  export default Modal
  ```
Com o Modal configurado, precisaremos ir para o `App.tsx` para chamarmos ele e passar a *props* devidamente:
```ts
import React, {useState}from "react";
//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Modal from "./components/Modal";
// CSS
import styles from "./App.module.css"

//Interface
import { ITask } from "./interfaces/Task";

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])
  const deleteTask = (id: number)=>{
    setTaskList(
        taskList.filter((task) =>{
        return task.id !== id;
      })
    )
  }

  return (
    <div>
    //Chamaremos o Modal antes do Header e passaremos a props sendo o componente TaskForm
      <Modal children={<TaskForm btnText="Editar Tarefa" taskList={taskList}/>}/>
      <Header/>
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm 
          btnText="Criar Tarefa" 
          taskList={taskList} 
          setTaskList={setTaskList}/>
        </div>
        <div>
          <h2>Suas Tarefas:</h2>
          <TaskList
          taskList={taskList}
          handleDelete={deleteTask}/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
```
***
**Evento de esconder Modal**
***
* Agora que temos o modal configurado, temos um problema, sempre que a aplicação inicia, o modal aparece e nós não queremos isso, principalmente pelo fato que não tem como fecha-lo!
Então vamos criar uma função chamada de `closeModal` que vai ser executada sempre que o usuário clicar fora do Modal, assim fechando ele.
  * após criar essa função, vamos indicar que o modal começa com a classe `hide` que configuramos no CSS global `index.css`.

```ts
import React from 'react'
//CSS
import styles from "./Modal.module.css"

type Props = {
    children: React.ReactNode
}

const Modal = ({children}: Props) => {
    const closeModal = (event: React.MouseEvent):void=>{
        const modal = document.getElementById('modal')
        modal!.classList.add("hide")
    }
    return (
        <div id="modal" className='hide'>
            <div className={styles.fade} onClick={closeModal}>

            </div>
            <div className={styles.modal}>
                <h2>Texto Modal</h2>
                {children}
            </div>
        </div>
    )
}

export default Modal
```

* Agora precisamos que o modal seja invocado quando clicarmos em editar uma tarefa, então criaremos 2 funções. Uma para mostrar ou esconder o Modal e outra para ele ser invocado quando clicarmos em editar a Tarefa, respectivamente: `hideOrShowModal` e `editTask`.
  * Depois disso vamos passar a função `editTask` como uma *props* para o componente `TaskList`.
```ts
import React, {useState}from "react";
//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Modal from "./components/Modal";
// CSS
import styles from "./App.module.css"

//Interface
import { ITask } from "./interfaces/Task";

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])
  const deleteTask = (id: number)=>{
    setTaskList(
        taskList.filter((task) =>{
        return task.id !== id;
      })
    )
  }
  const hideOrShowModal = (display:boolean) =>{
    const modal = document.getElementById('modal')
    if(display){
      modal!.classList.remove("hide")
    }else{
      modal!.classList.add("hide")
    }
  }

  const editTask = ():void =>{
    hideOrShowModal(true)
  }
  return (
    <div>
      <Modal children={<TaskForm btnText="Editar Tarefa" taskList={taskList}/>}/>
      <Header/>
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm 
          btnText="Criar Tarefa" 
          taskList={taskList} 
          setTaskList={setTaskList}/>
        </div>
        <div>
          <h2>Suas Tarefas:</h2>
          <TaskList
          taskList={taskList}
          handleDelete={deleteTask}
          handleEdit={editTask}/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
```
* Com o arquivo principal já configurado, vamos adicionar a props no arquivo `TaskList`, até porque só passamos como uma *props* pelo componente principal, mas ainda não criamos ele efetivamente dentro do aquivo.
  * Vamos criar essa *props* como uma função que retorna `void` e chamaremos ela de `handleEdit` e desestruturaremos ele dentro do componente para chamarmos com facilidade.
  * Agora adicionaremos o evento de clique dentro do icone do Bootstrap que irá chamar a *props* `handleEdit` e efetivamente chamar a função `editTask` do arquivo princípal!
```ts
import React from 'react'
//Inteface
import {ITask} from '../interfaces/Task'
//Css
import styles from './TaskList.module.css'

type Props = {
  taskList: ITask[]
  handleDelete(id:number):void
  handleEdit():void
}

const TaskList = ({taskList, handleDelete, handleEdit}: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((item)=>(
          <div key={item.id} className={styles.task}>
            <div className={styles.details}>
              <h4>{item.title}</h4>
              <p>Dificuldade: {item.difficulty}</p>
            </div>
            <div className={styles.actions}>
              <i className='bi bi-pencil' onClick={()=>handleEdit()}></i>
              <i className='bi bi-trash' onClick={()=> {
                handleDelete(item.id)}
                }></i>
            </div>
          </div>
        ))
      ): (
        <p>Não há tarefas cadastradas</p>
      )}
    </>
  )
}

export default TaskList
```