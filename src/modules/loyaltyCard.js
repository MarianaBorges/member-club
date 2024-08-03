const idUserTag = document.querySelector('#id-container p')
const listCard = document.getElementById('loyalty-card-list')
const cards = document.getElementsByClassName('card')

function createLoyaltyCardList({ quantHaircutNeeded }) {
  for (let index = 0; index < quantHaircutNeeded; index++) {
    const cardLoyaltyCardList = document.createElement('div')
    cardLoyaltyCardList.classList.add('card')
    if (index === quantHaircutNeeded - 1) {
      cardLoyaltyCardList.classList.add('gift')
    }   
    listCard.append(cardLoyaltyCardList) 
  }
}

export function setDataLoyaltyCard({id, quantUserHaircut, quantHaircutNeeded}) {
  idUserTag.textContent = `ID: ${id}`

  listCard.innerHTML = ""

  createLoyaltyCardList({quantHaircutNeeded})

  for (let index = 0; index < quantUserHaircut; index++) {
    if (index === quantHaircutNeeded - 1) {
      cards[index].classList.remove('gift')
    }
    cards[index].classList.add('checked')
  }
}