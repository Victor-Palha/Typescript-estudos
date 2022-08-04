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