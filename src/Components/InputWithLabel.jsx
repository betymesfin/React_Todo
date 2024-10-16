import { useEffect, useRef } from "react"
import PropTypes from 'prop-types';
import styles from './InputWithLable.module.css';

export function InputWithLabel(props){
const InputRef= useRef()

useEffect(()=>{
    InputRef.current.focus()   
})

    return(
        <>
        <label htmlFor="todoTitle">{props.children}</label>
        <input value={props.todoTitle} onChange={props.handleTitleChange} id="todoTitle" name="todoTitle"
        ref={InputRef} className={styles.titleinput} placeholder="Enter a new task"/>
        </>
    )
}
InputWithLabel.propTypes={
    handleTitleChange:PropTypes.func,
    todoTitle:PropTypes.string
  }