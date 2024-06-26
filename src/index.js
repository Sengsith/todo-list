import "./index.css";
import PRIORITY from "./PRIORITY_ENUM";
import Todo from "./todo/Todo";
import Project from "./project/Project";
import { format, add } from "date-fns";
import projectsHandler from "./project/projectsHandler";
import projectsUIHandler from "./project/projectsUIHandler";
import "./modal/modalHandler";
import "./modal/modalUIHandler";

const sampleProject = new Project(
  "Sample Project",
  "This is a sample project that has been created for you!",
  PRIORITY.LOW,
  format(add(new Date(), { months: 6 }), "MM/dd/yyyy")
);
projectsHandler.addProject(sampleProject);
console.log(projectsHandler.getProjects());
const sampleTodo = new Todo(
  "Sample Todo",
  "This is a sample todo that has been created for you!",
  PRIORITY.LOW,
  format(add(new Date(), { months: 6 }), "MM/dd/yyyy")
);
sampleProject.addTodo(sampleTodo);
projectsUIHandler.updateProjectsUI();

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
