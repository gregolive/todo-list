const buildAllGroups = (groupArray) => {
  const groupList = document.createElement('ul');
  groupList.className = 'list-unstyled ps-0';

  groupArray.forEach(groupObj => {
    groupList.appendChild(buildGroup(groupObj));
  });

  return groupList;
}

const buildGroup = (groupObj) => {
  const group = document.createElement('li'),
        collapseDiv = document.createElement('div');
  
  collapseDiv.className = 'collapse show';
  collapseDiv.id = `${groupObj.title}-collapse`;
  collapseDiv.appendChild(buildGroupLists(groupObj.lists));

  group.className = 'mb-1';
  group.appendChild(buildGroupHeader(groupObj.title));
  group.appendChild(collapseDiv);

  return group;
}

const buildGroupHeader = (groupTitle) => {
  const groupHeader = document.createElement('button'),
        icon = document.createElement('i');

  icon.className = 'bi bi-bookmark-fill';

  groupHeader.className = 'btn btn-toggle align-items-center rounded collapsed';
  groupHeader.setAttribute('data-bs-toggle', 'collapse');
  groupHeader.setAttribute('data-bs-target', `#${groupTitle}-collapse`);
  groupHeader.appendChild(icon);
  groupHeader.innerHTML += ` ${groupTitle}`;

  return groupHeader;
}

const buildGroupLists = (groupLists) => {
  const htmlList = document.createElement('ul');
  htmlList.className = 'btn-toggle-nav list-unstyled fw-normal pb-1 small';
  
  groupLists.forEach(listName => {
    const item = document.createElement('li'),
          link = document.createElement('a');
    
    link.className = 'link-info rounded';
    link.textContent = listName;

    item.appendChild(link);

    htmlList.appendChild(item);
  });

  return htmlList;
}

/* 
<div class="sidebar flex-shrink-0 p-3 bg-white border-right" style="width: 280px;">
  <ul class="list-unstyled ps-0">
    <li class="mb-1">
      <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
        <i class="bi bi-bookmark-fill"></i>
        All
      </button>
      <div class="collapse show" id="home-collapse">
        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
          <li><a href="#" class="link-info rounded">My First List</a></li>
        </ul>
      </div>
    </li>
    <li class="border-top my-3"></li>
    <li class="mb-1">
      <button class="btn align-items-center rounded" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
        <i class="bi bi-bookmark-plus-fill"></i>
        New Group
      </button>
    </li>
  </ul>
</div>
*/

const sidebar = () => {
  const defaultGroup = [{title: 'All', lists: ['My First List']}],
        side = document.createElement('div');

  side.className = 'sidebar flex-shrink-0 p-3 bg-white border-right';
  side.appendChild(buildAllGroups(defaultGroup));

  return side;
}

export default sidebar;