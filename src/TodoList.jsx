import * as React from 'react';
import TodoListItem from './TodoListItem';

// const todoList = [
//   {
//     id: 1,
//     title: 'Go to gym',
//   },
//   {
//     id: 2,
//     title: 'Pay your bill',
//   },
//   {
//     id: 3,
//     title: 'Complete Assignment',
//   },
// ];

function TodoList(props) {
  return (
    <ul>
      {props.todos.map((item) => (
        <TodoListItem key={item.id} todo={item} />
      ))}
    </ul>
  );
}

export default TodoList;
