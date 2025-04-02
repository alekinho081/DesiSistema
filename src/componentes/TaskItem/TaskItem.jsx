import React from "react";
import './TaskItem.css'

const TaskItem = ({tarefa}) => {

    return(
        <div className="task-item" >
            <p>{tarefa}</p>
            <button>rpblox</button>
            <hr className="hr"/>

        </div>
    )
}

export default TaskItem