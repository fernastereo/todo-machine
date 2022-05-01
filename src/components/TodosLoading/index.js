import React from "react";
import './TodosLoading.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function TodosLoading(){
    return (
        <div className="LoadingTodo-container">
            <FontAwesomeIcon 
                    icon={faSpinner} 
                    className={`LoadingTodo-completeIcon`}/>
            <p className="LoadingTodo-text">Cargando todos...</p>
            <span className="Loadingtodo-deleteIcon"></span>
        </div>
    )
}

export { TodosLoading }