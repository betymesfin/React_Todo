import * as React from 'react';

const AddTodoForm = ({onAddTodo}) => {
    const [todoTitle, setTodoTitle] = React.useState(''); 

    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);  
    };

    const handleAddTodo = (event) => {
        event.preventDefault();
        if (todoTitle) {
            const todoItem = {
              title: todoTitle,
              id: Date.now()
            };
            onAddTodo(todoItem);
            setTodoTitle('');  
        }
    };

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input
                type="text"
                value={todoTitle}
                onChange={handleTitleChange}
                id="todoTitle"
                name="todoTitle"
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTodoForm;
