const historyList = document.getElementById("history")

function createHistoryItem(historyItem) {
  const divListItemHistory = document.createElement('div')
  divListItemHistory.classList.add('list-item-history')

  const divDetailsContainer = document.createElement('div')

  const date = document.createElement('strong')
  date.textContent = historyItem.date
  const time = document.createElement('p')
  time.textContent = historyItem.time

  const divCheckIcon = document.createElement('div')
  divCheckIcon.classList.add('check-icon')

  divDetailsContainer.append(date, time)
  divListItemHistory.append(divDetailsContainer, divCheckIcon)

  historyList.append(divListItemHistory)
}

export function createHistory(appointmentHistory) {
  historyList.innerHTML = ''
  
  appointmentHistory.forEach(itemHistory => {
    createHistoryItem(itemHistory)
  });
}