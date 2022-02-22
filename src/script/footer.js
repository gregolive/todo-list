const buildFooterCopyright = () => {
  const container = document.createElement('div'),
        span = document.createElement('span'),
        link = document.createElement('a'),
        icon = document.createElement('i');

  icon.className = 'bi bi-github';

  link.className = 'text-muted fs-5 ms-2';
  link.href = 'https://github.com/gregolive';
  link.appendChild(icon);
  
  span.className = 'text-muted';
  span.textContent = '© gregolive';
  
  container.className = 'd-flex align-items-center';
  container.appendChild(span);
  container.appendChild(link);

  return container;
}

const footer = () => {
  const container = document.createElement('div'),
        footer = document.createElement('footer');
  
  footer.className = 'd-flex flex-wrap justify-content-center align-items-center';
  footer.appendChild(buildFooterCopyright());
  //footer.appendChild(buildFooterLinks());

  container.className = 'px-5 py-2 bg-light';
  container.appendChild(footer);

  return container;
}

/*
<div class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"/></svg>
      </a>
      <span class="text-muted">&copy; 2021 Company, Inc</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"/></svg></a></li>
      <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"/></svg></a></li>
      <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"/></svg></a></li>
    </ul>
  </footer>
</div>
*/

export default footer;