import * as React from 'react';
const todoList = [
  {
  id: 1,
  title: 'Goto gym',
  },
  {
    id: 2,
    title: ' pay your bill',
},
{
  id: 3,
  title: 'complete Assignment',
},
];
function App() {
return (
<div>
<h1>Todo List</h1>
  <ul>
     {todoList.map(function (item) {
         return <li key={item.id}>{item.title}</li>;
})}
  </ul>

</div>
);
}
export default App
