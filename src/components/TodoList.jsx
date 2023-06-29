import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todosSelector } from "../store/todosSelectors";
import { toggleTodoAction } from "../store/todosActions";

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

export function TodoListStore() {
  const todos = useSelector(todosSelector);
  const dispatch = useDispatch();
  const onToggle = useCallback((todo) => {
    dispatch(toggleTodoAction(todo));
  }, [dispatch]);
  return <TodoList todos={todos} onToggle={onToggle} />;
}

/**
export const TodoListStore = connect(
  (state) => ({
    todos: todosSelector(state),
  }),
  (dispatch) => ({
    onToggle: (todo) => dispatch(toggleTodoAction(todo)),
  })
)(TodoList);
**/
