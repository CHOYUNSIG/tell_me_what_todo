const INPUT = 'Todo/INPUT';
const ADD = 'Todo/ADD';
const TOGGLE = 'Todo/TOGGLE';
const DELETE = 'Todo/DELETE';

let todoItemId = 0;

export const inputTodoItem = (changed) => {
    return {
        type: INPUT,
        input: changed,
    };
};

export const addTodoItem = (task) => {
    return {
        type: ADD,
        id: ++todoItemId,
        task: task,
    };
};

export const toggleTodoItem = (id) => {
    return {
        type: TOGGLE,
        id: id,
    };
};

export const delTodoItem = (id) => {
    return {
        type: DELETE,
        id: id,
    };
};

const initState = {
    input: "",
    tasks: [
        {
            id: 0,
            task: "add some jobs",
            toggle: false,
        },
    ],
}

function todoReducer(state=initState, action) {
    switch (action.type) {
        case INPUT:
            return {
                ...state,
                input: action.input,
            };
        case ADD:
            if (action.task === "")
                return state;
            return {
                ...state,
                input: "",
                tasks: state.tasks.concat({
                    id: action.id,
                    task: action.task,
                    toggle: false,
                }),
            };
        case TOGGLE:
            return {
                ...state,
                tasks: state.tasks.map((task) => {
                    if (task.id === action.id)
                        return {
                            ...task,
                            toggle: !task.toggle
                        };
                    else
                        return task; 
                    }),
            };
        case DELETE:
            return {
                ...state,
                tasks: state.tasks.filter((task) => { return task.id !== action.id }),
            };
        default:
            return state;
    }
}

export default todoReducer;