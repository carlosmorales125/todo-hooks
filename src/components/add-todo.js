import React, { useContext, useState } from 'react';
import { TodosContext } from '../store/todos-context';


export const AddTodo = () => {
    const [, dispatch] = useContext(TodosContext);
    const [localTodoState, setLocalTodoState] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'addTodo', payload: localTodoState });
        setLocalTodoState('')
    };

    const handleChange = (e) => {
        setLocalTodoState(e.target.value);
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>
                Add Todo
                <input
                    type="text"
                    value={localTodoState}
                    onChange={(e) => handleChange(e)}
                />
            </label>
            <input
                type="submit"
                value="Submit"
            />
        </form>
    );
};

export default AddTodo;
