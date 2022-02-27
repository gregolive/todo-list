import { format } from 'date-fns';
import { buildGroupsFromLocalStorage } from './objectControl.js'

const titleInput = list => {
  const container = document.createElement('div'),
        label = document.createElement('label'),
        inputContainer = document.createElement('div'),
        input = document.createElement('input');

  input.className = 'form-control';
  input.id = 'list-title';
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', 'Summer Vacation');
  if (typeof list !== 'undefined') {
    input.value = list.title;
  }

  inputContainer.className = 'col-sm-10';
  inputContainer.appendChild(input);

  label.className = 'col-sm-2 col-form-label';
  label.setAttribute('for', 'list-title');
  label.textContent = 'Title';

  container.className = 'row mb-3';
  container.appendChild(label);
  container.appendChild(inputContainer);

  return container;
}

const descriptionInput = list => {
  const container = document.createElement('div'),
        label = document.createElement('label'),
        inputContainer = document.createElement('div'),
        input = document.createElement('textarea');

  input.className = 'form-control';
  input.id = 'list-description';
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', 'This trip is going to be the best!');
  if (typeof list !== 'undefined') {
    input.value = list.description;
  }

  inputContainer.className = 'col-sm-10';
  inputContainer.appendChild(input);

  label.className = 'col-sm-2 col-form-label';
  label.setAttribute('for', 'list-description');
  label.textContent = 'Description';

  container.className = 'row mb-3';
  container.appendChild(label);
  container.appendChild(inputContainer);

  return container;
}

const dateInput = list => {
  const container = document.createElement('div'),
        label = document.createElement('label'),
        inputContainer = document.createElement('div'),
        input = document.createElement('input');

  input.className = 'form-control';
  input.id = 'due-date';
  input.setAttribute('type', 'date');
  if (typeof list !== 'undefined') {
    input.value = format(Date.parse(list.date), 'yyyy-MM-dd');
  }

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

const priorityInput = list => {
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
    if (typeof list !== 'undefined' && priority === list.priority) {
      input.checked = true;
    }

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

const groupSelect = list => {
  const container = document.createElement('div'),
        label = document.createElement('label'),
        inputContainer = document.createElement('div'),
        select = document.createElement('select');

  select.className = 'form-select';
  select.id = 'group';

  buildGroupsFromLocalStorage().forEach(group => {
    const option = document.createElement('option');
    option.setAttribute('value', group.name);
    option.textContent = group.name;
    if (typeof list !== 'undefined' && group.name === list.group) {
      option.setAttribute('selected', 'selected');
    }
    select.appendChild(option);
  })

  inputContainer.className = 'col-sm-10';
  inputContainer.appendChild(select);

  label.className = 'col-sm-2 col-form-label';
  label.setAttribute('for', 'due-date');
  label.textContent = 'Group';

  container.className = 'row mb-3';
  container.appendChild(label);
  container.appendChild(inputContainer);

  return container;
}

const formBtns = list => {
  const div = document.createElement('div'),
        cancelBtn = document.createElement('button'),
        submitBtn = document.createElement('button');

  cancelBtn.id = 'cancel-list';
  cancelBtn.className = 'btn btn-secondary';
  cancelBtn.textContent = 'Cancel';
  cancelBtn.setAttribute('type', 'button');

  submitBtn.id = 'submit-list';
  submitBtn.className = 'btn btn-success btn-submit-list';
  submitBtn.textContent = (typeof list === 'undefined') ? 'Create List' : 'Update List';
  submitBtn.setAttribute('type', 'submit');

  div.className = 'col-sm-10 d-flex btn-row';
  div.appendChild(cancelBtn);
  div.appendChild(submitBtn);

  return div;
}

const buildListForm = list => {
  const form = document.createElement('form'),
        modalBody = document.createElement('div');

  form.appendChild(titleInput(list));
  form.appendChild(descriptionInput(list));
  form.appendChild(priorityInput(list));
  form.appendChild(dateInput(list));
  form.appendChild(groupSelect(list));
  form.appendChild(formBtns(list));

  modalBody.className = 'modal-body';
  modalBody.appendChild(form);

  return modalBody;
}

const buildModalHeader = list => {
  const modalHeader = document.createElement('div'),
        heading = document.createElement('h5'),
        button = document.createElement('button');

  heading.className = 'modal-title';
  heading.textContent = (typeof list === 'undefined') ? 'New List' : 'Edit List';

  button.id = 'close-list';
  button.className = 'btn-close';
  button.setAttribute('type', 'button');

  modalHeader.className = 'modal-header';
  modalHeader.appendChild(heading);
  modalHeader.appendChild(button);

  return modalHeader;
}

const listModal = list => {
  const modal = document.createElement('div'),
        modalContent = document.createElement('div');
  
  modalContent.className = 'modal-content';
  modalContent.appendChild(buildModalHeader(list));
  modalContent.appendChild(buildListForm(list));

  modal.id = 'list-modal';
  modal.className = 'modal show';
  modal.appendChild(modalContent);

  return modal;
}

export default listModal;