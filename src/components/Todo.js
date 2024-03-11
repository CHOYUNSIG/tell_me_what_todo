import { useRef } from 'react';
import './Todo.scss';

export const TodoItem = ({
    id,
    task,
    toggle,
    onToggle,
    onDelete,
}) => {
    return (
        <div className="todo-item">
            <input type="checkbox" onClick={() => onToggle(id)}></input>
            <span className={toggle? "done" : "undone"}>{task}</span>
            <button onClick={() => onDelete(id)}>×</button>
        </div>
    );
}

export const Todo = ({
    input,
    tasks, 
    onInput,
    onAdd, 
    onToggle,
    onDelete, 
}) => {
    const inputRef = useRef(null);
    const onClick = () => {
        onAdd(input);
        inputRef.current.focus();
    };

    return (
        <div className="todo">
            <div className="todo-header">Todos</div>
            <div className="todo-adder">
                <input
                    ref={inputRef} 
                    value={input} 
                    onChange={(event) => onInput(event.target.value)}
                    onKeyDown={(event) => {
                        if (event.key.toLowerCase() === "enter")
                            onClick();
                    }}
                />
                <button onClick={() => onClick()}>+</button>
            </div>
            <div className="todo-main">{
                tasks.map((task) => {
                    return <TodoItem
                        key={task.id}
                        id={task.id}
                        task={task.task}
                        toggle={task.toggle}
                        onToggle={onToggle}
                        onDelete={onDelete}
                    />
                })
            }</div>
        </div>
    );
}