import * as React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  const[newTodo,setNewTodo]=React.useState('')
  const[todoList,settodoList]= React.useState([{
    id: 1,
    title: 'Go to gym',
  },
  {
    id: 2,
    title: 'Pay your bill',
  },
  {
    id: 3,
    title: 'Complete Assignment',
  },])

return (
   <div>
     <h1>Todo List</h1>
     <AddTodoForm onAddTodo={setNewTodo}/>
     <p> Adding <strong>{newTodo} </strong></p>
     <TodoList todos={todoList}/>
   </div>
);
}
export default App
