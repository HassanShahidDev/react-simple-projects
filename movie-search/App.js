import React, { useState } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    // Get your own API key from http://www.omdbapi.com/
    const apiKey = "YOUR_API_KEY";
    const res = await fetch(
      `https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`
    );
    const data = await res.json();
    if (data.Search) setMovies(data.Search);
  };

  return (
    <div className="container">
      <h1>Movie Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
      />
      <button onClick={searchMovies}>Search</button>
      <div className="movies">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie">
            <img src={movie.Poster} alt={movie.Title} />
            <p>{movie.Title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
