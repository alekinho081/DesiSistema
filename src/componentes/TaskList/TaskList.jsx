import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import './TaskList.css'

const TaskList = ({tarefas}) => {
    
    return(
        <div className="tarefas">
            <h1>Tarefas</h1>
            {tarefas.map((tarefa) => (<TaskItem  tarefa={tarefa}/>))}
        </div>  

    )
}

export default TaskList