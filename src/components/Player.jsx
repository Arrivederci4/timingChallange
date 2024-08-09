import { useState, useRef } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState(null);
  //const [submitted,setSubmitted] = useState()
  //with a ref, always a JS object, has a prop
  const refPlayerName = useRef();
  // function handleChange(e){
  //   setSubmitted(false)
  //   setPlayerName(e.target.value)
  // }
  function handleNameClick() {
    //setSubmitted(true)
    setPlayerName(refPlayerName.current.value);
    playerName.current.value=''
  }
  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName : "unknown entity"}</h2>
      <p>
        <input
          ref={refPlayerName}
          type="text"
          /*onChange={handleChange}*/
          /*value={playerName}*/
        />
        <button onClick={handleNameClick}>Set Name</button>
      </p>
    </section>
  );
}
