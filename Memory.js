

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    // Card options
const cardArray = [

    {
        name: 'Deer',
        img: 'images/Deer.jpg'

    },
    
    {
        name: 'Frog',
        img: 'images/Frog.jpg'

    },
    
    {
        name: 'Giraf',
        img: 'images/Giraf.jpg'

    },
    
    {
        name: 'Goat',
        img: 'images/Goat.jpg'

    },
    
    {
        name: 'Monkey',
        img: 'images/Monkey.jpg'

    },
    
    {
        name: 'pandaR',
        img: 'images/PandaR.jpg'

    },
    
    {
        name: 'Pig',
        img: 'images/Pig.jpg'

    },
    
    
    {
        name: 'Teddy',
        img: 'images/Teddy.jpg'

    },
    
    {
        name: 'Start',
        img: 'images/Start.jpg'

    },
    {

        name: 'White',
        img: 'images/White.jpg'
    }


]

// create your board
cardArray.sort(() => 0.5 -Math.random())


    const grid = document.querySelector(".grid")
    const resultDisplay = document.querySelector('#result')
    var cardsChoosen = []
    var cardsChoosenId = []
    var cardsWon = []

    for (let i = 0; i < cardArray.length; i++) {
        
        var card = document.createElement('img')
        card.setAttribute('src','images/Start.jpg')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipCard)

        grid.appendChild(card)
        
    }


    checkForMatch =()=>{

        var cards =  document.querySelectorAll('img')
        const optionOneId = cardsChoosenId[0]
        const optionTwoId = cardsChoosenId[1]
        if(cardsChoosen[0] === cardsChoosen[1]){

            alert("You found a match")
            cards[optionOneId].setAttribute('src','images/White.jpg')
            cards[optionTwoId].setAttribute('src','images/White.jpg')
            cardsWon.push(cardsChoosen)

        }else{

            cards[optionOneId].setAttribute('src','images/Start.jpg')
            cards[optionTwoId].setAttribute('src','images/Start.jpg')
        }
        cardsChoosen = []
        cardsChoosenId = []
        resultDisplay.textContent = cards.Won.length
        if(cardsWon.length === cardArray.length/2){

            resultDisplay.textContent = 'Congratulations You found them all!'
        }



    }

    function flipCard (){

    var cardId = this.getAttribute('data-id')
    cardsChoosen.push(cardArray[cardId].name)
    cardsChoosenId.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)

    if(cardsChoosen.length ===2){

        setTimeout(checkForMatch, 500)
    }
   } 
})