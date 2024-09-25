import * as React from 'react';
import styles from './TodoListItem.module.css';
import PropTypes from 'prop-types';

const TodoListItem = ({todo,onRemoveTodo}) => (
      <li className={styles.ListItem}>{todo.title} <button onClick={() => onRemoveTodo(todo.id)}>Remove</button></li>
    )

TodoListItem.propTypes={
      onRemoveTodo:PropTypes.func
    }
export default TodoListItem;