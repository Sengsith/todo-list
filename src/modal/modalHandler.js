import todoFactory from "../todo/todoFactory";
import projectFactory from "../project/projectFactory";
import projectHandler from "../project/projectHandler";
import todosScreenHandler from "../todo/todosScreenHandler";

const modalHandler = (() => {
  const openTodoModal = document.querySelector("#open-todo-modal");
  const closeTodoModal = document.querySelector("#close-todo-modal");
  const todoModal = document.querySelector("[data-todo]");
  const todoSubmit = document.querySelector("#todo-submit");
  const todoName = document.querySelector("#todo-name");

  openTodoModal.addEventListener("click", () => {
    todoModal.showModal();
  });
  closeTodoModal.addEventListener("click", () => {
    todoModal.close();
  });
  todoSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    // TODO: Fix whenever we are done with project implementation
    document.querySelector("#todo-form").reset();
    todoModal.close();
  });

  const openProjectModal = document.querySelector("#open-project-modal");
  const closeProjectModal = document.querySelector("#close-project-modal");
  const projectModal = document.querySelector("[data-project]");
  const projectSubmit = document.querySelector("#project-submit");
  const projectName = document.querySelector("#project-name");

  openProjectModal.addEventListener("click", () => {
    projectModal.showModal();
  });
  closeProjectModal.addEventListener("click", () => {
    projectModal.close();
  });
  projectSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    const newProject = projectFactory(projectName.value);
    projectHandler.addProject(newProject);
    document.querySelector("#project-form").reset();
    projectModal.close();
  });
})();

export default modalHandler;
