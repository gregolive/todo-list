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

  return form;
}

const buildListHeader = () => {
  const header = document.createElement('h2');
  header.classList = 'h5 border-bottom pb-1 pt-2';
  header.textContent = 'TO DO';

  return header;
}

// Completed display
const listUI = () => {
  const example = {
                    title: 'My First List', 
                    priority: 'low', 
                    description: 'This is my first todo list on listify. How exciting!',
                    date: 'March 3, 2022',
                    todo: ['Create a new todo list', 'Share listify with my friends', 'Profit']
                  },
        container = document.createElement('div');
  
  container.className = 'container-fluid position-relative m-5';
  container.appendChild(buildTitle(example.title, example.priority));
  container.appendChild(buildDueDate(example.date));
  container.appendChild(buildDescription(example.description));
  container.appendChild(buildList(example.todo));

  return container;
}

export default listUI;