import "./index.css";
import PRIORITY from "./PRIORITY_ENUM";
import Project from "./project/Project";
import collectionHandler from "./collectionHandler";
import "./modal/modalUIHandler";
import { format, add } from "date-fns";

const projectsHandler = collectionHandler();
const sampleProject = new Project(
  "Sample Project",
  "This is a sample project that has been created for you!",
  PRIORITY.LOW,
  format(add(new Date(), { months: 6 }), "MM/dd/yyyy")
);
projectsHandler.addItem(sampleProject);

console.log(projectsHandler.getCollection());

//  Project Modal Factory IIFE
//    projectName query
//    projectDesc query
//    dueDate query
//    priority query
//      add project to Project Collection
//      updateProjectsScreen() from Projects Collection UI

//  Todo Modal Factory
//    todoName query
//    todoDesc query
//    dueDate query
//    priority query
//      updateTodosScreen() from Todos Collection UI

//  PRIORTY_ENUM
//    low, med, high

//  Project Class Inherited from Todo
//    project name
//    project description
//    todosCollection
//    completed flag
//    date created
//    due date
//    priority
//      get/set project name
//      get/set project description
//      get todos array
//      get/set completed flag
//      add/remove todo from array
//      get date created
//      get/set due date
//      get/set priority

//  Projects Collection UI IIFE
//    reference to project collection
//      updateProjectsScreen() -> create elements based off project props and appends to document, also creates a todo modal

//  Todo Factory Class
//    todo name
//    todo description
//    completed flag
//    date created
//    due date
//    priority
//      get/set todo name
//      get/set todo description
//      get/set completed flag
//      get date created
//      get/set due date
//      get/set priority

//  Todo Collection UI
//    reference to todos array
//      updateTodosScreen()
