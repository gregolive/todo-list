const titleInput = () => {
  const container = document.createElement('div'),
        label = document.createElement('label'),
        inputContainer = document.createElement('div'),
        input = document.createElement('input');

  input.className = 'form-control';
  input.id = 'group-name';
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', 'Vacation Planning');

  inputContainer.className = 'col-sm-10';
  inputContainer.appendChild(input);

  label.className = 'col-sm-2 col-form-label';
  label.setAttribute('for', 'group-name');
  label.textContent = 'Name';

  container.className = 'row mb-3';
  container.appendChild(label);
  container.appendChild(inputContainer);

  return container;
}

const colorInput = () => {
  const container = document.createElement('div'),
        label = document.createElement('label'),
        inputContainer = document.createElement('div'),
        input = document.createElement('input');

  input.className = 'form-control form-control-color';
  input.id = 'color';
  input.setAttribute('type', 'color');

  inputContainer.className = 'col-sm-10';
  inputContainer.appendChild(input);

  label.className = 'col-sm-2 col-form-label';
  label.setAttribute('for', 'color');
  label.textContent = 'Color';

  container.className = 'row mb-3';
  container.appendChild(label);
  container.appendChild(inputContainer);

  return container;
}

const formBtns = () => {
  const div = document.createElement('div'),
        cancelBtn = document.createElement('button'),
        submitBtn = document.createElement('button');

  cancelBtn.id = 'cancel-group';
  cancelBtn.className = 'btn btn-secondary';
  cancelBtn.textContent = 'Cancel';
  cancelBtn.setAttribute('type', 'button');

  submitBtn.id = 'submit-group';
  submitBtn.className = 'btn btn-success btn-submit-group';
  submitBtn.textContent = 'Create Group';
  submitBtn.setAttribute('type', 'submit');

  div.className = 'col-sm-10 d-flex btn-row';
  div.appendChild(cancelBtn);
  div.appendChild(submitBtn);

  return div;
}

const buildGroupForm = () => {
  const form = document.createElement('form'),
        modalBody = document.createElement('div');

  form.appendChild(titleInput());
  form.appendChild(colorInput());
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
  heading.textContent = 'New Group';

  button.id = 'close-group';
  button.className = 'btn-close';
  button.setAttribute('type', 'button');

  modalHeader.className = 'modal-header';
  modalHeader.appendChild(heading);
  modalHeader.appendChild(button);

  return modalHeader;
}

const newGroupModal = () => {
  const modal = document.createElement('div'),
        modalContent = document.createElement('div');
  
  modalContent.className = 'modal-content';
  modalContent.appendChild(buildModalHeader());
  modalContent.appendChild(buildGroupForm());

  modal.id = 'new-group-modal';
  modal.className = 'modal';
  modal.appendChild(modalContent);

  return modal;
}

export default newGroupModal;