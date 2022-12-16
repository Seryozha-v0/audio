import AudioPlayer from './components/AudioPlayer'
import musics from './musics'

function App() {
  return (
    <>
      <AudioPlayer musics={musics} />
    </>
  );
}

export default App;
