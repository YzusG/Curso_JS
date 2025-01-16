import { Todo } from "../todos/models/todos";
// Este es el archivo donde se aplica la logica que se necesita para que funcione la app
const Filter = {
  ALl: "all",
  Completed: "completed",
  Pending: "Pending",
};

const state = {
  todos: [
    new Todo("Piedra del Alma"),
    new Todo("Piedra del Infinito"),
    new Todo("Piedra del Tiempo"),
    new Todo("Piedra del Cuerpo"),
  ],
  filter: Filter.ALl,
};

const initStore = () => {
  console.log(state);
  console.log("InitStore ❤");
};

const loadStore = () => {
  throw new Error("No implementado");
};

const getTodo = (filter = Filter.ALl) => {
  switch (filter) {
    case Filter.ALl:
      return [...state.todos];
    case Filter.Completed:
      return state.todos.filter((todo) => todo.done);
    case Filter.Pending:
      return state.todos.filter((todo) => !todo.done);
    default:
      throw new Error(`Option ${filter} is not valid`);
  }
};

/**
 *
 * @param {String} description
 */
const addTodo = (description) => {
  if (!description) throw new Error("Description is requiered");
  state.todos.push(new Todo(description));
};
/**
 *
 * @param {String} todoId Todo Identifier
 */
const toggleTodo = (todoId) => {
  state.todos = state.todos.map((todo) => {
    if (todo.id === todoId) {
      todo.done == !todo.done;
    }
    return todo;
  });
};

const deleteTodo = (todoId) => {
  state.todos = state.todos.filter((todo) => todo.id !== todoId);
};

const deleteCompleted = () => {
  state.todos = state.todos.filter((todo) => todo.done);
};
/**
 *
 * @param {Filters} newFilter
 */
const setFilter = (newFilter = Filter.ALl) => {
  state.Filter = new Filter();
};

const getCurrentFilter = () => {
  return state.Filter;
};
export default {
  addTodo,
  deleteCompleted,
  deleteTodo,
  getCurrentFilter,
  getTodo,
  initStore,
  loadStore,
  setFilter,
  toggleTodo,
};
