const quantHaircutLeftLabel = document.getElementById('quant-haircut-left')
const progress = document.querySelector('#bonus-progress-bar .progress-bar-gradient')
const quantHaircutLabel = document.getElementById('count-haircuts')

export function setDataToProgressBar({quantHaircutLeft, quantHaircut, quantHaircutNeeded}) {
  quantHaircutLeftLabel.textContent = quantHaircutLeft
  quantHaircutLabel.textContent = `${quantHaircut} de ${quantHaircutNeeded}`

  const progressPercent = (quantHaircut * 100) / quantHaircutNeeded

  progress.style.width = `${progressPercent}%`
}