import { createStore, combineReducers} from "redux";
import { todosReducer } from "./todosReducer";
//!: We recommend using the configureStore method of the @reduxjs/toolkit package, which replaces createStore.

export default createStore(
combineReducers({
    todos: todosReducer,
    filter: (state = 0, action) => state
}),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //Requis pour redux-devtools-extention
);