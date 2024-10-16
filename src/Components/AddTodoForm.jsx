import * as React from 'react';
import { InputWithLabel } from './InputWithLabel';
import PropTypes from 'prop-types';
import styles from './AddTodoForm.module.css';


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
        <InputWithLabel handleTitleChange={handleTitleChange} todoTitle={todoTitle}>  
        <span className={styles.title}>Title  </span>
        </InputWithLabel>
        <button type="submit" className={styles.addbtn}>Add</button>
        </form>
    );
};

AddTodoForm.propTypes={
    onAddTodo:PropTypes.func
}

export default AddTodoForm;
