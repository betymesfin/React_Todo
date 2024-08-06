import * as React from 'react';
import TodoListItem from './TodoListItem';
function TodoList({todoList, onRemoveTodo}) {
  return (
    <ul>
      {todoList.map((item) => (
        <TodoListItem key={item.id} 
        todo={item} 
        onRemoveTodo={onRemoveTodo} 
        id={item.id}/>
      ))}
    </ul>
  );
}

export default TodoList;
