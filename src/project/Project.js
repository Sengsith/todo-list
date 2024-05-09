import Todo from "../todo/Todo";

class Project extends Todo {
  constructor(name, description, priority, dueDate) {
    super(name, description, priority, dueDate);
    this.todos = [];
  }

  getTodos = function () {
    return this.todos;
  };

  addTodo = function (todo) {
    this.todos.push(todo);
  };
}

export default Project;
