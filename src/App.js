import "./App.css";
import "./store/index";
import { Provider } from "react-redux";
import store from "./store";
import { TodoListStore } from "./components/TodoList";

function App() {
  return (
    <Provider store={store}>
      <TodoListStore/>
    </Provider>
  );
}

export default App;
