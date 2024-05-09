import Project from "../project/Project";
import { format } from "date-fns";
import projectsHandler from "../project/projectsHandler";

const modalHandler = (() => {
  const form = document.querySelector("form");
  const modal = document.querySelector("[data-modal]");
  const name = document.querySelector("#input-name");
  const desc = document.querySelector("#input-desc");
  const priority = document.querySelector("#select-priority");
  const dueDate = document.querySelector("#input-date");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newProject = new Project(
      name.value,
      desc.value,
      priority.value,
      format(dueDate.value, "MM/dd/yyyy")
    );
    projectsHandler.addItem(newProject);
    modal.close();
    console.log(projectsHandler.getProjects());
  });
})();

export default modalHandler;
