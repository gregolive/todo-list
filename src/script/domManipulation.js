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
  document.querySelector('#new-list-modal').addEventListener('click', closeModal);
  document.querySelector('.btn-close').addEventListener('click', closeModal);
}

export default addEventListeners;