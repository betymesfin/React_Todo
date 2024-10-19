import * as React from 'react';
import TodoListItem from './TodoListItem';
import PropTypes from 'prop-types';

function TodoList({ todoList, onRemoveTodo, onMarkDone }) {
  return (
    <ul>
      {todoList.map((item) => (
        <TodoListItem
          key={item.id}
          todo={item}
          onRemoveTodo={onRemoveTodo}
          onMarkDone={onMarkDone}  
          id={item.id}
        />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  onRemoveTodo: PropTypes.func,
  onMarkDone: PropTypes.func, 
  todoList: PropTypes.array,
};

export default TodoList;
