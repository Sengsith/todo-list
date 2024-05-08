const modalUIHandler = (() => {
  const openProjectModal = document.querySelector(".open-project-modal");
  const openTodoModal = document.querySelector(".open-todo-modal");
  const closeModal = document.querySelector("#close-modal");
  const modal = document.querySelector("[data-modal]");
  const form = document.querySelector("form");

  const nameLabel = document.querySelector("#label-name");
  const descLabel = document.querySelector("#label-desc");

  // type: "Project" or "Todo"
  const openModal = (type) => {
    nameLabel.textContent = `${type} Name`;
    descLabel.textContent = `${type} Description`;
    form.reset();
    modal.showModal();
  };

  openProjectModal.addEventListener("click", () => {
    openModal("Project");
  });

  openTodoModal.addEventListener("click", () => {
    openModal("Todo");
  });

  closeModal.addEventListener("click", () => {
    modal.close();
  });
})();

export default modalUIHandler;
