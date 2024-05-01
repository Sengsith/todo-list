import todosHandler from "./todosHandler";

const todosScreenHandler = (() => {
  const updateTodosScreen = () => {
    const content = document.querySelector("#content");
    content.textContent = "";

    const todosContainer = document.createElement("div");
    todosContainer.id = "todos-container";
    content.appendChild(todosContainer);

    const incompleteTodos = document.createElement("div");
    incompleteTodos.id = "incomplete-todos";
    todosContainer.appendChild(incompleteTodos);

    const completeTodos = document.createElement("div");
    completeTodos.id = "complete-todos";
    todosContainer.appendChild(completeTodos);

    todosContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("completed-btn")) {
        e.target.parentNode.classList.toggle("completed");

        const id = e.target.parentNode.id.split("-");
        const index = parseInt(id[id.length - 1]);

        todosHandler.getTodos()[index].toggleCompleted();
        updateTodosScreen();
      }
    });

    todosHandler.getTodos().forEach((todo, index) => {
      const newTask = document.createElement("div");
      newTask.classList.add("task");
      newTask.id = `task-${index}`;

      const taskName = document.createElement("p");
      taskName.classList.add("task-name");
      taskName.textContent = todo.getTaskName();
      newTask.appendChild(taskName);

      const isCompleted = document.createElement("p");
      isCompleted.classList.add("task-is-completed");
      isCompleted.textContent = todo.isCompleted() ? "Completed" : "Not completed";
      newTask.appendChild(isCompleted);

      const completed = document.createElement("button");
      completed.classList.add("completed-btn");
      completed.textContent = "Complete";
      newTask.appendChild(completed);

      if (todo.isCompleted()) completeTodos.appendChild(newTask);
      else incompleteTodos.appendChild(newTask);
    });
  };

  return { updateTodosScreen };
})();

export default todosScreenHandler;
