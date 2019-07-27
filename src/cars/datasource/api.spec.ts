import fetchMock from 'fetch-mock';
import { stringify } from 'query-string';
import { Api, HOST } from './api';

describe('Api', () => {
  beforeEach(() => {
    fetchMock.get('*', { hello: 'world' });
  });
  afterEach(() => {
    fetchMock.restore();
  });

  it('can fetch cars', async () => {
    const response = await Api.fetchCars();
    expect(fetchMock.called(HOST + '/cars')).toBe(true);
    expect(response).toEqual({ hello: 'world' });
  });

  it('can fetch cars with parameters', async () => {
    const parameters = { sort: 'asc', manufacturer: 'Fiat', page: 3, color: 'red' };
    const response = await Api.fetchCars(parameters);
    const query = stringify(parameters);
    expect(fetchMock.called(HOST + '/cars?' + query)).toBe(true);
  });

  it('can fetch colors', async () => {
    const response = await Api.fetchColors();
    expect(fetchMock.called(HOST + '/colors')).toBe(true);
    expect(response).toEqual({ hello: 'world' });
  });

  it('can fetch car', async () => {
    const response = await Api.fetchCar(1010);
    expect(fetchMock.called(HOST + '/cars/1010')).toBe(true);
    expect(response).toEqual({ hello: 'world' });
  });

  it('can fetch manufacturers', async () => {
    const response = await Api.fetchManufacturers();
    expect(fetchMock.called(HOST + '/manufacturers')).toBe(true);
    expect(response).toEqual({ hello: 'world' });
  });
});
