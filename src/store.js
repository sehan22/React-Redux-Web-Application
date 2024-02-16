import {applyMiddleware, compose, createStore} from "redux";
import {thunk} from "redux-thunk";
import rootReducer from "./reducers";

// store
const middleware = [thunk];
const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENTION__&& window.__REDUX_DEVTOOLS_EXTENTION__()
    )
)

export default store;

