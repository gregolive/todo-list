const openModal = () => {
  const modal = document.getElementById('new-list-modal');
  modal.classList.add('show');
}

const closeModal = () => {
  const modal = document.getElementById('new-list-modal');
  modal.classList.remove('show');
}

const addEventListeners = () => {
  document.querySelector('.new-list').addEventListener('click', openModal);
  document.querySelector('.btn-close').addEventListener('click', closeModal);
  document.querySelector('.btn-cancel').addEventListener('click', closeModal);
}

export default addEventListeners;