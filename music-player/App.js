import React, { useState } from "react";
import "./App.css";

const playlist = [
  { title: "Song 1", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
  { title: "Song 2", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
  { title: "Song 3", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" }
];

function App() {
  const [current, setCurrent] = useState(0);
  const audio = new Audio(playlist[current].url);

  const play = () => audio.play();
  const pause = () => audio.pause();
  const next = () => setCurrent((current + 1) % playlist.length);

  return (
    <div className="container">
      <h1>Music Player</h1>
      <h3>{playlist[current].title}</h3>
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
      <button onClick={next}>Next</button>
    </div>
  );
}

export default App;
