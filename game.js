let cards =[]
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl=document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let player = {
     name:"Maximum Players",
     chips:3
} 

let playerEl=document.getElementById("player-el")
playerEl.textContent=  player.name +" :"  +" " + player.chips
console.log(cards)
function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards= [firstCard,secondCard]
    sum= firstCard+ secondCard
    renderGame()
}
function getRandomCard(){

    let randomNuber= Math.floor(Math.random() * 14)+1
    if(randomNuber>10){
        return 10
    }
    else if(randomNuber===1){
        return 11
    }
    else{
        return randomNuber
    }
}
function renderGame() {
    sumEl.textContent="Sum: " + sum
    cardEl.textContent = "card: " 
    for(let i =0; i<cards.length; i++ ){
        cardEl.textContent+=cards[i]+" "
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! "
        hasBlackJack = true
    } else {
        message = "You're out of the game! "
        isAlive = false
    }
    messageEl.textContent= message}
    function newGame(){
        if( isAlive===true&&hasBlackJack===false){
            let card = getRandomCard()
            sum+=card
            cards.push(card)
            console.log(cards)
            renderGame()
        }
    }