import React from 'react';
import './TodoCounter.css';


function TodoCounter({ total, completed }) {

    return (
        <h2 className="TodoCounter">Ut enim ad minim {completed} de {total} veniam</h2>
    );
}

export { TodoCounter };