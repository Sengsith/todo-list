const todosHandler = (() => {
  const todos = [];

  const getTodos = () => todos;

  const addTodo = (todo) => todos.push(todo);

  const toggleTodoCompleted = (todoElement) => {
    const id = todoElement.id.split("-");
    const index = parseInt(id[1]);
    todos[index].toggleCompleted();
  };

  const updateTodosScreen = () => {
    const content = document.querySelector("#content");
    content.textContent = "";

    const todosContainer = document.createElement("div");

    todosContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("completed-btn")) {
        e.target.parentNode.classList.add("completed");

        toggleTodoCompleted(e.target.parentNode);
      }
    });

    todosContainer.id = "todos-container";
    content.appendChild(todosContainer);
    todos.forEach((todo, index) => {
      const newTask = document.createElement("div");
      newTask.classList.add("task");
      newTask.id = `task-${index}`;

      const taskName = document.createElement("p");
      taskName.classList.add("task-name");
      taskName.textContent = todo.getTaskName();
      newTask.appendChild(taskName);

      // TODO: make completed into a proper element
      // When the user says that it's completed, we cross it out
      // Copy the element into a list of completed todos
      // Remove the element from the list of current todos
      const completed = document.createElement("button");
      completed.classList.add("completed-btn");
      completed.textContent = "Complete";
      newTask.appendChild(completed);

      todosContainer.appendChild(newTask);
    });
  };

  return { getTodos, addTodo, updateTodosScreen };
})();

export default todosHandler;
