let player = 'X'; //'X or 'O'
const Board = ["","","","","","","","",""];
let gameActive = true;
let WinCombo = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];
let div = document.querySelectorAll(".cell");
let moves = 0;
let score = { X: 0, O: 0 };

document.querySelector(".main-text").classList.add("visible");

div.forEach((cell)=>{
    cell.addEventListener("click",function(){
        if(cell.textContent === "" && gameActive){
            cell.textContent = player;
            let index=cell.dataset.index;
            Board[index] = cell.textContent;  //Updates indexes in the Board
            moves++;
            console.dir(Board);   //Displays Updated Board after every click  
            checkWin();  // Function Call
            if(gameActive){
                player = (player === 'X' ? 'O' : 'X');
                // nextPlayer = (player === 'X'?'O' : 'X')
                document.getElementById('status').innerText = `Player ${player}'s Turn`; //Alerts the Next Player
            }
        }
        //Tracks a Cat's Game
        if(moves === 9 && gameActive){
            document.querySelector(".win").innerHTML = "It's a Draw!";
            gameActive = false;
        }
    })
})

function checkWin(){
    for(let combo of WinCombo){
        let [a,b,c] = combo;
        if(Board[a] === player && Board[b] === player && Board[c] === player){
            let winSt = `Player ${player} Wins!`;
            gameActive = false;
            score[player]++;
            document.getElementById('scoreX').textContent = score.X;
            document.getElementById('scoreO').textContent = score.O;
            document.querySelector(".win").innerHTML = winSt;
        }
    }
}

function restart(){
    if(moves !== 0){
        moves=0;
        gameActive=true;
        document.querySelectorAll('.cell').forEach(cell => cell.innerText='');
        Board.fill("");
        document.querySelector(".win").innerHTML = " ";
        document.getElementById('status').innerText = `Player "${player}" starts the Game`;
    }
};