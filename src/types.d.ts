type Todo = {
    text: string;
    complete: boolean;
}

type toggleTodo = (selectedTodo: Todo) => void;

type addTodo = (newTodo: string) => void;