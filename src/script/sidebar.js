// All sidebar groups
const buildAllGroups = groupArray => {
  const groupList = document.createElement('ul');
  groupList.className = 'list-unstyled ps-0';
  
  groupArray.forEach(groupObj => {
    groupList.appendChild(buildGroup(groupObj));
  });

  return groupList;
}

// Individual sidebar groups
const buildGroup = groupObj => {
  const group = document.createElement('li'),
        collapseDiv = document.createElement('div');
  
  collapseDiv.className = 'collapse show';
  collapseDiv.id = `${groupObj.name.replace(/\s+/g, '-').toLowerCase()}-collapse`;
  if (groupObj.lists.length > 0) {
    collapseDiv.appendChild(buildGroupLists(groupObj.lists));
  }

  group.className = 'mb-1 position-relative';
  group.appendChild(buildGroupHeader(groupObj));
  group.appendChild(collapseDiv);
  group.appendChild(dropdownButton());

  return group;
}

const buildGroupHeader = group => {
  const groupHeader = document.createElement('button'),
        icon = document.createElement('i');

  icon.className = 'bi bi-bookmark-fill me-2';
  icon.style.color = group.color;

  groupHeader.className = 'btn btn-toggle align-items-center rounded collapsed';
  groupHeader.setAttribute('data-bs-toggle', 'collapse');
  groupHeader.setAttribute('data-bs-target', `#${group.name.replace(/\s+/g, '-').toLowerCase()}-collapse`);
  groupHeader.appendChild(icon);
  groupHeader.innerHTML += group.name;

  return groupHeader;
}

const buildGroupLists = groupLists => {
  const htmlList = document.createElement('ul');
  htmlList.className = 'btn-toggle-nav list-unstyled fw-normal pb-1 small';

  groupLists.forEach(list => {
    const item = document.createElement('li'),
          link = document.createElement('a');
    
    link.className = 'sidebar-link primary-color rounded';
    link.textContent = list.title;

    item.appendChild(link);

    htmlList.appendChild(item);
  });

  return htmlList;
}

// Dropdown button
const dropdownButton = () => {
  const div = document.createElement('div'),
        button = document.createElement('a'),
        icon = document.createElement('i');

  icon.className = 'bi bi-three-dots fs-6 text-secondary';

  button.className = 'edit-button';
  button.setAttribute('data-bs-toggle', 'dropdown');
  button.setAttribute('role', 'button');
  button.appendChild(icon);

  div.className = 'dropdown pt-1';
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

  link.className = `${name.toLowerCase()}-group dropdown-item`;
  link.textContent = name;

  item.appendChild(link);

  return item;
}


// Add new group button
const buildNewGroupBtn = () => {
  const btnDiv = document.createElement('div'),
        button = document.createElement('button'),
        newIcon = document.createElement('i');
  
  newIcon.className = 'bi bi-bookmark-plus-fill me-2';

  button.id = 'new-group';
  button.className = 'btn align-items-center rounded';
  button.appendChild(newIcon);
  button.innerHTML += 'New Group';

  btnDiv.className = 'border-top mb-1 mt-3';
  btnDiv.appendChild(button);

  return btnDiv;
}

// Completed sidebar
const sidebar = groups => {
  const side = document.createElement('div');
  side.className = 'sidebar flex-shrink-0 border-end p-3 bg-white';
  side.appendChild(buildAllGroups(groups));
  side.appendChild(buildNewGroupBtn());

  return side;
}

export default sidebar;