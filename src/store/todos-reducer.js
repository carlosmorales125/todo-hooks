export const TodosReducer = (state, action) => {
    const { type = '', payload = '' } = action || {};
    const { todos = [] } = state || {};

    switch (type) {
        case 'addTodo':
            return {
                ...state,
                todos: [...todos, payload]
            };
        case 'clearAllTodos':
            return {
                ...state,
                todos: [],
            };
        default: throw new Error(`${action} is not defined in Todos Reducer`);
    }
};

export default TodosReducer;
