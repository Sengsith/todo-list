import projectsHandler from "./projectsHandler";

const projectsUIHandler = (() => {
  const content = document.querySelector("#content");

  const updateProjectsUI = () => {
    content.textContent = "";
    const projects = document.createElement("div");
    content.appendChild(projects);
    projects.id = "projects";

    const classNames = ["name", "description", "date-created", "due-date"];
    const methodNames = classNames.map((propertyID) =>
      propertyID
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("")
    ); // ["Name", "Description", "DateCreated", "DueDate"]

    projectsHandler.getProjects().forEach((project) => {
      const projectElement = document.createElement("div");
      projects.appendChild(projectElement);
      projectElement.classList.add("project");

      classNames.forEach((className, index) => {
        const propertyElement = document.createElement("p");
        projectElement.appendChild(propertyElement);
        propertyElement.classList.add(`project-${className}`);
        propertyElement.textContent = project[`get${methodNames[index]}`]();
      });
    });
  };

  return { updateProjectsUI };
})();

export default projectsUIHandler;
