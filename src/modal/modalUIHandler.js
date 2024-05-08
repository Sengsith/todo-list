import PRIORITY_ENUM from "../PRIORITY_ENUM";

const modalUIHandler = (() => {
  const projectDialog = document.querySelector("#project-dialog");

  // type: tells us whether it's project or todo element
  // action: open or close modal
  const createModalButton = (type, action) => {
    const button = document.createElement("button");
    button.classList.add(`modal-${type}-${action}`);
    button.textContent = action === "open" ? `Add new ${type}` : "Cancel";
    return button;
  };

  const createDialog = (type) => {
    const dialog = document.createElement("dialog");
    dialog.dataset[type] = "";
    dialog.id = `dialog-${type}`;
    dialog.appendChild(createForm(type));
    return dialog;
  };

  const createForm = (type) => {
    // Form
    const form = document.createElement("form");
    form.id = `form-${type}`;
    form.method = "dialog";

    // Name
    const NAME = "name";
    form.appendChild(createLabel(type, NAME));
    form.appendChild(createInput(type, NAME, "text"));

    // Description
    const DESCRIPTION = "description";
    form.appendChild(createLabel(type, DESCRIPTION));
    form.appendChild(createInput(type, DESCRIPTION, "text"));

    // Date
    const DATE = "date";
    form.appendChild(createLabel(type, DATE));
    form.appendChild(createInput(type, DATE, "date"));

    // Priority
    const PRIORITY = "priority";
    form.appendChild(createLabel(type, PRIORITY));
    form.appendChild(createSelect(type, PRIORITY));

    // Submit
    form.appendChild(createSubmitButton(type));

    // Close Modal
    form.appendChild(createModalButton(type, "close"));

    return form;
  };

  // descriptor: what the label is used for
  const createLabel = (type, descriptor) => {
    const label = document.createElement("label");
    label.htmlFor = `${descriptor}-${type}`;
    label.textContent = `${type} ${descriptor}`;
    return label;
  };

  // inputType: text / number / date / etc...
  const createInput = (type, descriptor, inputType) => {
    const input = document.createElement("input");
    input.type = inputType;
    input.name = `${descriptor}-${type}`;
    input.id = `${descriptor}-$${type}`;
    input.autocomplete = "off";
    return input;
  };

  const createSelect = (type, descriptor) => {
    const select = document.createElement("select");
    select.name = `${descriptor}-${type}`;
    select.id = `${descriptor}-${type}`;
    for (const [key, value] of Object.entries(PRIORITY_ENUM)) {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      select.appendChild(option);
    }
    return select;
  };

  const createSubmitButton = (type) => {
    const button = document.createElement("button");
    button.classList.add(`submit-${type}`);
    button.textContent = `Add ${type}`;
    return button;
  };

  const createProjectDialog = () => {
    const PROJECT = "project";
    projectDialog.appendChild(createModalButton(PROJECT, "open"));
    projectDialog.appendChild(createDialog(PROJECT));
  };

  const createTodoDialog = (parentNode) => {
    const TODO = "todo";
    parentNode.appendChild(createModalButton(TODO, "open"));
    parentNode.appendChild(createDialog(TODO));
  };

  createProjectDialog();

  return { createTodoDialog };
})();

export default modalUIHandler;
