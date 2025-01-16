import "./style.css";
import { App } from "./src/todos/app";
import todoStore from "./src/todos/todo.store";

todoStore.initStore();
App("#app");
