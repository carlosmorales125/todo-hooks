import React, { useContext } from 'react';
import { TodosContext } from '../store/todos-context';

export const Todos = () => {
    const [state, ] = useContext(TodosContext);

    return (
        <div>
            <h1>
                Todos
            </h1>
            <ul>
                { state.todos.map((todo = '') =>
                    <li>
                        { todo }
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Todos;
