import React from 'react';

const TodoHeading = () => {
    const TodoHeadingClasses = `
        flex
        justify-center
        text-3xl
        text-white
        font-mono
        font-bold
        mb-4
        py-4
        bg-gradient-to-r
        from-gray-900
        via-blue-900
        to-yellow-300
    `;
    return (
        <h1 className={TodoHeadingClasses}>My 90s Todo List</h1>
    );
};

export default TodoHeading;