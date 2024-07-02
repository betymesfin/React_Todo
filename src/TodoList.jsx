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
const TodoList = () => (<ul>
        {todoList.map(function (item) {
            return <li key={item.id}>{item.title}</li>;
   })}
     </ul>
     );
export default TodoList;