import React from "react";

const TaskItem = ({tarefa}) => {

    return(
        <div className="task-item" >
            <p>{tarefa}</p>
            <hr className="hr"/>

        </div>
    )
}

export default TaskItem