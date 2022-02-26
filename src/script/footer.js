const buildFooterText = () => {
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
  footer.appendChild(buildFooterText());

  container.className = 'footer px-5 py-2 bg-light';
  container.appendChild(footer);

  return container;
}

export default footer;