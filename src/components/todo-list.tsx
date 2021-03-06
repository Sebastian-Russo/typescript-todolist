import React from 'react';
import { TodoListItems } from './todo-list-item';

interface TodoListProps {
  todos: Array<Todo>;  // type 
  toggleTodo: toggleTodo; // type 
}
                              // generic 
export const TodoList: React.FC<TodoListProps> = ({todos, toggleTodo}) => {

  const item = todos.map((todo,i) => {
    return (
      <div key={i}>
        <TodoListItems todo={todo} toggleTodo={toggleTodo}/>
      </div>
    )
  })

  return (
    <div>
      {item}
    </div>
  )
}