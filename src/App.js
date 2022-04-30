import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
// import './App.css';

const todos = [
  { text: 'Lorem ipsum dolor sit amet', completed: false},
  { text: 'consectetur adipiscing elit', completed: true},
  { text: 'sed do eiusmod tempor incididunt', completed: false},
  { text: 'ut labore et dolore magna aliqua', completed: false},
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />
      
      <TodoList>
        {todos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}/>  
        ))}
      </TodoList>

      <CreateTodoButton />
      
    </React.Fragment>
  );
}

export default App;
