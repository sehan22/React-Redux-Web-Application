import {combineReducers} from "redux";
import AllPostReducer from '../reducers/reducer-AllPost'
import SelectedPostReducer from '../reducers/reducer-SelectedPost'

//root reducer - for combine all reducers
const rootReducer = combineReducers({
    //create allPost array in the state
    allPost: AllPostReducer,
    selectedPost: SelectedPostReducer,
});

export default rootReducer;
