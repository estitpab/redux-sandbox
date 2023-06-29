let id = 2;
const initialState = [
  {
    id: 1,
    title: "Enregister le tuto",
    completed: false,
  },
  {
    id: 2,
    title: "Préparer le tuto",
    completed: true,
  },
];

export const ADD_TODOO_ACTION = "ADD_TODOO_ACTION";
export const UPDATE_TODOO_ACTION = "UPDATE_TODOO_ACTION";

export function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODOO_ACTION:
      return [...state, { id: ++id, completed: false, ...action }];
    case UPDATE_TODOO_ACTION:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, ...action.payload };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
}
