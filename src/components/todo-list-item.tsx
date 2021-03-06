import React from 'react'; 
import './todo-list-item.css';

interface TodoListItemsProps {
  todo: Todo; // type
  toggleTodo: toggleTodo;  // type 
}
                                    // generic 
export const TodoListItems: React.FC<TodoListItemsProps> = ({todo, toggleTodo}) => {
  return (
    <div>
      <label className={todo.complete ? "complete" : undefined}>
      <input type="checkbox" checked={todo.complete} onChange={() => toggleTodo(todo)} />
        {todo.text}
      </label>
    </div>
  )
}


// An interface is a syntactical contract that an entity should conform to. 
// In other words, an interface defines the syntax that any entity must adhere to. 
// Interfaces define properties, methods, and events, which are the members of the interface.

// Generics are basically a kind of tool that enables you to create reusable 
// code components that work with a number of types instead of a single type

// Type Annotation 
// const cities: string[] = ['Delhi', 'New York', 'London'];
// OR
// cont cities: Array<string> =['Delhi', 'New York', 'London'];