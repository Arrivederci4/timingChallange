import Player from './components/Player.jsx';
import TimerChallange from './components/TimerChallange.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallange title='Easy' targetTime={1}></TimerChallange>
        <TimerChallange title='Mid' targetTime={5}></TimerChallange>
        <TimerChallange title='Hard' targetTime={10}></TimerChallange>
        <TimerChallange title='Moderately Hard' targetTime={15}></TimerChallange>
      </div>
    </>
  );
}

export default App;
