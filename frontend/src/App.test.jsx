import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import App from './App';

beforeEach(() => {
  vi.stubGlobal('fetch', vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve({
          movies: [
            { id: '123', title: 'Top Gun: Maverick' },
            { id: '456', title: 'Sonic the Hedgehog' },
          ],
        }),
    })
  ));
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('App', () => {
  it('renders movie titles when the API responds', async () => {
    render(<App />);
    expect(await screen.findByText('Top Gun: Maverick')).toBeTruthy();
    expect(screen.getByText('Sonic the Hedgehog')).toBeTruthy();
  });
});
