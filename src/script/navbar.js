import logo from '../img/logo.png';

const navbarBrand = () => {
  const link = document.createElement('a'),
        img = document.createElement('img');
  
  img.src = logo;
  img.alt = 'listify logo';
  img.className = 'navbar-logo';

  link.className = 'navbar-brand mb-0 h1';
  link.href = '#';
  link.appendChild(img);
  link.innerHTML += ' listify';

  return link;
}

const newListBtn = () => {
  const list = document.createElement('ul'),
        item = document.createElement('li'),
        link = document.createElement('a'),
        icon = document.createElement('i');

  icon.className = 'bi bi-plus-lg';

  link.id = 'new-list';
  link.className = 'new-list nav-link active';
  link.appendChild(icon);
  link.innerHTML += ' New List';

  item.className = 'nav-item';
  item.appendChild(link);

  list.className = 'navbar-nav ms-auto mb-md-0';
  list.appendChild(item);

  return list;
}

const navbar = () => {
  const container = document.createElement('div'),
        nav = document.createElement('nav');

  container.className = 'container-fluid';
  nav.className = 'navbar navbar-expand-md navbar-light bg-green';

  container.appendChild(navbarBrand());
  container.appendChild(newListBtn());
  nav.appendChild(container);
  
  return nav;
}

export default navbar;