import { v4 as uuid } from "uuid";
// Este Construye la tarea a realizar
export class Todo {
  /**
   *
   * @param {String} description
   */
  constructor(description) {
    this.id = uuid();
    this.description = description;
    this.done = false;
    this.creadedAt = new Date();
  }
}
