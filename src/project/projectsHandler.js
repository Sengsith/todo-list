const projectsHandler = (() => {
  const projects = [];

  const addProject = (item) => projects.push(item);

  const getProjects = () => projects;

  return { addProject, getProjects };
})();

export default projectsHandler;
