import { format } from "date-fns";

class Todo {
  constructor(name, description, priority, dueDate) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
    this.dateCreated = format(new Date(), "MM/dd/yyyy");
  }

  getName = function () {
    return this.name;
  };
  setName = function (name) {
    this.name = name;
  };

  getDescription = function () {
    return this.description;
  };
  setDescription = function (desc) {
    this.description = desc;
  };

  isCompleted = function () {
    return this.completed;
  };
  toggleCompleted = function () {
    this.completed = !this.completed;
  };

  getDateCreated = function () {
    return this.dateCreated;
  };

  getDueDate = function () {
    return this.dueDate;
  };
  setDueDate = function (date) {
    this.dueDate = date;
  };

  getPriority = function () {
    return this.priority;
  };
  setPriority = function (prio) {
    this.priority = prio;
  };
}

export default Todo;
