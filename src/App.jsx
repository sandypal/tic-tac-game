import { useState } from "react";
import Player from "./componets/Player.jsx";
import GameBoard from "./componets/GameBoard.jsx";
import Logs from "./componets/Logs.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";
import GameOver from "./componets/GameOver.jsx";
const initialGameBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null],
];
const drivedStateObject = (gameTurns) => {
  let currentPlayer = 'X'
  if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
    currentPlayer = 'O';
  }
  return currentPlayer;
}


const checkWinner = (board,activePlayer) => {
  for (const combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination;

    const value = board[a.row][a.column];
    //  console.log(value);
      if (
        value && // Ensure the cell is not null
        value === board[b.row][b.column] &&
        value === board[c.row][c.column]
      ) {
        return `${activePlayer[value]}`;
      }
    }
};

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const[players, setPlayers] = useState({
    'X': 'Player 1',
    'O': 'Player 2',
  })
  // const [activePlayer, setActivePlayer] = useState('X');
  const activePlayer = drivedStateObject(gameTurns);


  const gameBoard = [...initialGameBoard.map(inArray=>[...inArray])];
 // const gameBoard = initialGameBoard;
  for(let turn of gameTurns){
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  const handleSelectSquare = (rowIndex,colIndex) => {
 //   setActivePlayer((prevActivePlayer) => prevActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns((prevTurns) => {
      //console.log(prevTurns);
      let currentPlayer = drivedStateObject(prevTurns);

      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns];
      return updatedTurns
    });
  }
  //console.log(gameBoard);

  const handleReMatch = () =>{
    console.log(gameBoard);
    setGameTurns([]);
  }
  let winner = checkWinner(gameBoard,players);

  const handlePlayerClick = (symbol,playerName) =>{
    setPlayers((prevPlayers)=>{
      return {
        ...prevPlayers,
        [symbol]: playerName,

      } })
  }
  //console.log(winner);
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'} onChangeName={handlePlayerClick } />
          <Player name="Player 2" symbol="O" isActive = {activePlayer==='O'} onChangeName={handlePlayerClick }/>
        </ol>
        {winner && <GameOver winner={winner} onRematch={ handleReMatch} />}
        <GameBoard onSelectSquar={handleSelectSquare} board={ gameBoard } />
      </div>
      <Logs turns={ gameTurns} />
    </main>
  )
}

export default App
