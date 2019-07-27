import { stringify } from 'query-string';

export interface IParameters {
  page?: number;
  color?: string;
  manufacturer?: string;
  sort?: string;
}

export const HOST = 'http://localhost:3001';

export const Api = {
  fetchCars: (parameters?: IParameters) => {
    const query = stringify(parameters);
    const url = query ? '/cars?' + query : '/cars';
    return fetch(HOST + url).then(response => response.json());
  },

  fetchCar: (stockNumber: number) => {
    return fetch(`${HOST}/cars/${stockNumber}`).then(response => response.json());
  },

  fetchColors: () => {
    return fetch(HOST + '/colors').then(response => response.json());
  },

  fetchManufacturers: () => {
    return fetch(HOST + '/manufacturers').then(response => response.json());
  }
};
