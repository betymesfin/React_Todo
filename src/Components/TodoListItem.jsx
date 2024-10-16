import * as React from 'react';
import styles from './TodoListItem.module.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const TodoListItem = ({todo,onRemoveTodo,onMarkDone}) => (
   
      <li className={styles.ListItem}>{todo.title} 
      <div className={styles.buttonsContainer}>
      <button onClick={() => onMarkDone(todo.id)} className={styles.doneBtn}>Done</button>
        <button onClick={() => onRemoveTodo(todo.id)} className={styles.deleteBtn}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
        </div>
      </li>
   
    )


TodoListItem.propTypes={
      onRemoveTodo:PropTypes.func,
      todo:PropTypes.any
    }
export default TodoListItem;