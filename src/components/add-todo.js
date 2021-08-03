import React, { useContext, useState } from 'react';
import { TodosContext } from '../store/todos-context';

export const AddTodo = () => {
    const [, dispatch] = useContext(TodosContext);
    const [localTodoState, setLocalTodoState] = useState('');

    const formClasses = `
        flex
        flex-col
        items-center
    `;

    const labelInputClasses = `
        flex
        justify-center
        items-center
        mb-4
        font-mono
        font-medium
    `;

    const inputClasses = `
        box-border
        filter
        drop-shadow-lg
        rounded-sm
        ml-3
     `;

    const submitInputClasses = `
        font-mono
        font-medium
        text-white
        text-2xl
        w-48
        bg-gradient-to-r
        from-yellow-300
        via-blue-900
        to-gray-900
        mb-4
    `;

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'addTodo', payload: localTodoState });
        setLocalTodoState('')
    };

    const handleChange = (e) => {
        setLocalTodoState(e.target.value);
    };

    return (
        <form
            className={formClasses}
            onSubmit={(e) => handleSubmit(e)} >
            <label className={labelInputClasses}>
                Add Todo:
                <input
                    className={inputClasses}
                    type="text"
                    value={localTodoState}
                    onChange={(e) => handleChange(e)}
                />
            </label>
            <input
                className={submitInputClasses}
                type="submit"
                value="Submit"
            />
        </form>
    );
};

export default AddTodo;
