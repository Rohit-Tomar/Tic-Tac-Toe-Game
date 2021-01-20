// CONSTANTS
let curSymbol = 'X';
let moves=0;
let matchWonBySomeone = 0;

// SELECTORS
const player = document.getElementById("span");
const gameTable = document.querySelector(".container");

// FUNCTIONS
function checkArray(ar){
    let f = ar[0].innerText;
    let s = ar[1].innerText;
    let t = ar[2].innerText;

    if( (f==s) && (s==t) ){
        alert("Winner of this Game is " + curSymbol);
        location.reload();
    }
}

function checkRow(row){
    // htmlElement to array
    let curRow = Array.from(gameTable.children[row].children);

    checkArray(curRow);
}

function checkCol(row, col){
    var ar = [];
    for(let i=0; i<3; i++){
        let curEle = gameTable.children[i].children[col];
        ar.push(curEle);
    }
    
    checkArray(ar);
}

function checkDiag(row, col){
    let d1 = [];
    for(let i=0; i<3; i++){
        let curEle = gameTable.children[i].children[i];
        d1.push(curEle);
    }    
    console.log(d1);
    checkArray(d1);

    let d2 = [];
    for(let i=0; i<3; i++){
        let curEle = gameTable.children[i].children[3-i-1];
        d2.push(curEle);
    } 
    console.log(d2);
    checkArray(d2);

}

function adjustPlayerName(){
    player.innerText = curSymbol;
    moves++;

    if(moves == 9){
        alert("Game Over!   its a tie ");
        location.reload();
        return;
    }

    if(curSymbol == 'X'){
        curSymbol = 'O';
    } 
    else{
        curSymbol = 'X';
    } 
}

function go(row, col){

    let clickedRow = document.getElementsByClassName("row")[row];
    let clickedBlock = clickedRow.children[col];

    // checking for a valid move
    if(clickedBlock.classList[1] === "complete"){
        alert("Invalid Move");
        return;
    }
    else{
        adjustPlayerName();
    } 
    
    clickedBlock.innerText = curSymbol;
    clickedBlock.classList.remove("unComplete");
    clickedBlock.classList.add("complete");

    checkRow(row);   
    checkCol(row, col); 
    checkDiag(row, col);
}