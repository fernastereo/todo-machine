import React from 'react';
import './TodoSearch.css';

function TodoSearch() {
    const onSearchValuechange = (event) => {
        console.log(event.target.value);
    }

    return (
        <input 
            className="TodoSearch" 
            placeholder="Buscar To Do" 
            onChange={onSearchValuechange}
        />
    )
}

export { TodoSearch };