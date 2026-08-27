import { useEffect, useState } from 'react';
import { parseMovies, resolveMovieApiUrl } from './movieData';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const apiUrl = resolveMovieApiUrl();

    fetch(`${apiUrl}/movies`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Unable to fetch movies');
        }
        return response.json();
      })
      .then((data) => setMovies(parseMovies(data)))
      .catch(() => setError('Could not load movies.'));
  }, []);

  return (
    <main className="app-shell">
      <h1>Movie Picture Pipeline</h1>
      {error ? <p className="error">{error}</p> : null}
      <ul className="movie-list">
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </main>
  );
}
