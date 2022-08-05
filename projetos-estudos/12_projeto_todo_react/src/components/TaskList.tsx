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