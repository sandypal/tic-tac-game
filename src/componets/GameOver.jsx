const GameOver = ({winner,draw,onRematch}) =>{
  return (
    <div id="game-over">
      <p>{winner}</p>
      <button onClick={onRematch}>Rematch</button>
    </div>
  );
}
export default GameOver;
