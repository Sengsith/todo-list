import todoFactory from "../todo/todoFactory";
import todosHandler from "../todo/todosHandler";

const modalHandler = (() => {
  const openModalBtn = document.querySelector("#open-modal-btn");
  const closeModalBtn = document.querySelector("#close-modal-btn");
  const modal = document.querySelector("[data-modal]");
  const submit = document.querySelector("#submit");
  const newTaskName = document.querySelector("#form-name");

  openModalBtn.addEventListener("click", () => {
    modal.showModal();
  });
  closeModalBtn.addEventListener("click", () => {
    modal.close();
  });
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    todosHandler.addTodo(todoFactory(newTaskName.value));
    todosHandler.updateTodosScreen();
    document.querySelector("form").reset();
    modal.close();
  });
})();

export default modalHandler;
