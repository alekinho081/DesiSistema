import React, { Children } from "react";
import InputText from '../InputText/InputText'
import ButtonNew from "../ButtonNew/ButtonNew";
import TaskList from "../TaskList/TaskList";
import './Form.css'
import { useState } from "react";

const Form = () => {
    let [tarefa, setTarefa] = useState('')
    let [tarefas, setTarefas] = useState([])

    const aoEnviar = (event) =>{
        event.preventDefault()

        if(tarefa.trim()){
            setTarefas([...tarefas, tarefa]); 
            setTarefa('');
        }
        
        
        
    }
    

    return (
        <div className="form-caixa">
            <div className="form">
                <form onSubmit={aoEnviar}>
                    <InputText valor={tarefa} aoMudar={valor => setTarefa(valor)}/>
                    <ButtonNew type="submit"/>
                </form>
            </div>
            <TaskList tarefas={tarefas} />
        </div>

    )
}

export default Form