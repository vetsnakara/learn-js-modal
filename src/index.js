import gsap, { Back } from 'gsap'

const modalButton = document.querySelector('.jsModalButton')
const modalCloseButton = document.querySelector('.jsModalClose')
const modalOverlay = document.querySelector('.jsModalOverlay')
const waveHand = document.querySelector('.wave-hand')

const MODAL_CLOSE_CLASS = 'modal-is-open'

const wave = () => {
  const tl = gsap.timeline()

  tl.from(waveHand, 0.5, {
    scale: 0.25,
    opacity: 0,
    ease: Back.easeOut.config(1.5)
  })

  tl.to(waveHand, 0.2, { rotation: '15deg' })
  tl.to(waveHand, 0.2, { rotation: '-15deg' })
  tl.to(waveHand, 0.2, { rotation: '15deg' })
  tl.to(waveHand, 0.2, { rotation: '-15deg' })
  tl.to(waveHand, 0.2, { rotation: '0deg' })
}

// open modal
modalButton.addEventListener('click', () => {
  document.body.classList.add(MODAL_CLOSE_CLASS)
  wave()
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