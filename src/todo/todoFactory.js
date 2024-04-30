const todoFactory = (name) => {
  const taskName = name;
  let completed = false;

  const getTaskName = () => taskName;
  const setTaskName = (name) => (taskName = name);
  const isCompleted = () => completed;
  const toggleCompleted = () => (completed = !completed);

  return { setTaskName, getTaskName, isCompleted, toggleCompleted };
};

export default todoFactory;
