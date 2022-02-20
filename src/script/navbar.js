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

const navbarMenu = () => {
  const button = document.createElement('button'),
        span = document.createElement('span');

  span.className = 'navbar-toggler-icon';

  button.className = 'navbar-toggler';
  button.type = 'button';
  button.setAttribute('data-bs-toggle', 'collapse');
  button.appendChild(span);

  return button;
}

const navbarLinks = () => {
  const linkDiv = document.createElement('div'),
        list = document.createElement('ul'),
        item = document.createElement('li'),
        link = document.createElement('a'),
        icon = document.createElement('i');

  icon.className = 'bi bi-plus-lg';

  link.className = 'nav-link active';
  link.appendChild(icon);
  link.innerHTML += ' New List';

  item.className = 'nav-item';
  item.appendChild(link);

  list.className = 'navbar-nav ms-auto mb-2 mb-md-0';
  list.appendChild(item);

  linkDiv.className = 'collapse navbar-collapse';
  linkDiv.appendChild(list);

  return linkDiv;
}

const navbar = () => {
  const container = document.createElement('div'),
        navHeader = document.createElement('nav');

  container.className = 'container-fluid';
  navHeader.className = 'navbar navbar-expand-md navbar-light bg-light';

  container.appendChild(navbarBrand());
  container.appendChild(navbarMenu());
  container.appendChild(navbarLinks());
  navHeader.appendChild(container);
  
  return navHeader;
}

export default navbar;