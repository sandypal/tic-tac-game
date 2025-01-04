import { useState } from "react";
const Player =({name,symbol,isActive,onChangeName})=>{
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);
  const buttonClickHandle = ()=>{
    setIsEditing(prevEditing => !prevEditing);
    if(isEditing){
      onChangeName(symbol,playerName);
    }
  }
  const playerChangeHandle = (event) =>{
    setPlayerName(event.target.value);
  }
  let editplayerName = <span className="player-name">{playerName}</span>;
  let buttonCaption = 'Edit';
  if(isEditing === true){
    editplayerName = <input type="text" required value={playerName} onChange={playerChangeHandle} />
    buttonCaption = "Save";
  }
  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editplayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={buttonClickHandle}>{ buttonCaption }</button>
    </li>
  );
}
export default Player;
