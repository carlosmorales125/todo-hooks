import React, { createContext, useReducer } from 'react';
import InitialState from './todos-initial-state';
import TodosReducer from './todos-reducer';

export const TodosContext = createContext({});

export const TodosContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TodosReducer, InitialState);

    return (
        <TodosContext.Provider value={[state, dispatch]}>
            { children }
        </TodosContext.Provider>
    );
};

export default TodosContextProvider;
