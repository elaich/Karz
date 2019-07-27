import * as actions from './Actions';
import * as types from '../constants/ActionTypes';

describe('actions', () => {
  it('should create an action to update cars', () => {
    const cars = [
      {
        title: 'Skoda Kodiaq',
        description: 'Stock # 10055 - 179.684 KM - Petrol - Yellow',
        image: 'http://localhost:3001/car.svg',
        link: '/view?sn=10055'
      }
    ];
    const expectedAction = {
      type: types.UPDATE_CARS,
      cars
    };

    expect(actions.updateCars(cars)).toEqual(expectedAction);
  });

  it('should create an action to update color options', () => {
    const colors = [{ label: 'Yellow', value: 'yellow' }, { label: 'Red', value: 'red' }];

    const expectedAction = {
      type: types.UPDATE_COLORS,
      colors
    };

    expect(actions.updateColorOptions(colors)).toEqual(expectedAction);
  });

  it('should create an action to update manufacturer options', () => {
    const manufacturers = [{ label: 'Fiat', value: 'Fiat' }, { label: 'BMW', value: 'BMW' }];

    const expectedAction = {
      type: types.UPDATE_MANUFACTURERS,
      manufacturers
    };

    expect(actions.updateManufacturerOptions(manufacturers)).toEqual(expectedAction);
  });

  it('should create an action to update cars count', () => {
    const expectedAction = {
      type: types.UPDATE_CARS_COUNT,
      carsCount: 100
    };

    expect(actions.updateCarsCount(100)).toEqual(expectedAction);
  });

  it('should create an action to update color filter', () => {
    const expectedAction = {
      type: types.UPDATE_COLOR_FILTER,
      color: 'yellow'
    };

    expect(actions.updateColorFilter('yellow')).toEqual(expectedAction);
  });

  it('should create an action to update manufacturer filter', () => {
    const expectedAction = {
      type: types.UPDATE_MANUFACTURER_FILTER,
      manufacturer: 'Fiat'
    };

    expect(actions.updateManufacturerFilter('Fiat')).toEqual(expectedAction);
  });

  it('should create an action to update sort', () => {
    const expectedAction = {
      type: types.UPDATE_SORT,
      sort: 'asc'
    };

    expect(actions.updateSort('asc')).toEqual(expectedAction);
  });

  it('should create an action to update page', () => {
    const expectedAction = {
      type: types.UPDATE_PAGE,
      page: 2
    };

    expect(actions.updatePage(2)).toEqual(expectedAction);
  });

  it('should create an action to update pages', () => {
    const expectedAction = {
      type: types.UPDATE_PAGES,
      pages: 9
    };

    expect(actions.updatePages(9)).toEqual(expectedAction);
  });
});
