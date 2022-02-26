// All sidebar groups
const buildAllGroups = (groupArray) => {
  const groupList = document.createElement('ul');
  groupList.className = 'list-unstyled ps-0';
  
  groupArray.forEach(groupObj => {
    groupList.appendChild(buildGroup(groupObj));
  });

  return groupList;
}

// Individual sidebar groups
const buildGroup = (groupObj) => {
  const group = document.createElement('li'),
        collapseDiv = document.createElement('div');
  
  collapseDiv.className = 'collapse show';
  collapseDiv.id = `${groupObj.name.toLowerCase()}-collapse`;
  collapseDiv.appendChild(buildGroupLists(groupObj.lists));

  group.className = 'mb-1';
  group.appendChild(buildGroupHeader(groupObj.name));
  group.appendChild(collapseDiv);

  return group;
}

const buildGroupHeader = (groupTitle) => {
  const groupHeader = document.createElement('button'),
        icon = document.createElement('i');

  icon.className = 'bi bi-bookmark-fill';

  groupHeader.className = 'btn btn-toggle align-items-center rounded collapsed';
  groupHeader.setAttribute('data-bs-toggle', 'collapse');
  groupHeader.setAttribute('data-bs-target', `#${groupTitle.toLowerCase()}-collapse`);
  groupHeader.appendChild(icon);
  groupHeader.innerHTML += ` ${groupTitle}`;

  return groupHeader;
}

const buildGroupLists = (groupLists) => {
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

// Add new group button
const buildNewGroupBtn = () => {
  const btnDiv = document.createElement('div'),
        button = document.createElement('button'),
        icon = document.createElement('i');
  
  icon.className = 'bi bi-bookmark-plus-fill';

  button.id = 'new-group';
  button.className = 'btn align-items-center rounded';
  button.appendChild(icon);
  button.innerHTML += ' New Group';

  btnDiv.className = 'mb-1 border-top my-3';
  btnDiv.appendChild(button);

  return btnDiv;
}

// Completed sidebar
const sidebar = groups => {
  const defaultGroup = [{title: 'All', lists: ['My First List']}],
        side = document.createElement('div');

  side.className = 'sidebar flex-shrink-0 border-end p-3 bg-white';
  side.appendChild(buildAllGroups(groups));
  side.appendChild(buildNewGroupBtn());

  return side;
}

export default sidebar;