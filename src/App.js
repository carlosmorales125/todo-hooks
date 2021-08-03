import React from 'react';
import Todos from './components/todos';
import TodosContextProvider from './store/todos-context';
import AddTodo from './components/add-todo';
import TodoHeading from './components/todo-heading';

function App() {
  return (
    <div className="App container mx-auto">
        <TodosContextProvider>
            <TodoHeading />
            <AddTodo/>
            <Todos/>
        </TodosContextProvider>
    </div>
  );
}

export default App;
