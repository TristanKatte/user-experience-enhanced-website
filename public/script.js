// console.log('Script is running');
const dialog = document.querySelector('#favDialog');
const openModal = document.querySelector('.open-button');
const closeModal = document.querySelector('.close-button');
console.log(dialog);
console.log('hallo');

openModal.addEventListener('click', () => {
  dialog.showModal();
})

closeModal.addEventListener('click', () => {
  dialog.close();
})