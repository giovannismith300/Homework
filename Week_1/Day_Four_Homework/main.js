let dom = document;
let userInput = dom.getElementById("user-guess")
let output = dom.getElementById("output")
let hint = dom.getElementById("hint-display")
let submitButton = dom.getElementById("submit-button")
let errorMessage = dom.querySelector("#error-message")
let form = dom.querySelector("form")





console.log(userInput)
let moviePrimaries = [
    "A guy with anger management issues and a dead dog",
    "A bunch of vehicles fighting each other",
    "It's about family",
    'This movie is about a dude with a stick...',
    'This movie is about people who go on holiday...',
    'This movie is about two guys with daddy issues who beat each other up...',
    'This movie is about a rectangle...',
    'This movie is about a chick, she has the worst memory...',
    'In this movie, car go fast...',
    'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...',
    'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...',
    'In this movie everyone is like sleeping all the time...',
    'In this movie some kids die and an angel escorts them to heaven...',
    'In this movie some small guys go for a walk...',
]

let movieNames = [
    "John Wick",
    "Transformers",
    "Fast And Furious",
    'Harry Potter',
    'Just Go With It',
    'Never Back Down',
    'Spongebob Squarepants',
    '50 First Dates',
    'Cars',
    'Spiderman',
    'The Wolf Of Wall Street',
    'Inception',
    'Peter Pan', 
    'The Lord Of The Rings',
]

let movieNum
function displayPrimary(){
    let primary= dom.getElementById("primary")
    let hintChooser = Math.floor(Math.random() * (14)) 
    movieNum = hintChooser
    console.log(movieNum)
    primary.innerHTML = moviePrimaries[movieNum]
    
}


let movieHints = [
    "Baba Yaga",
    "Autobots ROLL OUT!",
    "Aunque digan que soy Un bandolero donde voy Le doy gracias a Dios Por hoy estar donde estoy Y voy a seguir con mi tumbao (look it up)",
    'It\'s Magic',
    'Adam, Drew and Jennifer',
    'Kanye West - Stronger',
    'It\'s a cartoon',
    '50 times...',
    'Kachow',
    'Peta-Paka',
    'HAWOOooooooooooo',
    'Dreams...',
    'Always flying, cuz he neverlands',
    'You will not vacate past this exact position'

]

let wrongMessages = [
    "Nope! Try Again!",
    "Nahhhhh",
    "Not That One! Good Guess Though!"
        ]
 function checkGuess(event){
    event.preventDefault();
    if(userInput.value == movieNames[movieNum]){
        output.innerHTML = "Correct! " + movieNames[movieNum] + " was the answer!"
        submitButton.setAttribute("type", "button")
        submitButton.setAttribute("onClick","nextQuestion()" )
        submitButton.innerHTML = "NEXT"
        form.removeAttribute("onsubmit")

    }
    else if(userInput.value == " "){
        output.innerHTML = " "
    }
    else if(userInput.value == ""){
            errorMessage.innerHTML = "Make sure you type something before you submit!"
            
        }
    else{
        let messagePicker = Math.floor(Math.random()*3)
        console.log(messagePicker)
        output.innerHTML = wrongMessages[messagePicker]
        console.log(userInput.value)
        console.log(movieNames[movieNum])
    }
} 

function showHint(){
    hint.innerHTML = movieHints[movieNum]
}
function reset(){
    hint.innerHTML = "";
    submitButton.setAttribute("type", "submit")
    submitButton.setAttribute("onClick","checkGuess()")
    submitButton.innerHTML = "Submit" 
    output.innerHTML = ""
    errorMessage.innerHTML = ""
}
function nextQuestion(){
    reset()
    displayPrimary();
    userInput.value = "";
    form.setAttribute("onsubmit, checkGuess()")
    
}