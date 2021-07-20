import React from 'react';
import Todos from './components/todos';
import TodosContextProvider from './store/todos-context';
import AddTodo from './components/add-todo';

function App() {
  return (
    <div className="App">
        <TodosContextProvider>
            <Todos/>
            <AddTodo/>
        </TodosContextProvider>
    </div>
  );
}

export default App;
