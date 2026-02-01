function showGame(id) {
    document.querySelectorAll(".game").forEach(g => g.style.display = "none");
    document.getElementById(id).style.display = "block";
}

/* RPS */
function playRPS(user) {
    const choices = ["rock","paper","scissors"];
    const ai = choices[Math.floor(Math.random()*3)];
    let result = user === ai ? "Draw 🤝" :
        (user==="rock"&&ai==="scissors")||
        (user==="paper"&&ai==="rock")||
        (user==="scissors"&&ai==="paper") ?
        "You Win 🎉" : "AI Wins 🤖";
    document.getElementById("rpsResult").innerText =
        `You: ${user} | AI: ${ai} → ${result}`;
}

/* Tic Tac Toe */
let board = ["","","","","","","","",""];
let gameOver = false;

function playTTT(i) {
    if (board[i] || gameOver) return;
    board[i] = "❌";
    renderBoard();
    if (checkWin("❌")) return endGame("You Win 🎉");
    aiMove();
}

function aiMove() {
    let empty = board.map((v,i)=>v===""?i:null).filter(v=>v!==null);
    if (!empty.length) return endGame("Draw 😮");
    let move = empty[Math.floor(Math.random()*empty.length)];
    board[move] = "⭕";
    renderBoard();
    if (checkWin("⭕")) endGame("AI Wins 🤖");
}

function checkWin(p) {
    const w=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    return w.some(c=>c.every(i=>board[i]===p));
}

function endGame(msg){
    document.getElementById("tttResult").innerText = msg;
    gameOver = true;
}

function resetTTT(){
    board=["","","","","","","","",""];
    gameOver=false;
    document.getElementById("tttResult").innerText="";
    renderBoard();
}

function renderBoard(){
    document.querySelectorAll(".board div").forEach((d,i)=>d.innerText=board[i]);
}

/* Guess */
let secret = Math.floor(Math.random()*10)+1;
function guessNumber(){
    let g = guessInput.value;
    guessResult.innerText = g==secret ? "Correct 🎉" : g>secret?"Too High":"Too Low";
    if(g==secret) secret=Math.floor(Math.random()*10)+1;
}

/* Click */
let clicks=0;
function countClick(){
    clicks++;
    clickCount.innerText="Clicks: "+clicks;
}
