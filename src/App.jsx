import * as React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import "./App.css";


/*const useSemiPersistentState=()=>{
  const OtodoList= JSON.parse(localStorage.getItem("savedTodoList")) ?? []
  const[todoList,settodoList]= React.useState(OtodoList)
  const StodoList= JSON.stringify(todoList)
  React.useEffect(()=>{ 
    localStorage.setItem("savedTodoList", StodoList)
},[todoList])
return[todoList,settodoList]
}
*/

function App() {
  //const [todoList, settodoList]=useSemiPersistentState()
  const OtodoList= JSON.parse(localStorage.getItem("savedTodoList")) ?? []
  const[todoList,settodoList]= React.useState([])
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchData = async() => {
  
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
    };

    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      const data = await response.json();
      const todos = data.records.map((todo) => {
        return { id: todo.id, title: todo.fields.Title };
      });
      

      settodoList(todos);
      setIsLoading(false);
  }
  catch (error) {
    console.log(error.message);
    return null;
  }
}

  React.useEffect(()=>{
    fetchData()
}, [])

  React.useEffect(()=>{ 
    if(isLoading){
      return;
    }
    const StodoList= JSON.stringify(todoList)
    localStorage.setItem("savedTodoList", StodoList)
},[todoList])

   const addTodo = (newTodoItem) => {
    settodoList([...todoList, newTodoItem]);
    }

   function removeTodo (id){
    const filteredToDo= todoList.filter((todo)=>todo.id !==id)
    settodoList(filteredToDo)
   }


return (
   <>
     <h1>Todo List</h1>
     <AddTodoForm onAddTodo={addTodo}/>
     { isLoading ? <p>Loading...</p> :
     <TodoList onRemoveTodo={removeTodo} todoList={todoList}/>}
   </>
);
}
export default App
