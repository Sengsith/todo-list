const todosHandler = (() => {
  const todos = [];
  const content = document.querySelector("#content");

  const getTodos = () => todos;

  const addTodo = (todo) => todos.push(todo);

  const updateTodosScreen = () => {
    content.textContent = "";

    const todosContainer = document.createElement("div");
    todosContainer.id = "todos-container";
    content.appendChild(todosContainer);
    todos.forEach((todo) => {
      const newTask = document.createElement("div");
      newTask.classList.add("task");

      const taskName = document.createElement("p");
      taskName.classList.add("task-name");
      taskName.textContent = todo.getTaskName();
      newTask.appendChild(taskName);

      const completed = document.createElement("p");
      completed.classList.add("task-completed");
      completed.textContent = todo.isCompleted();
      newTask.appendChild(completed);

      todosContainer.appendChild(newTask);
    });
  };

  return { getTodos, addTodo, updateTodosScreen };
})();

export default todosHandler;
