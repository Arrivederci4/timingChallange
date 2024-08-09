import { useRef, useState } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallange({ title, targetTime }) {
  const timer = useRef(); //component instance specific with .current
  const dialog = useRef()
  // const [timerStarted, setTimerStarted] = useState(false);
  // //state to know timer expired
  // const [timerExpired, setTimerExpired] = useState(false);
  const [timeRemaining,setTimeRemaining] = useState(targetTime*1000)
  const timerIsActive = timeRemaining>0&&timeRemaining<targetTime*1000

  if(timeRemaining<=0){
    clearInterval(timer.current)
    
    dialog.current.open()
  }
  function handleReset(){
    setTimeRemaining(targetTime*1000)
  }
  function handleStart() {
    
    timer.current = setInterval(() => {
      setTimeRemaining(prevTimeRemaining=>prevTimeRemaining-10)
    }, 10); //executes every 10ms
  }

  function handleStop() {
    dialog.current.open()
    clearInterval(timer.current);
  }

  return (
    <>
      
      <ResultModal
       ref={dialog}targetTime={targetTime} 
       remainingTime={timeRemaining} 
       onReset = {handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challange
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running..." : "Timer inactive."}
        </p>
      </section>
    </>
  );
}
