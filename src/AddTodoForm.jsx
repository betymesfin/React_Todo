import * as React from 'react';
import { InputWithLabel } from './InputWithLabel';

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
        <InputWithLabel handleTitleChange={handleTitleChange} todoTitle={todoTitle}>  Title </InputWithLabel>
        <button type="submit">Add</button>
        </form>
    );
};

export default AddTodoForm;
