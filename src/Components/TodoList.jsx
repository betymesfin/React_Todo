import * as React from 'react';
import TodoListItem from './TodoListItem';
import PropTypes from 'prop-types';


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

TodoList.propTypes={
  onRemoveTodo:PropTypes.func,
  todoList:PropTypes.array
}

export default TodoList;
