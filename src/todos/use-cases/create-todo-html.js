import { Todo } from "../models/todos";
/**
 *
 * @param {Todo} todo
 * @returns Element Html
 */
export const createTodoHTML = (todo) => {
  if (!todo) throw new Error("A todo object is required");
  // Esto es para desectructurar la lista o arreglo y tomar esas variables
  const { done, description, id } = todo;
  const html = `
        <div class="view">
          <input class="toggle" type="checkbox" ${done ? "checked" : ""} />
          <label>${description}</label>
          <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template" />`;
  const liElement = document.createElement("li");
  liElement.innerHTML = html;
  liElement.setAttribute("data-id", id);
  if (todo.done) liElement.classList.add("done");
  return liElement;
};
