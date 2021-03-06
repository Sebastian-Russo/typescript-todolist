import React, { useState } from 'react';
import { AddTodoForm } from './add-todo-form';
import './App.css';
import { TodoList } from './todo-list';

const initialTodos = [
  {text: "feed kitty", complete: false},
  {text: "walk dog", complete: false}
]

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

                  // type
  const toggleTodo: toggleTodo = (selectedTodo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          text: todo.text,
          complete: !todo.complete
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const addTodo: addTodo = newTodo => {
    newTodo.trim() !== "" &&
    setTodos([
      ...todos, { text: newTodo, complete: false}
    ])
  }

  return (
    <div className="App">
        <TodoList todos={todos} toggleTodo={toggleTodo} />
        <AddTodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;

// Type Annotation 
// const cities: string[] = ['Delhi', 'New York', 'London'];
// OR
// cont cities: Array<string> =['Delhi', 'New York', 'London'];


// interface for objects and classes 
// can be extended and changed to fit need

// types for functions 
// types are static, alias to a shape 
// combine with unions, intersections 
// can be easier to use than interfaces 