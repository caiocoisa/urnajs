const container = document.getElementById("container")
container.setAttribute("style", "border: 2px solid blue;")

const row = document.createElement("div")
row.setAttribute("class", "columns" )

const tela = document.createElement("div")
tela.setAttribute("class", "column is-5 is-success")
tela.setAttribute("style", "background-color:green;")
//tela.innerText = "Tela"

const teclado = document.createElement("div")
teclado.setAttribute("class", "column is-success")
teclado.setAttribute("style", "background-color:yellow;")

const card = document.createElement("div")
card.setAttribute("class", "card")

const cardImage = document.createElement("div")
cardImage.setAttribute("class", "card-image")

const media = document.createElement("div")
media.setAttribute("class", "media")

const mediaLeft = document.createElement("div")
mediaLeft.setAttribute("class", "media-left")

const figureImage = document.createElement("figure")
figureImage.setAttribute("class", "image is-48x48")

const img = document.createElement("img")
img.setAttribute("src", "src=https://bulma.io/images/placeholders/1280x960.png")

const cardContent = document.createElement("div")
cardContent.setAttribute("class", "card-content")
cardContent.innerText = "Lorem ipsum dolor"

row.appendChild(tela)
row.appendChild(teclado)
container.appendChild(row)

//figureImage.appendChild(img)
//mediaLeft.appendChild(figureImage)
media.appendChild(mediaLeft)
cardContent.appendChild(media)
card.appendChild(cardContent)
tela.appendChild(card)