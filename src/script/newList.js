/* 
<div id="bookModal" class="modal">
    <div class="modal-content">
      <form id="book-form">
        <div class="row mb-3">
          <label for="title" class="col-sm-2 col-form-label">Title</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="title">
          </div>
        </div>

        <div class="row mb-3">
          <label for="author" class="col-sm-2 col-form-label">Author</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="author">
          </div>
        </div>

        <div class="row mb-3">
          <label for="pages" class="col-sm-2 col-form-label">Pages</label>
          <div class="col-sm-10">
            <input type="number" class="form-control" id="pages">
          </div>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="true" id="read">
          <label class="form-check-label" for="read">
            Have you already read this book?
          </label>
        </div>
        
        <div class="form-group row">
          <div class="col-sm-10">
            <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
            <button type="submit" class="btn btn-info" onclick="closeModal()">Add Book</button>
          </div>
        </div>
      </form>
    </div>
  </div>
*/

const textInput = (name, placeholder) => {
  const container = document.createElement('div'),
        label = document.createElement('label'),
        inputContainer = document.createElement('div'),
        input = document.createElement('input');

  input.className = 'form-control';
  input.id = name;
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', placeholder);

  inputContainer.className = 'col-sm-10';
  inputContainer.appendChild(input);

  label.className = 'col-sm-2 col-form-label';
  label.setAttribute('for', name);
  label.textContent = name;

  container.className = 'row mb-3';
  container.appendChild(label);
  container.appendChild(inputContainer);

  return container;
}

const buildListForm = () => {
  const form = document.createElement('form'),
        modalBody = document.createElement('div');

  form.appendChild(textInput('Title', 'Your title'));
  form.appendChild(textInput('Title', 'Your title'));

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