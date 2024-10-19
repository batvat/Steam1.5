const games = [{
    name: 'Asseto corsa',
    cost: 1159,
    image: 'images/asseto-corsa.jpg'
},
{
    name: 'Baldurs gate',
    cost: 1999,
    image: 'images/baldurs-gate.jpg'
},
{
    name: 'BeamNG drive',
    cost: 880,
    image: 'images/beamNG-drive.jpg'
},
{
    name: 'Dark souls 3',
    cost: 2399,
    image: 'images/dark-souls-3.jpg'
},
{
    name: 'Rust',
    cost: 1100,
    image: 'images/rust.jpg'
},
{
    name: 'Squad',
    cost: 1799,
    image: 'images/squad.jpg'
}]
const basket = []
window.addEventListener('load', () => {
    const gamesBlock = document.querySelector('.games-block')
    for (let game of games) {
        gamesBlock.innerHTML += `<div class="games-block__game">
                <h2 class="game__name">${game.name}</h2>
                <p class="game__price">${game.cost} $</p>
                <img class="game__img" src="${game.image}" alt="">
                <button class="game__buy">В корзину</button>
            </div>`
        const buttons = document.querySelectorAll('.game__buy')
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', () => {
                basket.push(games[i])
                showBasket();
                allsum();
            })
        }
    }
})
const basketBtn = document.querySelector('.basket-btn')
const basketBlock = document.querySelector('.basket-block')
let basketIsOpen = false
basketBtn.addEventListener('click', () => {
    if (basketIsOpen) {
        basketBlock.style.right = "-400px";
        basketBtn.querySelector('img').style.transform = "rotate(180deg)"
    }
    else {
        basketBlock.style.right = "0px";
        basketBtn.querySelector('img').style.transform = "rotate(0deg)"

    }
    basketIsOpen = !basketIsOpen
})
let basketGames = document.querySelector(".basket-block__games")
function showBasket() {
    let allcost = 0
    let count = 0
    basketGames.innerHTML = ""
    for (let game of basket) {
        allcost += game.cost
        basketGames.innerHTML += `
        <div class="basket-button-buy">
            <div class="basket-img-div">
                <img src="${game.image}" alt="" class="basket-img">
            </div>
            <div class="basket-block__games__game">
                <h4>${game.name}</h4>
                <h4>${game.cost}</h4>
                <button onclick="deleteGame(${count++})">Удалить</button>
            </div>
            <h2 class="sum"></h2>
        </div>`
    }
}
let sum = document.querySelector(".sum")
function allsum() {
    let asum = 0
    for (let game of basket) {
        asum += game.cost
    }
    sum.innerHTML = `<h2>итого ${asum}</h2>`
}
function deleteGame(count) {
    basket.pop(count);
    showBasket()
    allsum()
}