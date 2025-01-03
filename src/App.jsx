import { useState } from "react";
import Player from "./componets/Player.jsx";
import GameBoard from "./componets/GameBoard.jsx";
import Logs from "./componets/Logs.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";
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


function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState('X');
  const activePlayer = drivedStateObject(gameTurns);


  const gameBoard = initialGameBoard;
  for(let turn of gameTurns){
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  const handleSelectSquare = (rowIndex,colIndex) => {
 //   setActivePlayer((prevActivePlayer) => prevActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns((prevTurns) => {
      console.log(prevTurns);
      let currentPlayer = drivedStateObject(prevTurns);

      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns];
      return updatedTurns
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive = {activePlayer==='X'}/>
          <Player name="Player 2" symbol="O" isActive = {activePlayer==='O'}/>
        </ol>
        <GameBoard onSelectSquar={handleSelectSquare} board={ gameBoard } />
      </div>
      <Logs turns={ gameTurns} />
    </main>
  )
}

export default App
