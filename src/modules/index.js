import { combineReducers } from "redux";
import todo from './TodoReducer';

const reducer = combineReducers({
    todo,
});

export default reducer;