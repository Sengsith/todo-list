const todosScreenHandler = (() => {
  const COMPLETE_BTN_CLASSNAME = "complete-btn";
  const CLEAR_BTN_CLASSNAME = "clear-btn";

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
      const id = e.target.parentNode.id.split("-");
      const index = parseInt(id[id.length - 1]);
      if (e.target.classList.contains(COMPLETE_BTN_CLASSNAME)) {
        e.target.parentNode.classList.toggle("completed");

        todosHandler.getTodos()[index].toggleCompleted();
        updateTodosScreen();
      } else if (e.target.classList.contains(CLEAR_BTN_CLASSNAME)) {
        todosHandler.removeTodo(index);
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
      completed.classList.add(COMPLETE_BTN_CLASSNAME);
      completed.textContent = todo.isCompleted() ? "Incomplete" : "Complete";
      newTask.appendChild(completed);

      const clear = document.createElement("button");
      clear.classList.add(CLEAR_BTN_CLASSNAME);
      clear.textContent = "Clear";
      newTask.appendChild(clear);

      if (todo.isCompleted()) completeTodos.appendChild(newTask);
      else incompleteTodos.appendChild(newTask);
    });
  };

  return { updateTodosScreen };
})();

export default todosScreenHandler;
