const modalButton = document.querySelector('.jsModalButton')
const modalCloseButton = document.querySelector('.jsModalClose')

const MODAL_CLOSE_CLASS = 'modal-is-open'

modalButton.addEventListener('click', () => {
  document.body.classList.add(MODAL_CLOSE_CLASS)
})

modalCloseButton.addEventListener('click', () => {
  document.body.classList.remove(MODAL_CLOSE_CLASS)
})