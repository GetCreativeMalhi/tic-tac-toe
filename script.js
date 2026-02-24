// this is a script file for tic-tac-toe project
 let gameStateBool = false;
const gameboard  = (() =>{

    let gameboardObj = {
        rows: 3,
        columns: 3,
        board: [], 
    }
    const setGameboard = ()=> { 
            for(let i = 0; i < gameboardObj.rows; i++){
                gameboardObj.board [i] = [];
                
                for(let j = 0; j < gameboardObj.columns; j++){
                  gameboardObj.board[i].push("");
                }
            }
        }
    
    const InsertValue = (row, column, cellValue) => {
        gameboardObj.board[row][column] = cellValue;
        console.dir(gameboardObj.board);
    }


    const getGameboard = () =>  gameboardObj.board;

    return {getGameboard, setGameboard, InsertValue};
})();

gameboard.setGameboard();



const gameController = (() => {
    let board = gameboard.getGameboard();
    
   let playerOneName = "Player 1 ";
   let playerTwoName = "Player 2 ";

    const player = [
        {
            name:playerOneName,
            token:1,
        },
        {
            name:playerTwoName,
            token:2,
        }
    ];

    let activePlayer = player[0];

    const switchPlayer = () =>  activePlayer = activePlayer === player[0] ? player[1]:player[0];

    const getActivePlayer = () => activePlayer;

    const getCell = () => {
        let row;
        let column;
        if (!gameStateBool){
        do { row = parseInt(prompt(`${getActivePlayer().name} Enter row 0, 1 or 2 \n [${board[0][0]}, ${board[0][1]}, ${board[0][2]}] \n [${board[1][0]}, ${board[1][1]}, ${board[1][2]}] \n [${board[2][0]}, ${board[2][1]}, ${board[2][2]}]`));}
            while(row > 2 || row < 0 || isNaN(row));
                
            do { column = parseInt(prompt(`${getActivePlayer().name} Enter Column 0, 1 or 2 \n [${board[0][0]}, ${board[0][1]}, ${board[0][2]}] \n [${board[1][0]}, ${board[1][1]}, ${board[1][2]}] \n [${board[2][0]}, ${board[2][1]}, ${board[2][2]}]`));}
            while(column > 2 || column < 0 || isNaN(column));

            if(board[row][column] === ""){
            let value = getActivePlayer().token;
            gameboard.InsertValue(row, column, value);
            }
            else{
                getCell();
            }
        }
    }
    
    const checkGameState = () => {
        
        if (board[0][0] === 1 && board [1][0] === 1 && board [2][0]=== 1){
            console.log('Winner is Player 1');
            console.dir(board);
             gameboard.setGameboard();
             gameStateBool = true;
            alert(`Winner is Player 1`);
        } else if (board[0][1] === 1 && board [1][1] === 1 && board [2][1]=== 1){
            console.log('Winner is Player 1');
            console.dir(board);
            gameboard.setGameboard();
            gameStateBool = true;
            alert(`Winner is Player 1`);
        } else if (board[0][2] === 1 && board [1][2] === 1 && board [2][2]=== 1){
            console.log('Winner is Player 1');
            console.dir(board);
            gameboard.setGameboard();
            gameStateBool = true;
            alert(`Winner is Player 1`);
        } else if (board[0][0] === 1 && board [0][1] === 1 && board [0][2]=== 1){
            console.log('Winner is Player 1');
            console.dir(board);
            gameboard.setGameboard();
            gameStateBool = true;
            alert(`Winner is Player 1`);
        }
        else if (board[1][0] === 1 && board [1][1] === 1 && board [1][2]=== 1){
            console.log('Winner is Player 1');
            console.dir(board);
            gameboard.setGameboard();
            gameStateBool = true;
            alert(`Winner is Player 1`);
        }
        else if (board[2][0] === 1 && board [2][1] === 1 && board [2][2]=== 1){
            console.log('Winner is Player 1');
            console.dir(board);
            gameboard.setGameboard();
            gameStateBool = true;
            alert(`Winner is Player 1`);
        }
        else if (board[0][0] === 1 && board [1][1] === 1 && board [2][2]=== 1){
            console.log('Winner is Player 1');
            console.dir(board);
            gameboard.setGameboard();
            gameStateBool = true;
            alert(`Winner is Player 1`);
        } else if (board[2][0] === 1 && board [1][1] === 1 && board [0][2]=== 1){
            console.log('Winner is Player 1');
            console.dir(board);
            gameboard.setGameboard();
            gameStateBool = true;
            alert(`Winner is Player 2`);
        } else if (board[0][0] === 2 && board [1][0] === 2 && board [2][0]=== 2){
            console.log('Winner is Player 2');
            console.dir(board);
             gameboard.setGameboard();
             gameStateBool = true;
            alert(`Winner is Player 2`);
        } else if (board[0][1] === 2 && board [1][1] === 2 && board [2][1]=== 2){
            console.log('Winner is Player 2');
            console.dir(board);
            gameboard.setGameboard();
            gameStateBool = true;
            alert(`Winner is Player 2`);
        } else if (board[0][2] === 2 && board [1][2] === 2 && board [2][2]=== 2){
            console.log('Winner is Player 2');
            console.dir(board);
            gameboard.setGameboard();
            gameStateBool = true;
            alert(`Winner is Player 2`);
        } else if (board[0][0] === 2 && board [0][1] === 2 && board [0][2]=== 2){
            console.log('Winner is Player 2');
            console.dir(board);
            gameboard.setGameboard();
            gameStateBool = true;
            alert(`Winner is Player 2`);
        }
        else if (board[1][0] === 2 && board [1][1] === 2 && board [1][2]=== 2){
            console.log('Winner is Player 2');
            console.dir(board);
            gameboard.setGameboard();
            gameStateBool = true;
            alert(`Winner is Player 2`);
        }
        else if (board[2][0] === 2 && board [2][1] === 2 && board [2][2]=== 2){
            console.log('Winner is Player 2');
            console.dir(board);
            gameboard.setGameboard();
            gameStateBool = true;
            alert(`Winner is Player 2`);
        }
        else if (board[0][0] === 2 && board [1][1] === 2 && board [2][2]=== 2){
            console.log('Winner is Player 2');
            console.dir(board);
            gameboard.setGameboard();
            gameStateBool = true;
            alert(`Winner is Player 2`);
        } else if (board[2][0] === 2 && board [1][1] === 2 && board [0][2]=== 2){
            console.log('Winner is Player 2');
            console.dir(board);
            gameboard.setGameboard();
            gameStateBool = true;
            alert(`Winner is Player 2`);
        } else if (!(board.flat().includes(""))){
            gameboard.setGameboard();
            gameStateBool = true;
            alert("Tie");
        }
        
        return gameStateBool;
    }

    const playRound = () => {
        gameboard.setGameboard();
        do {
        getActivePlayer();
        console.log(getActivePlayer().name);    
        getCell();
        checkGameState();
        switchPlayer();
        } while (!gameStateBool)
    } 


    return {getCell, playRound};
})();

gameController.playRound();