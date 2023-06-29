import React from "react";
import { connect } from "react-redux";
import { UPDATE_TODOO_ACTION } from "../store/todosReducer";

function TodoItem({ todo, onToggle }) {
  return (
    <li>
      <label htmlFor="">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo)}
        />
        {todo.title}
      </label>
    </li>
  );
}

export function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} onToggle={onToggle} key={todo.id} />
      ))}
    </ul>
  );
}

export const TodoListStore = connect(
  (state) => ({
    todos: state.todos,
  }),
  (dispatch) => ({
    onToggle: (todo) =>
      dispatch({
        type: UPDATE_TODOO_ACTION,
        payload: { ...todo, completed: !todo.completed },
      }),
  })
)(TodoList);
