import React, { useContext } from 'react';
import { TodosContext } from '../store/todos-context';

export const Todos = () => {
    const [state, ] = useContext(TodosContext);
    const { todos = [] } = state;

    return (
        <div>
            <h1>
                Todos
            </h1>
            <ul>
                { todos.map((todo = '', i) =>
                    <li key={`todo-${i}`}>
                        { todo }
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Todos;
