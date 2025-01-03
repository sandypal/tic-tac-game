import { useState } from "react";

const GameBoard = ({onSelectSquar,board}) => {

  // const [gameBoard, setGameBoard] = useState(initialGameBoard);
  // const handleClickButton = (rowIndex,colIndex) => {

  //   setGameBoard((prevGameBoard) => {
  //     const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
  //     updatedBoard[rowIndex][colIndex] = currentPlayerSymbol;
  //     return updatedBoard;
  //   });

  //   onSelectSquar();
  // }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=>onSelectSquar(rowIndex,colIndex)} disabled={playerSymbol !== null}>{playerSymbol || ""}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};
export default GameBoard;
