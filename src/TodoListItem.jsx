import * as React from 'react';
import styles from './TodoListItem.module.css';

const TodoListItem = ({todo,onRemoveTodo}) => (
      <li className={styles.ListItem}>{todo.title} <button onClick={() => onRemoveTodo(todo.id)}>Remove</button></li>
    )
export default TodoListItem;