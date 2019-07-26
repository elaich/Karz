import { carsApp, IState } from './carsApp';
import { IOption } from '../models/option';
import {
  updatePage,
  updateSort,
  updateCars,
  updateColorFilter,
  updateColorOptions,
  updateManufacturerOptions,
  updateCarsCount
} from '../actions/Actions';

describe('cars reducer', () => {
  const initialState: IState = {
    cars: [],
    colorOptions: [],
    manufacturerOptions: []
  };

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
    expect(carsApp(initialState, updateColorFilter('yellow'))).toEqual({ ...initialState, colorFilter: 'yellow' });
  });

  it('should update sort', () => {
    expect(carsApp(initialState, updateSort('asc'))).toEqual({ ...initialState, sort: 'asc' });
  });

  it('should update page', () => {
    expect(carsApp(initialState, updatePage(10))).toEqual({ ...initialState, page: 10 });
  });
});
