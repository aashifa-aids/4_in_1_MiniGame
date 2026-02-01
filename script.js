// Show selected game
function showGame(id) {
    document.querySelectorAll('.game').forEach(g => g.style.display = "none");
    document.getElementById(id).style.display = "block";
}

/* ---------- Rock Paper Scissors AI ---------- */
function playRPS(user) {
    let choices = ["rock", "paper", "scissors"];
    let ai = choices[Math.floor(Math.random() * 3)];

    let result = "AI chose " + ai + ". ";

    if (user === ai) result += "Draw 🤝";
    else if (
        (user === "rock" && ai === "scissors") ||
        (user === "paper" && ai === "rock") ||
        (user === "scissors" && ai === "paper")
    ) result += "You Win 🎉";
    else result += "AI Wins 🤖";

    document.getElementById("rpsResult").innerText = result;
}

/* ---------- Tic Tac Toe AI ---------- */
let board = ["","","","","","","","",""];

function playTTT(i) {
    if (board[i] === "") {
        board[i] = "X";
        renderBoard();
        aiMove();
    }
}

function aiMove() {
    let empty = board.map((v,i)=>v===""?i:null).filter(v=>v!==null);
    if (empty.length === 0) return;
    let move = empty[Math.floor(Math.random()*empty.length)];
    board[move] = "O";
    renderBoard();
}

function renderBoard() {
    document.querySelectorAll(".board div").forEach((d,i)=>d.innerText = board[i]);
}

/* ---------- Guess Number ---------- */
let secret = Math.floor(Math.random()*10)+1;

function guessNumber() {
    let g = document.getElementById("guessInput").value;
    document.getElementById("guessResult").innerText =
        g == secret ? "Correct 🎉" : g > secret ? "Too High" : "Too Low";
}

/* ---------- Click Game ---------- */
let clicks = 0;
function countClick() {
    clicks++;
    document.getElementById("clickCount").innerText = "Clicks: " + clicks;
}
