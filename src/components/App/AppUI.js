import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({
    error, 
    loading,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    uncompleteTodo,
    deleteTodo,
    }) {
    return (
        <React.Fragment>
            <TodoCounter
                total={totalTodos}
                completed={completedTodos}
            />

            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            
            <TodoList>
                {error && <p>Hubo un error</p>}
                {loading && <p>Cargando informacion...</p>}
                {(!loading && !searchedTodos.length) && <p>Crear el primer todo</p>}

                {searchedTodos.map(todo => (
                <TodoItem 
                    key={todo.text} 
                    text={todo.text} 
                    completed={todo.completed}
                    onComplete={ () => completeTodo(todo.text) }
                    onUncomplete={ () => uncompleteTodo(todo.text) }
                    onDelete={() => deleteTodo(todo.text)}/>  
                ))}
            </TodoList>

            <CreateTodoButton />
            
        </React.Fragment>
    );
}

export { AppUI }