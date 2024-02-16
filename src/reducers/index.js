import {combineReducers} from "redux";
import AllPostReducer from '../reducers/reducer-AllPost'

//root reducer - for combine all reducers
const rootReducer = combineReducers({
    //create allPost array in the state
    allPost: AllPostReducer,
});

export default rootReducer;
