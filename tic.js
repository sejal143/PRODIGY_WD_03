
let box1=document.getElementById('1')
let box2=document.getElementById('2')
let box3=document.getElementById('3')
let box4=document.getElementById('4')
let box5=document.getElementById('5')
let box6=document.getElementById('6')
let box7=document.getElementById('7')
let box8=document.getElementById('8')
let box9=document.getElementById('9')
let reset=document.getElementById('reset')

const winningCombination=[
    [1, 2, 3],
    [1, 4, 7],
    [1, 5, 9],
    [2, 5, 8],
    [3, 6, 9],
    [3, 5, 7],
    [4, 5, 6],
    [7, 8, 9]
]

let turnO=true
let player1=[]
let player2=[]
let turns=0

function checkWinner(playerMoves) {
    return winningCombination.some(combination =>
        combination.every(value => playerMoves.includes(value))
    );
}

function disableAllButtons() {
    for (let i = 1; i <= 9; i++) {
        document.getElementById(i.toString()).disabled = true;
    }
}


function RESET(){
    turnO=true
    player1=[]
    player2=[]
    turns=0
    box1.disabled=false
    box2.disabled=false
    box3.disabled=false
    box4.disabled=false
    box5.disabled=false
    box6.disabled=false
    box7.disabled=false
    box8.disabled=false
    box9.disabled=false
    box1.innerText=''
    box2.innerText=''
    box3.innerText=''
    box4.innerText=''
    box5.innerText=''
    box6.innerText=''
    box7.innerText=''
    box8.innerText=''
    box9.innerText=''
}

function onClick(e){
    if(turnO){
        e.target.innerText='O'
        player1.push(parseInt(e.target.value))
        turnO=false
        turns=turns+1
    }
    else{
        e.target.innerText='X'
        player2.push(parseInt(e.target.value))
        turnO=true
        turns=turns+1
    }
    e.target.disabled=true

    let winnerFound = checkWinner(player1) || checkWinner(player2);
    
    if (winnerFound) {
        if (checkWinner(player1)) {
            alert("Winner is O");
        } else if (checkWinner(player2)) {
            alert("Winner is X");
        }
        disableAllButtons();
    }

    if(!winnerFound && turns==9){
        alert("Game is a draw!")
    }
    
}

box1.addEventListener('click',onClick)
box2.addEventListener('click',onClick)
box3.addEventListener('click',onClick)
box4.addEventListener('click',onClick)
box5.addEventListener('click',onClick)
box6.addEventListener('click',onClick)
box7.addEventListener('click',onClick)
box8.addEventListener('click',onClick)
box9.addEventListener('click',onClick)
reset.addEventListener('click',RESET)
