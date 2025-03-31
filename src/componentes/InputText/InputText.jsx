import React from "react";

const InputText = (props) => {
    const aoDigitar = (evento) => {
        aoAlterar(evento.target.value)
   }

    return(
        <div className="input-text">
            <label>Tarefa</label>
            <input
             placeholder="Digite a sua tarefa" 
             required={true} 
             value={valor}
             onChange={aoDigitar}
             />
        </div>
    )
}

export default InputText