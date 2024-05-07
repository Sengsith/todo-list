import PRIORITY_ENUM from "../PRIORITY_ENUM";

const modalUIHandler = (() => {
  const content = document.querySelector("#content");

  // type: tells us whether it's project or todo element
  // action: open or close modal
  const createModalButton = (type, action) => {
    const button = document.createElement("button");
    button.classList.add(`modal-${type}-${action}`);
    button.textContent = action === "open" ? `Add new ${type}` : "Cancel";
    content.appendChild(button);
  };

  const createDialog = (type) => {
    const dialog = document.createElement("dialog");
    dialog.dataset[type] = "";
    dialog.id = `dialog-${type}`;
    content.appendChild(dialog);
    dialog.appendChild(createForm(type));
  };

  const createForm = (type) => {
    // Form
    const form = document.createElement("form");
    form.id = `form-${type}`;
    form.method = "dialog";

    // Name
    const NAME = "name";
    const nameLabel = createLabel(type, NAME);
    form.appendChild(nameLabel);
    const nameInput = createInput(type, NAME, "text");
    form.appendChild(nameInput);

    // Description
    const DESCRIPTION = "description";
    const descLabel = createLabel(type, DESCRIPTION);
    form.appendChild(descLabel);
    const descInput = createInput(type, DESCRIPTION, "text");
    form.appendChild(descInput);

    // Date
    const DATE = "date";
    const dateLabel = createLabel(type, DATE);
    form.appendChild(dateLabel);
    const dateInput = createInput(type, DATE, "date");
    form.appendChild(dateInput);

    // Priority
    const PRIORITY = "priority";
    const prioLabel = createLabel(type, PRIORITY);
    form.appendChild(prioLabel);
    const prioSelect = createSelect(type, PRIORITY);
    form.appendChild(prioSelect);
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

  //TODO: Create the submit and close-modal buttons for our form

  const createProjectDialog = () => {
    const PROJECT = "project";
    createModalButton(PROJECT, "open");
    createDialog(PROJECT);
  };

  createProjectDialog();
})();

export default modalUIHandler;
