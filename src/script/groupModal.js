const titleInput = group => {
  const container = document.createElement('div'),
        label = document.createElement('label'),
        inputContainer = document.createElement('div'),
        input = document.createElement('input');

  input.className = 'form-control';
  input.id = 'group-name';
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', 'Vacation Planning');
  if (typeof group !== 'undefined') {
    input.value = group.name;
  }

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

const colorInput = group => {
  const container = document.createElement('div'),
        label = document.createElement('label'),
        inputContainer = document.createElement('div'),
        input = document.createElement('input');

  input.className = 'form-control form-control-color';
  input.id = 'color';
  input.setAttribute('type', 'color');
  if (typeof group !== 'undefined') {
    input.value = group.color;
  }

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

const formBtns = group => {
  const div = document.createElement('div'),
        cancelBtn = document.createElement('button'),
        submitBtn = document.createElement('button');

  cancelBtn.id = 'cancel-group';
  cancelBtn.className = 'btn btn-secondary';
  cancelBtn.textContent = 'Cancel';
  cancelBtn.setAttribute('type', 'button');

  if (typeof group === 'undefined') {
    submitBtn.id = 'submit-group';
    submitBtn.textContent = 'Create List';
  } else {
    submitBtn.id = 'update-group';
    submitBtn.textContent = 'Update List';
  }
  submitBtn.className = 'btn btn-success btn-submit-group';
  submitBtn.setAttribute('type', 'submit');

  div.className = 'col-sm-10 d-flex btn-row';
  div.appendChild(cancelBtn);
  div.appendChild(submitBtn);

  return div;
}

const buildGroupForm = group => {
  const form = document.createElement('form'),
        modalBody = document.createElement('div');

  form.appendChild(titleInput(group));
  form.appendChild(colorInput(group));
  form.appendChild(formBtns(group));

  modalBody.className = 'modal-body';
  modalBody.appendChild(form);

  return modalBody;
}

// Original group info (hidden)
const buildGroupName = group => {
  const text = document.createElement('p');
  text.className = 'group-info d-none'
  text.textContent = group.name;

  return text;
}

const buildModalHeader = group => {
  const modalHeader = document.createElement('div'),
        heading = document.createElement('h5'),
        button = document.createElement('button');

  heading.className = 'modal-title';
  heading.textContent = (typeof group === 'undefined') ? 'New Group' : 'Edit Group';

  button.id = 'close-group';
  button.className = 'btn-close';
  button.setAttribute('type', 'button');

  modalHeader.className = 'modal-header';
  modalHeader.appendChild(heading);
  modalHeader.appendChild(button);

  return modalHeader;
}

const groupModal = group => {
  const modal = document.createElement('div'),
        modalContent = document.createElement('div');
  
  modalContent.className = 'modal-content';
  modalContent.appendChild(buildModalHeader(group));
  modalContent.appendChild(buildGroupName(group));
  modalContent.appendChild(buildGroupForm(group));

  modal.id = 'group-modal';
  modal.className = 'modal show';
  modal.appendChild(modalContent);

  return modal;
}

export default groupModal;