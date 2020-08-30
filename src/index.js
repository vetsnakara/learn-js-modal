const modalButton = document.querySelector('.jsModalButton')
const modalCloseButton = document.querySelector('.jsModalClose')
const modalOverlay = document.querySelector('.jsModalOverlay')

const MODAL_CLOSE_CLASS = 'modal-is-open'

// open modal
modalButton.addEventListener('click', () => {
  document.body.classList.add(MODAL_CLOSE_CLASS)
})

// close modal (click on close button)
modalCloseButton.addEventListener('click', () => {
  document.body.classList.remove(MODAL_CLOSE_CLASS)
})

// close modal (click outside)
modalOverlay.addEventListener('click', e => {
  if (!e.target.closest('.modal')) {
    document.body.classList.remove(MODAL_CLOSE_CLASS)
  }
})