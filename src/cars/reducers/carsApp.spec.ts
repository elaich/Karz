import { carsApp, IState } from './carsApp';
import { IOption } from '../models/option';
import {
  toggleFavourite,
  fetchCarsLoading,
  updatePage,
  updatePages,
  updateSort,
  updateCars,
  updateCar,
  updateColorFilter,
  updateManufacturerFilter,
  updateColorOptions,
  updateManufacturerOptions,
  updateCarsCount
} from '../actions/Actions';

describe('cars reducer', () => {
  const initialState: IState = {
    page: 1,
    pages: 1,
    cars: [],
    favourites: [],
    colorOptions: [],
    sortOptions: [],
    manufacturerOptions: []
  };

  it('should update car', () => {
    const car = {
      title: 'Skoda Kodiaq',
      description: 'Stock # 10055 - 179.684 KM - Petrol - Yellow',
      image: 'http://localhost:3001/car.svg',
      link: '/view?sn=10055'
    };

    expect(carsApp(initialState, updateCar(car))).toEqual({ ...initialState, car });
  });

  it('should update cars', () => {
    const cars = [
      {
        title: 'Skoda Kodiaq',
        description: 'Stock # 10055 - 179.684 KM - Petrol - Yellow',
        image: 'http://localhost:3001/car.svg',
        link: '/view?sn=10055'
      }
    ];

    expect(carsApp(initialState, updateCars(cars))).toEqual({ ...initialState, cars });
  });

  it('should update colors', () => {
    const colorOptions: IOption[] = [
      { label: 'Yellow', value: 'yellow' },
      { label: 'Red', value: 'red' },
      { label: 'White', value: 'white' }
    ];

    expect(carsApp(initialState, updateColorOptions(colorOptions))).toEqual({
      ...initialState,
      colorOptions: [{ label: 'All car colors', checked: true }, ...colorOptions]
    });
  });

  it('should update manufacturers', () => {
    const manufacturerOptions: IOption[] = [{ label: 'BMW', value: 'BMW' }, { label: 'Chrysler', value: 'Chrysler' }];

    expect(carsApp(initialState, updateManufacturerOptions(manufacturerOptions))).toEqual({
      ...initialState,
      manufacturerOptions: [{ label: 'All manufacturers', checked: true }, ...manufacturerOptions]
    });
  });

  it('should update cars count', () => {
    expect(carsApp(initialState, updateCarsCount(100))).toEqual({ ...initialState, carsCount: 100 });
  });

  it('should update color filter', () => {
    const colorOptions: IOption[] = [{ label: 'Yellow', value: 'yellow' }, { label: 'White', value: 'white' }];

    const result = carsApp({ ...initialState, colorOptions }, updateColorFilter('yellow'));
    expect(result.colorFilter).toEqual('yellow');

    expect(result.colorOptions[0].checked).toEqual(true);
  });

  it('should update manufacturer filter', () => {
    const manufacturerOptions: IOption[] = [{ label: 'BMW', value: 'BMW' }, { label: 'Fiat', value: 'Fiat' }];

    const result = carsApp({ ...initialState, manufacturerOptions }, updateManufacturerFilter('BMW'));
    expect(result.manufacturerFilter).toEqual('BMW');

    expect(result.manufacturerOptions[0].checked).toEqual(true);
  });

  it('should update sort', () => {
    const sortOptions: IOption[] = [{ label: 'Ascending', value: 'asc' }, { label: 'Descending', value: 'des' }];
    const result = carsApp({ ...initialState, sortOptions }, updateSort('asc'));
    expect(result.sort).toEqual('asc');
    expect(result.sortOptions[0].checked).toEqual(true);
  });

  it('should update page', () => {
    expect(carsApp(initialState, updatePage(10))).toEqual({ ...initialState, page: 10 });
  });

  it('should toggle favourite', () => {
    const first = carsApp(initialState, toggleFavourite(1));
    expect(first.favourites).toEqual([1]);

    const second = carsApp({ ...initialState, favourites: [2] }, toggleFavourite(1));
    expect(second.favourites).toEqual([2, 1]);

    const third = carsApp({ ...initialState, favourites: [1, 2] }, toggleFavourite(2));
    expect(third.favourites).toEqual([1]);
  });

  it('should update pages', () => {
    expect(carsApp(initialState, updatePages(100))).toEqual({ ...initialState, pages: 100 });
  });

  it('should update cars loading', () => {
    expect(carsApp(initialState, fetchCarsLoading(true))).toEqual({ ...initialState, carsLoading: true });
  });
});
