import * as React from 'react';
const AddTodoForm = () => {
    return(
    <form>
        <label htmlFor="todoTitle">Title  </label>
        <input type="text" id="todoTitle" />
        <button type="submit">Add</button>
    </form>
    );
}
export default AddTodoForm;