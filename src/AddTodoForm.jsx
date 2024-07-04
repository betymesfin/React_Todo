import * as React from 'react';
const AddTodoForm = (props) => {

    const handleAddTodo =(event) =>{
        event.preventDefault();
        const todoTitle=event.target.title.value
        console.log(todoTitle)
        props.onAddTodo(todoTitle)
        const form=event.target
        form.reset()

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