import * as React from 'react';

const TodoListItem = ({todo,onRemoveTodo}) => (
      <li>{todo.title} <button onClick={() => onRemoveTodo(todo.id)}>Remove</button></li>
    )
export default TodoListItem;