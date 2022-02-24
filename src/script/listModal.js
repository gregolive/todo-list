const textInput = (type, name, placeholder) => {
  const container = document.createElement('div'),
        label = document.createElement('label'),
        inputContainer = document.createElement('div'),
        input = document.createElement(type);

  input.className = 'form-control';
  input.id = name.toLowerCase();
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', placeholder);

  inputContainer.className = 'col-sm-10';
  inputContainer.appendChild(input);

  label.className = 'col-sm-2 col-form-label';
  label.setAttribute('for', name.toLowerCase());
  label.textContent = name;

  container.className = 'row mb-3';
  container.appendChild(label);
  container.appendChild(inputContainer);

  return container;
}

const dateInput = () => {
  const container = document.createElement('div'),
        label = document.createElement('label'),
        inputContainer = document.createElement('div'),
        input = document.createElement('input');

  input.className = 'form-control';
  input.id = 'due-date';
  input.setAttribute('type', 'date');

  inputContainer.className = 'col-sm-10';
  inputContainer.appendChild(input);

  label.className = 'col-sm-2 col-form-label';
  label.setAttribute('for', 'due-date');
  label.textContent = 'Due Date';

  container.className = 'row mb-3';
  container.appendChild(label);
  container.appendChild(inputContainer);

  return container;
}

const priorityInput = () => {
  const container = document.createElement('div'),
        label = document.createElement('label'),
        options = ['low', 'half', 'high'];
  
  label.className = 'col-sm-2 col-form-label priority-label';
  label.textContent = 'Priority';
  
  container.className = 'priority-row mb-3';
  container.appendChild(label);

  options.forEach(priority => {
    const div = document.createElement('div'),
          input = document.createElement('input'),
          btnLabel = document.createElement('label'),
          icon = document.createElement('i');

    input.id = priority;
    input.className = 'btn-check';
    input.setAttribute('type', 'radio');
    input.setAttribute('value', priority);
    input.setAttribute('name', 'priority');

    icon.className = `bi bi-thermometer-${priority} h4`;

    btnLabel.className = 'btn btn-outline-success';
    btnLabel.setAttribute('for', priority);
    btnLabel.appendChild(icon);

    div.className = 'form-check form-check-inline';
    div.appendChild(input);
    div.appendChild(btnLabel);

    container.appendChild(div);
  });

  return container;
}

const formBtns = () => {
  const div = document.createElement('div'),
        cancelBtn = document.createElement('button'),
        submitBtn = document.createElement('button');

  cancelBtn.className = 'btn btn-secondary btn-cancel';
  cancelBtn.textContent = 'Cancel';
  cancelBtn.setAttribute('type', 'button');
  submitBtn.className = 'btn btn-success btn-submit-list';
  submitBtn.textContent = 'Create List';
  submitBtn.setAttribute('type', 'submit');

  div.className = 'col-sm-10 d-flex btn-row';
  div.appendChild(cancelBtn);
  div.appendChild(submitBtn);

  return div;
}

const buildListForm = () => {
  const form = document.createElement('form'),
        modalBody = document.createElement('div');

  form.appendChild(textInput('input', 'Title', 'Summer Vacation'));
  form.appendChild(textInput('textarea', 'Description', 'This trip is going to be the best!'));
  form.appendChild(priorityInput());
  form.appendChild(dateInput());
  form.appendChild(formBtns());

  modalBody.className = 'modal-body';
  modalBody.appendChild(form);

  return modalBody;
}

const buildModalHeader = () => {
  const modalHeader = document.createElement('div'),
        heading = document.createElement('h5'),
        button = document.createElement('button');

  heading.className = 'modal-title';
  heading.textContent = 'New List';

  button.className = 'btn-close';
  button.setAttribute('type', 'button');

  modalHeader.className = 'modal-header';
  modalHeader.appendChild(heading);
  modalHeader.appendChild(button);

  return modalHeader;
}

const newListModal = () => {
  const modal = document.createElement('div'),
        modalContent = document.createElement('div');
  
  modalContent.className = 'modal-content';
  modalContent.appendChild(buildModalHeader());
  modalContent.appendChild(buildListForm());

  modal.id = 'new-list-modal';
  modal.className = 'modal';
  modal.appendChild(modalContent);

  return modal;
}

export default newListModal;