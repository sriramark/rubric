export function parseMovies(responseData) {
  if (!responseData || !Array.isArray(responseData.movies)) {
    return [];
  }

  return responseData.movies.map((movie) => ({
    id: movie.id,
    title: movie.title,
  }));
}

export function resolveMovieApiUrl() {
  return process.env.REACT_APP_MOVIE_API_URL || 'http://localhost:5000';
}
