export function InputWithLabel(props){
    return(
        <>
        <label htmlFor="todoTitle">{props.children}</label>
        <input value={props.todoTitle} onChange={props.handleTitleChange} id="todoTitle" name="todoTitle"/>
        </>
    )
}