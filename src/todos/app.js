import html from "./app.html?raw";
import todoStore from "./todo.store";
import { renderTodos } from "./use-cases";
// Para Evtiar tener valores volatiles los guardamos en un objecto que solo tiene como proposito seleccionar el identificador
const elementIDs = {
  todoList: ".todo-list",
  NewTodoInput: "#new-todo-input",
};
/**
 *
 * @param {String} elementID
 */

export const App = (elementID) => {
  // Esta funcion los va a mostrar en el DOM de la pagina ya renderizados
  const displayTodos = () => {
    const todos = todoStore.getTodo(todoStore.getCurrentFilter());
    renderTodos(elementIDs.todoList, todos);
  };

  // Cuando la funcion se Autoinvoca
  (() => {
    const app = document.createElement("div");
    app.innerHTML = html;
    document.querySelector(elementID).append(app);
    displayTodos(elementIDs.todoList);
  })();

  // Referencia HTML
  const newDescriptionInput = document.querySelector(elementIDs.NewTodoInput);
  const todoListUL = document.querySelector(elementIDs.todoList);

  // Listeners
  newDescriptionInput.addEventListener("keyup", (event) => {
    if (event.keyCode != 13) return; //Aqui aseguramos que si no presiona el ENTER continue trabajando
    if (event.target.value.trim().length == 0) return; //Aqui eliminamos cualquier espacio que tenga y si no hay caracteres en la descripcion no saca de la operacion
    todoStore.addTodo(event.target.value); //Ya una vez validado todo agregamos el TODO en el Store y luego lo renderizamos
    displayTodos();
    event.target.value = ""; //Reseteamos la caja del Todo
  });

  todoListUL.addEventListener("click", (event) => {
    const element = event.target.closest("[data-id]");
    // console.log(element.getAttribute("data-id"));
    todoStore.toggleTodo(element.getAttribute("data-id"));
    displayTodos();
  });
};
