const projectsHandler = (() => {
  const projects = [];

  const addItem = (item) => projects.push(item);

  const getProjects = () => projects;

  return { addItem, getProjects };
})();

export default projectsHandler;
