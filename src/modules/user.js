const userImage = document.querySelector('#user-details img')
const userNameElement = document.querySelector('#tag-user-details h2')
const dateLabel = document.querySelector('#tag-user-details p')

export function setDataUserCard({name, clientSince, image}){
  userImage.setAttribute('src', image)
  userNameElement.textContent = name
  dateLabel.textContent = `Cliente desde ${clientSince}`
}
