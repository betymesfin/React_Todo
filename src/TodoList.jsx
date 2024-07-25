import * as React from 'react';
import TodoListItem from './TodoListItem';
function TodoList({todoList}) {
  return (
    <ul>
      {todoList.map((item) => (
        <TodoListItem key={item.id} todo={item} />
      ))}
    </ul>
  );
}

export default TodoList;
