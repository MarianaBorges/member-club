import { getClientByid } from '../services/client-by-id.js';
import { createHistory } from './history.js';
import { setDataLoyaltyCard } from './loyaltyCard.js';
import { setDataToProgressBar } from './progressBar.js';
import { setDataUserCard } from './user.js';

const inputSeach = document.getElementById('input-seach-card-id')
const inputWrapper = document.getElementsByClassName('input-wrapper')
const buttonIcon = document.getElementById('seach-button')

const hasNotIdRightLenght = (id) => {
  return id.length <= 14
}

const isNotIdInRightPattern = (id) => {
  const pattern = /^\d\d\d\-\d\d\d\-\d\d\d\-\d\d\d$/
  return !pattern.test(id)
} 

inputSeach.addEventListener('focusout', () => {
  inputWrapper[0].classList.remove('input-focus')
})

inputSeach.addEventListener('focus', () => {
  inputWrapper[0].classList.add('input-focus')
});

inputSeach.addEventListener('input', () => {
  if(inputSeach.value.length >= 1){
    buttonIcon.classList.remove('seach-button-disabled')
    buttonIcon.classList.add('seach-button-default')
  } else {
    buttonIcon.classList.remove('seach-button-default')
    buttonIcon.classList.add('seach-button-disabled')
  }
});

buttonIcon.onclick = async () => {
  const id = inputSeach.value

  console.log(id)
  if (hasNotIdRightLenght(id))
    return alert("O id especificado não tem o número correto de caracteres. Verifique o id informado!")

  if (isNotIdInRightPattern(id))
    return alert('O id especificado não tem o padrão correto. Verifique o id informado!')

  try {
    const client = await getClientByid({id})
    
    if (client === undefined) {
      return alert('Usuário não encontrado. Verifique o id informado!')
    }

    setDataUserCard({
      name: client.name,
      clientSince: client.clientSince,
      image: client.img ? client.img : 'https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg'
    })
    setDataLoyaltyCard({
      id: client.id, 
      quantUserHaircut: client.appointmentHistory.length,
      quantHaircutNeeded: client.loyaltyCard.cutsNeeded 
    })
    setDataToProgressBar({
      quantHaircutLeft: client.loyaltyCard.cutsRemaining , 
      quantHaircut: client.loyaltyCard.totalCuts, 
      quantHaircutNeeded: client.loyaltyCard.cutsNeeded 
    })
    createHistory(client.appointmentHistory)

    if (client.loyaltyCard.cutsNeeded === client.loyaltyCard.totalCuts) {
      alert('Parabéns! Seu próximo corte é gratuito!')
    }
    
  } catch (error) {
    console.error(error)
  }
}