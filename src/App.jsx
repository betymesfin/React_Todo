import * as React from 'react';
import TodoList from './Components/TodoList';
import AddTodoForm from './Components/AddTodoForm';
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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

    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}?view=Grid%20view&sort[0][field]=Title&sort[0][direction]=asc`

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      const data = await response.json();

      const todos = data.records.map((todo) => {
        return { id: todo.id, title: todo.fields.Title };
      });

      const Sortedtodos= todos.sort((objectA,obbjectB) => {
        const titleA=objectA.title
        const titleB=obbjectB.title
        if(titleA<titleB){
          return 1
        }
        else if(titleA>titleB){
          return -1
        }
        else{
          return 0
        }
      })
      

      settodoList(Sortedtodos);
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
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Todo List</h1>
              <AddTodoForm onAddTodo={addTodo} />
              {isLoading ? <p>Loading...</p> : <TodoList onRemoveTodo={removeTodo} todoList={todoList} />}
            </>
          }
        />
      <Route path="/new" element={<h1>New ToDo List</h1>} />
      </Routes>
      
    </BrowserRouter>
  );
}
export default App;
