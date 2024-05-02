const todoFactory = (name, desc, date) => {
  const taskName = name;
  const description = desc;
  let completed = false;
  let currentPriority = "";
  const datePosted = new Date();
  let dueDate = new Date(date.year, date.month, date.day);

  const PRIORITY_ENUM = Object.freeze({
    LOW: "low",
    MED: "medium",
    HIGH: "high",
  });

  const getTaskName = () => taskName;
  const setTaskName = (name) => (taskName = name);
  const getDescription = () => description;
  const setDescription = (desc) => (description = desc);
  const isCompleted = () => completed;
  const toggleCompleted = () => (completed = !completed);
  const getCurrentPriority = () => currentPriority;
  const setCurrentPriority = (priority) => (currentPriority = PRIORITY_ENUM[priority]);
  const getDatePosted = () => datePosted;
  const getDueDate = () => dueDate;
  const setDueDate = (date) => (dueDate = date);

  return {
    setTaskName,
    getTaskName,
    getDescription,
    setDescription,
    isCompleted,
    toggleCompleted,
    getCurrentPriority,
    setCurrentPriority,
    getDatePosted,
    getDueDate,
    setDueDate,
  };
};

export default todoFactory;
