// import cardImg from './cards'

// let player = {
//     name : "",
//     chip : 0
// }

const cardImg = [
    "1_spades.png",
    "2_spades.png",
    "3_spades.png",
    "4_spades.png",
    "5_spades.png",
    "6_spades.png",
    "7_spades.png",
    "8_spades.png",
    "9_spades.png",
    "10_spades.png",
    "11_spades.png",
    "12_spades.png",
    "13_spades.png",
]

let cards = []
let isAlive = false;
let isBlackJack = false;
let sum = 0
let descEl = document.getElementById("desc-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let playerEl = document.getElementById("player")

const startGame = () => {
    sum = 0
    cards = []
    document.getElementById('dis-card').innerHTML = ""
    isAlive = true
    cards[0] = randomCard()
    cards[1] = randomCard()
    displayCards(cards[0])
    displayCards(cards[1])
    sum = cards[0] + cards[1]
    renderGame()
}

const renderGame = () => {
    cardEl.textContent = "Cards: "
    for(card in cards){
        cardEl.textContent += cards[card]+" "
    }
    sumEl.textContent = "Sum: "+sum

    if(sum > 21){
        descEl.textContent = "You are out of the game."
        isAlive = false
        }
        else if(sum === 21){
        descEl.textContent = "You have won the game."
        isBlackJack = true
        }
        else{
        descEl.textContent = "Do you want to draw another card?"
        }
}

const newCard = () => {
    if(!isAlive ||isBlackJack)return;
    let card = randomCard()
    displayCards(card)
    sum += card
    cards.push(card)
    renderGame()
}

const randomCard = () => {
    let card = Math.floor(Math.random() * 13) + 1
    if(card > 10)
    return 10
    else if(card === 1)
    return 11
    else 
    return card
}

const displayCards = (card) => {
    card += '_spades.png'
    const imageContainer = document.getElementById('dis-card')

    for(let cI of cardImg){
        if(card === cI)
        {
            const img = document.createElement('img')
            img.src = 'images/'+card
            imageContainer.appendChild(img);
            break;
        }
    }
}
