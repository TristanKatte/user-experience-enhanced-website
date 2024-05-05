// console.log('Script is running');
const modal = document.querySelector('#favDialog');
const openModal = document.querySelector('.open-button');
const closeModal = document.querySelector('.close-button');

openModal.addEventListener('click', () => {
  modal.showModal();
})

openModal.addEventListener('click', () => {
  Modal.close();
});