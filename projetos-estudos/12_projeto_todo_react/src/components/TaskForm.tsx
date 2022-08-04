import React,{useState, ChangeEvent, FormEvent, useEffect} from 'react'
//CSS
import styles from "./TaskForm.module.css"
//Interfaces
import { ITask } from "../interfaces/Task";

type Props = {
    btnText:string
    taskList: ITask[]
}

const TaskForm = ({btnText, taskList}: Props) => {

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