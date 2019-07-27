import { Car } from '../models/car';

import { carMapperFn } from './carMapper';

describe('Car Mapper', () => {
  it('maps a car model to car view model', () => {
    const car: Car = {
      stockNumber: 41400,
      manufacturerName: 'Fiat',
      modelName: 'Marea',
      mileage: {
        number: 100141,
        unit: 'km'
      },
      fuelType: 'Diesel',
      color: 'white',
      pictureUrl: 'http://localhost:3001/car.svg'
    };

    expect(carMapperFn(car)).toEqual({
      title: 'Fiat Marea',
      description: 'Stock # 41400 - 100.141 KM - Diesel - White',
      link: '/41400',
      image: 'http://localhost:3001/car.svg'
    });
  });
});
