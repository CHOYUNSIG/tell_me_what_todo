import { connect } from 'react-redux';
import { Todo } from '../components/Todo';
import { inputTodoItem, addTodoItem, toggleTodoItem, delTodoItem } from '../modules/TodoReducer';

const TodoContainer = ({
    input,
    tasks, 
    inputTodoItem, 
    addTodoItem, 
    toggleTodoItem,
    delTodoItem,
}) => {
    return <Todo
        input={input} 
        tasks={tasks} 
        onInput={inputTodoItem}
        onAdd={addTodoItem} 
        onToggle={toggleTodoItem}
        onDelete={delTodoItem} 
    />
};

export default connect(
    (state) => ({
        input: state.todo.input,
        tasks: state.todo.tasks,
    }),
    {
        inputTodoItem,
        addTodoItem,
        toggleTodoItem,
        delTodoItem,
    },
)(TodoContainer);