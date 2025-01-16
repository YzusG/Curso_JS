import { Todo } from "../models/todos";
import { createTodoHTML } from "./create-todo-html";

let element;
// Aqui se renderiza los elementos creados html
/**
 *
 * @param {String} elementID
 * @param {Todo} todos
 */
export const renderTodos = (elementID, todo = []) => {
  if (!element) element = document.querySelector(elementID);
  if (!element) throw new Error(`Element ${elementID} is not found`);
  element.innerHTML = "";
  todo.forEach((todo) => {
    element.append(createTodoHTML(todo));
  });
};
