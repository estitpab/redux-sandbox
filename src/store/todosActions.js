import { UPDATE_TODOO_ACTION } from "./todosReducer";

export const toggleTodoAction = (todo) => ({
  type: UPDATE_TODOO_ACTION,
  payload: { ...todo, completed: !todo.completed },
});
