import projectsHandler from "./projectsHandler";

const projectsUIHandler = (() => {
  const content = document.querySelector("#content");
  const classNames = ["name", "description", "date-created", "due-date"];
  const methodNames = classNames.map((propertyID) =>
    propertyID
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("")
  ); // ["Name", "Description", "DateCreated", "DueDate"]

  const updateProjectsUI = () => {
    content.textContent = "";
    const projects = document.createElement("div");
    content.appendChild(projects);
    projects.id = "projects";

    projectsHandler.getProjects().forEach((project) => {
      const projectElement = document.createElement("div");
      projects.appendChild(projectElement);
      projectElement.classList.add("project");

      createElements("project", project, projectElement);

      const todoContainer = document.createElement("div");
      projectElement.appendChild(todoContainer);
      todoContainer.className = "project-todos";

      project.getTodos().forEach((todo) => {
        createElements("todo", todo, todoContainer);
      });
    });
  };

  // prefix: string prefix for class name
  // iterableCurrent: single iterated project object
  // projectElement: DOM reference to append to
  const createElements = (prefix, iterableCurrent, projectElement) => {
    classNames.forEach((className, index) => {
      // Project properties
      const propertyElement = document.createElement("p");
      projectElement.appendChild(propertyElement);
      propertyElement.classList.add(`${prefix}-${className}`);
      propertyElement.textContent = iterableCurrent[`get${methodNames[index]}`]();
    });
  };

  return { updateProjectsUI };
})();

export default projectsUIHandler;
