import Todo from "../todo/Todo";
import collectionHandler from "../collectionHandler";

class Project extends Todo {
  constructor(name, description, priority, dueDate) {
    super(name, description, priority, dueDate);
    this.todos = collectionHandler();
  }

  getTodos = function () {
    return this.todos;
  };

  addTodo = function (todo) {
    this.todos.addTodo(todo);
  };
}

export default Project;
