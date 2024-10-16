import * as React from 'react';
import TodoList from './Components/TodoList';
import AddTodoForm from './Components/AddTodoForm';
import DoneTodoList from './Components/DoneTodoList';
import "./App.css";
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';


function App() {
 
  const[todoList,settodoList]= React.useState([])
  const [isLoading, setIsLoading] = React.useState(true);
  const [sortOrder, setSortOrder] = React.useState('asc');

  const fetchData = async() => {
  
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
    };

    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}?filterByFormula={Done}=FALSE()&view=Grid%20view`;

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

        if (sortOrder === 'asc') {
          return titleA > titleB ? 1 : -1;
        } else {
          return titleA < titleB ? 1 : -1;
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
}, [sortOrder])

const toggleSortOrder = () => {
  setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
};

async function addTodo(newTodoItem) {
  
  const Options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fields: {
        Title: newTodoItem.title, 
      },
    }),
  };

  const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;

  try {
    
    const response = await fetch(url, Options);

    if (!response.ok) {
      throw new Error(`Failed to add todo: ${response.status}`);
    }

    const data = await response.json();
    
    
    const addedTodo = { id: data.id, title: data.fields.Title };
    settodoList([...todoList, addedTodo]);
  } catch (error) {
    console.error('Error adding todo:', error);
  }
};


   async function removeTodo(id) {
    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
    };
  
    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}/${id}`;
  
    try {
      
      const response = await fetch(url, options);
  
      if (!response.ok) {
        throw new Error(`Failed to delete todo: ${response.status}`);
      }
  
      const filteredToDo = todoList.filter((todo) => todo.id !== id);
      settodoList(filteredToDo);
      
    } catch (error) {
      console.error('Error deleting todo from Airtable:', error);
    }
  }
  async function handleMarkDone(id) {
    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}/${id}`;

    const options = {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          Done: true,
        },
      }),
    };

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const updatedTodo = await response.json();
      console.log('Todo marked as done:', updatedTodo);

      
      settodoList((prevTodoList) => prevTodoList.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error('Error marking todo as done:', error);
    }
  }
return (
    <BrowserRouter>
       <nav>
        <ul>
          <li>
            <Link to="/">Todo List</Link>
          </li>
          <li>
            <Link to="/done">Completed Todos</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Todo List</h1>
              <AddTodoForm onAddTodo={addTodo} />
              <button onClick={toggleSortOrder}>
                Sort {sortOrder === 'asc' ? 'Descending' : 'Ascending'}
              </button>
              {isLoading ? <p>Loading...</p> : <TodoList onRemoveTodo={removeTodo} onMarkDone={handleMarkDone} todoList={todoList} />}
            </>
          }
        />
        <Route path="/done" element={<DoneTodoList />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
