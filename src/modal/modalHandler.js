import Project from "../project/Project";
import { format } from "date-fns";
import projectsHandler from "../project/projectsHandler";
import projectsUIHandler from "../project/projectsUIHandler";

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
    projectsUIHandler.updateProjectsUI();
    modal.close();
    console.log(projectsHandler.getProjects());
  });
})();

export default modalHandler;
