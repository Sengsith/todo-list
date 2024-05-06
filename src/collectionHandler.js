// An array factory that will hold either todos or projects
// They both function the exact same way,
// there will only be ONE projectsHandler, but EACH projectsHandler has ONE todosHandler

const collectionHandler = () => {
  // Array of todos, or projects
  const collection = [];

  const getCollection = () => collection;

  const addItem = (item) => collection.push(item);

  const removeItem = (index) => collection.splice(index, 1);

  return { getCollection, addItem, removeItem };
};

export default collectionHandler;
