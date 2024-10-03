import { useEffect, useRef } from "react"
import PropTypes from 'prop-types';

export function InputWithLabel(props){
const InputRef= useRef()

useEffect(()=>{
    InputRef.current.focus()   
})

    return(
        <>
        <label htmlFor="todoTitle">{props.children}</label>
        <input value={props.todoTitle} onChange={props.handleTitleChange} id="todoTitle" name="todoTitle"
        ref={InputRef} />
        </>
    )
}
InputWithLabel.propTypes={
    handleTitleChange:PropTypes.func,
    todoTitle:PropTypes.string
  }