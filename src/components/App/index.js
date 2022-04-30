import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';
function App() {
  

  // console.log('Render antes use effect');

  // React.useEffect(() => {
  //   console.log('use effect');
  // }, [totalTodos]);

  // console.log('Render despues use effect');

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
