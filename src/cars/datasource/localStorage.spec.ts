import { loadState, saveState } from './localStorage';

describe('LocalStorage', () => {
  it('can save favourites and retrieve it', () => {
    saveState({ favourites: ['1', '2'] });
    expect(localStorage.getItem('favourites')).toEqual(JSON.stringify({ favourites: ['1', '2'] }));

    const state = loadState();
    expect(state).toEqual({ favourites: ['1', '2'] });
  });

  it('initialize when not found', () => {
    localStorage.clear();
    const state = loadState();
    expect(state).toEqual({ favourites: [] });
  });
});
