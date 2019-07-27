import fetchMock from 'fetch-mock';
import { stringify } from 'query-string';
import { Api } from './api';

describe('Api', () => {
  beforeEach(() => {
    fetchMock.get('*', { hello: 'world' });
  });
  afterEach(() => {
    fetchMock.restore();
  });

  it('can fetch cars', async () => {
    const response = await Api.fetchCars();
    expect(fetchMock.called('/cars')).toBe(true);
    expect(response).toEqual({ hello: 'world' });
  });

  it('can fetch cars with parameters', async () => {
    const parameters = { sort: 'asc', manufacturer: 'Fiat', page: 3, color: 'red' };
    const response = await Api.fetchCars(parameters);
    const query = stringify(parameters);
    expect(fetchMock.called('/cars?' + query)).toBe(true);
  });

  it('can fetch colors', async () => {
    const response = await Api.fetchColors();
    expect(fetchMock.called('/colors')).toBe(true);
    expect(response).toEqual({ hello: 'world' });
  });

  it('can fetch manufacturers', async () => {
    const response = await Api.fetchManufacturers();
    expect(fetchMock.called('/manufacturers')).toBe(true);
    expect(response).toEqual({ hello: 'world' });
  });
});
