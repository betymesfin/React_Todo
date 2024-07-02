import * as React from 'react';
const AddTodoForm = ({ onAddTodo }) => {
    const handleAddTodo =(event) =>{
        event.preventDefault();
        const todoTitle=event.target.title.value
        console.log(todoTitle)
        onAddTodo(todoTitle)
    }
    return(
    <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">Title  </label>
        <input type="text" id="todoTitle" name="title" />
        <button type="submit">Add</button>
    </form>
    );
}
export default AddTodoForm;