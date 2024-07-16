import * as React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  const[todoList,settodoList]= React.useState([ ])
    const addTodo = (newTodoItem) => {
    settodoList([...todoList, newTodoItem]);
    
  };
return (
   <div>
     <h1>Todo List</h1>
     <AddTodoForm onAddTodo={addTodo}/>
     <TodoList todoList={todoList}/>
   </div>
);
}
export default App
