import React, {useState} from 'react';
import AddToDo from './AddToDo';
import '../index.css';

interface ToDo {
    id: number;
    text: string;
    completed: boolean;
}
const ToDoApp: React.FC = () =>{
    const [todos, setTodos] = useState<ToDo[]>([{id: 1, text: 'Learn React', completed: true}, {id: 2, text: 'Learn TypeScript', completed: false}]);
    const [addTodo, setAddTodo] = useState<boolean>(false);
    // const addTodo = (text: string) => {
    //     setTodos([...todos, { id: Date.now(), text, completed: false }]);
    //   };

    const removeToDo = (id: number) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    }

    const toggleAddTodo = () => {
        setAddTodo(!addTodo);
    }

    const handleAddTodo = (text: string) => {
        const newTodo: ToDo = {
            id: Date.now(),
            text,
            completed: false
        };
        setTodos([...todos, newTodo]);
    }

    return (
        <>
            <h1>React To Do App</h1>
            <ul className='todo-list'> 
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.text}
                        <button className="edit-button cancel-button" onClick={() => removeToDo(todo.id)}>remove</button>
                    </li>
                    )
                )}
            </ul>
            <button className="toggle-add-todo" onClick={toggleAddTodo}>{addTodo ? 'Close' : 'Add ToDo'}</button>
            {addTodo && <AddToDo onAdd={handleAddTodo} />}
        </>
    )
}

export default ToDoApp;