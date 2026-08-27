import { describe, expect, it } from 'vitest';
import { parseMovies, resolveMovieApiUrl } from './movieData';

describe('movieData', () => {
  it('parses the movie list from the API payload', () => {
    const payload = {
      movies: [
        { id: '123', title: 'Top Gun: Maverick' },
        { id: '456', title: 'Sonic the Hedgehog' },
      ],
    };

    expect(parseMovies(payload)).toEqual([
      { id: '123', title: 'Top Gun: Maverick' },
      { id: '456', title: 'Sonic the Hedgehog' },
    ]);
  });

  it('falls back to the localhost backend URL when no environment variable is supplied', () => {
    expect(resolveMovieApiUrl()).toBe('http://localhost:5000');
  });
});
