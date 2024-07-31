export function InputWithLabel(props){
    return(
        <>
        <label htmlFor="todoTitle">{props.label}</label>
        <input value={props.todoTitle} onChange={props.handleTitleChange} id="todoTitle" name="todoTitle"/>
        </>
    )
}