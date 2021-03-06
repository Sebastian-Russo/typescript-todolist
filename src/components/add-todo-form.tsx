import React, { useState, ChangeEvent, FormEvent } from 'react'; 

interface AddTodoFormProps {
  addTodo: addTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({addTodo}) => {
  const [input, setInput] = useState("");
  
  // have to specifc change event type, then pass generic HTML Input Element 
  const handleChange = (e: ChangeEvent<HTMLInputElement> ) => {
    setInput(e.target.value)
  }

// have to specifc form event type, then pass generic HTML Button Element 
  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(input)
    setInput("")
  }

  return (
    <form>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={handleSubmit} >Add Todo</button>
    </form>
  )
}