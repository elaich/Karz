import { stringify } from 'query-string';

export interface IParameters {
  page?: number;
  color?: string;
  manufacturer?: string;
  sort?: string;
}

export const Api = {
  fetchCars: (parameters?: IParameters) => {
    const query = stringify(parameters);
    const url = query ? '/cars?' + query : '/cars';
    return fetch(url).then(response => response.json());
  },

  fetchCar: (stockNumber: number) => {
    return fetch(`/cars/${stockNumber}`).then(response => response.json());
  },

  fetchColors: () => {
    return fetch('/colors').then(response => response.json());
  },

  fetchManufacturers: () => {
    return fetch('/manufacturers').then(response => response.json());
  }
};
