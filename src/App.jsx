import * as React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


const useSemiPersistentState=()=>{
  const OtodoList= JSON.parse(localStorage.getItem("savedTodoList")) ?? []
  const[todoList,settodoList]= React.useState(OtodoList)
  const StodoList= JSON.stringify(todoList)
  React.useEffect(()=>{ 
    localStorage.setItem("savedTodoList", StodoList)
},[todoList])
return[todoList,settodoList]
}


function App() {
  const [todoList, settodoList]=useSemiPersistentState()
   const addTodo = (newTodoItem) => {
    settodoList([...todoList, newTodoItem]);
    }
return (
   <>
     <h1>Todo List</h1>
     <AddTodoForm onAddTodo={addTodo}/>
     <TodoList todoList={todoList}/>
   </>
);
}
export default App
