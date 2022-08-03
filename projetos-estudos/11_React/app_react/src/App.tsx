import { createContext } from "react"
// 4 - Importação de componentes

import FirstComponent from "./components/FirstComponent"

//5 - Desistruturando props
import SecondComponent from "./components/SecondComponent"
import Destructuring, {Category} from "./components/Destructuring"

//6-UseState
import State from "./components/State"

//10 - Context
import Context from "./components/Context"

// 8 - Type
type textOrNull = string|null

//9- context
interface IAppContext {
  language: string,
  freamework: string,
  projects: number
}

export const AppContext = createContext<IAppContext | null>(null)

function App() {
  // 1 - Variaveis

  const name:string = "Victor"
  const age:number = 19
  const isWorking:boolean = false

  // 2 - Funções em componentes
  const userGreeting = (name:string):string => {return "Olá, "+name}

  //8 - types
  
  const myTest: textOrNull = "Some text"
  let secondText:textOrNull = null
  secondText = "Now have text"

  // 9 - Context
  const contextValue: IAppContext = {
    language: "JavaScript",
    freamework: "React",
    projects: 1
  }

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>TypeScript com React</h1>
        <h2>Bem-vindo, {name}</h2>
        <p>Você tem {age} anos</p>
        {isWorking && (
          <div>
            <p>Está trabalhando :)</p>
          </div>
        )}
        <h3>{userGreeting(name)}</h3>
        <FirstComponent/>
        <SecondComponent name="Segundo"/>
        <Destructuring 
        title={"Como aprender TypeScript com React"}
        content={"https://github.com/Victor-Palha"}
        commentsQty={2}
        tags={['programming', 'js']}
        category={Category.TS}
        />
        <div>
          <State/>
        </div>
      </div>
      <Context/>
    </AppContext.Provider>
  );
}

export default App;
