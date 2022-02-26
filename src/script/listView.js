// Title
const buildTitle = (title, priority) => {
  const container = document.createElement('div'),
        heading = document.createElement('h1'),
        icon = document.createElement('i');

  icon.className = `bi bi-thermometer-${priority} h4 primary-color`;

  heading.className = 'h2 me-2';
  heading.textContent = title;

  container.className = 'd-flex flex-row align-items-center';
  container.appendChild(heading);
  container.appendChild(icon);

  return container;
}

// Due Date
const buildDueDate = (date) => {
  const small = document.createElement('small');
  small.textContent = `Due: ${date}`;

  return small;
}

// Description
const buildDescription = (description) => {
  const paragraph = document.createElement('p');
  paragraph.className = 'font-weight-light pt-3 ';
  paragraph.textContent = description;

  return paragraph;
}

// Todo list
const buildList = (todo) => {
  const container = document.createElement('div');

  container.appendChild(buildListHeader());
  container.appendChild(buildListForm(todo));

  return container;
}

const buildListForm = (todo) => {
  const form = document.createElement('form');

  todo.forEach((task, index) => {
    const checkboxDiv = document.createElement('div'),
          input = document.createElement('input'),
          label = document.createElement('label');

    input.id = `check${index}`;
    input.className = 'form-check-input';
    input.type = 'checkbox';

    label.className = 'form-check-label';
    label.setAttribute('for', `check${index}`);
    label.textContent = task;
    
    checkboxDiv.className = 'form-check';
    checkboxDiv.append(input);
    checkboxDiv.append(label);

    form.appendChild(checkboxDiv);
  });
  
  form.id = 'todo-form';
  form.appendChild(newTodoLink());

  return form;
}

const newTodoLink = () => {
  const link = document.createElement('a');
  link.id = 'new-todo';
  link.className = 'primary-color d-block mt-2';
  link.textContent = '+ Add new todo';

  return link;
}

const newTodoInput = () => {
  const div = document.createElement('div'),
        input = document.createElement('input'),
        button = document.createElement('button');
  
  input.className = 'form-control';
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', 'Book flights');

  button.id = 'submit-todo';
  button.className = 'btn btn-outline-secondary';
  button.textContent = 'Add';
  button.setAttribute('type', 'button');

  div.classList = 'input-group mt-2';
  div.appendChild(input);
  div.appendChild(button);

  return div;
}

const buildListHeader = () => {
  const header = document.createElement('h2');
  header.classList = 'h5 border-bottom pb-1 pt-2';
  header.textContent = 'TO DO';

  return header;
}

// Dropdown button
const dropdownButton = () => {
  const div = document.createElement('div'),
        button = document.createElement('a'),
        icon = document.createElement('i');

  icon.className = 'bi bi-three-dots h4 text-secondary';

  button.id = 'dropdownMenuLink';
  button.className = 'edit-button';
  button.setAttribute('data-bs-toggle', 'dropdown');
  button.setAttribute('role', 'button');
  button.appendChild(icon);

  div.className = 'dropdown';
  div.appendChild(button);
  div.appendChild(menuLinks());

  return div;
}

const menuLinks = () => {
  const list = document.createElement('ul');
  list.className = 'dropdown-menu';
  list.appendChild(buildMenuLink('Edit'));
  list.appendChild(buildMenuLink('Delete'));

  return list;      
}

const buildMenuLink = (name) => {
  const item = document.createElement('li'),
        link = document.createElement('a');

  link.className = 'dropdown-item';
  link.textContent = name;

  item.appendChild(link);

  return item;
}

// Completed display
const listView = list => {
  const container = document.createElement('div');
  
  container.className = 'container-fluid position-relative m-5';
  container.appendChild(buildTitle(list.title, list.priority));
  container.appendChild(buildDueDate(list.date));
  container.appendChild(buildDescription(list.description));
  container.appendChild(buildList(list.todo));
  container.appendChild(dropdownButton());

  return container;
}

export { listView, newTodoInput };