import React, { useState } from 'react';
import '../index.css';

interface AddToDoProps {
    onAdd: (text: string) => void;
}

const AddToDo: React.FC<AddToDoProps> = ({ onAdd }) => {
    const [text, setText] = useState<string>('');

    const addTodo = () => {
        if (text.trim()) {
            onAdd(text);
            setText('');
        }
    }

    const cancelToDo = () => {
        setText('');
    }

    return (
        <div className='add-todo'>
            <input 
                type="text" 
                value={text} 
                onChange={e => setText(e.target.value)} 
                placeholder="Enter new todo"
            />
            <button className="edit-button confirm-button" onClick={addTodo}>Confirm</button>
            <button className="edit-button cancel-button" onClick={cancelToDo}>Cancel</button>
        </div>
    )
}

export default AddToDo;